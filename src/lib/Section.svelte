<script lang="ts">
  import { PlusIcon } from "svelte-feather-icons";
  import EditableText from "./EditableText.svelte";
  import Question from "./Question.svelte";
  import SectionTitle from "./SectionTitle.svelte";
  import { current, editMode } from "./store";
  import type { TemplateQuestion, TemplateSection } from "./types/template";

  export let section: TemplateSection;
  export let sectionChanged: (
    section: TemplateSection,
    anyValues: boolean
  ) => void;

  let questionMap: Map<string, boolean> = new Map(
    section.questions.map((q) => [q.question, false])
  );
  let sChanged = false;
  let count = 0;

  function anyHasValue() {
    return Array.from(questionMap.values()).some((v) => v);
  }

  function questionChanged(question: TemplateQuestion, hasValue: boolean) {
    questionMap.set(question.question, hasValue);
    sChanged = anyHasValue();
    sectionChanged(section, anyHasValue());

    count = Array.from(questionMap.values()).filter((v) => v).length;
  }

  function addQuestion() {
    current.update((c) => {
      if (c)
        section.questions.push({
          question: "New Question",
          type: "textarea",
          length: "medium",
          placeholder: "New Placeholder"
        });

      return c;
    });
  }

  function removeQuestion(i: number) {
    current.update((c) => {
      if (c) section.questions.splice(i, 1);

      return c;
    });
  }

  current.subscribe(() => {
    questionMap = new Map(section.questions.map((q) => [q.question, false]));
    sChanged = false;
    count = 0;
  });
</script>

<details class="section" data-section="{section.title}">
  <summary title="Click to expand/collapse">
    <SectionTitle changed="{sChanged}"
      ><EditableText bind:value="{section.title}" /> ({count}/{section.questions
        .length}) <slot /></SectionTitle
    >
    {#if section.description}
      <p class="section-description">
        <EditableText type="textarea" bind:value="{section.description}" />
      </p>
    {/if}
  </summary>
  <ul class="section-questions">
    {#if $editMode}
      <li>
        <button
          class="edit-button"
          title="Add a new question to this section."
          on:click="{addQuestion}"
          ><PlusIcon size="1x" />Add a new question</button
        >
      </li>
    {/if}
    {#if section.questions.length > 0}
      {#each section.questions as question, i}
        <Question bind:question {questionChanged}>
          {#if $editMode}
            <button
              class="edit-button"
              title="Remove this question from the section."
              on:click="{() => {
                removeQuestion(i);
              }}">Remove</button
            >
          {/if}
        </Question>
      {/each}
    {:else}
      <p>
        There are no questions in this section. You can add more once I
        implement this feature.
      </p>
    {/if}
  </ul>
</details>

<style lang="scss">
  details {
    user-select: none;
  }

  summary {
    cursor: pointer;
    list-style: none;

    &::marker {
      display: none;
    }

    &::-webkit-details-marker {
      display: none;
    }
  }

  .section-description {
    font-size: 0.75em;
    margin-top: 0;
    margin-bottom: 1em;
  }

  .section-questions {
    list-style-type: none;
    padding-left: 0;
  }

  .section {
    margin-bottom: 1em;
    display: flex;
    flex-direction: column;
    place-items: center;
  }
</style>
