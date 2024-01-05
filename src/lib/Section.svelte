<script lang="ts">
  import Question from "./Question.svelte";
  import SectionTitle from "./SectionTitle.svelte";
  import type { TemplateQuestion, TemplateSection } from "./template";

  export let section: TemplateSection;
  export let sectionChanged: (
    section: TemplateSection,
    anyValues: boolean
  ) => void;

  let questionMap: Map<string, boolean> = new Map(
    section.questions.map((q) => [q.question, false])
  );
  let changed = false;
  let count = 0;

  function anyHasValue() {
    return Array.from(questionMap.values()).some((v) => v);
  }

  function questionChanged(question: TemplateQuestion, hasValue: boolean) {
    questionMap.set(question.question, hasValue);
    changed = anyHasValue();
    // TODO: make it mark the section as changed somehow
    sectionChanged(section, anyHasValue());

    count = Array.from(questionMap.values()).filter((v) => v).length;
  }
</script>

<details class="section" data-section="{section.title}">
  <summary title="Click to expand/collapse">
    <SectionTitle {changed}
      >{section.title} ({count}/{section.questions.length})</SectionTitle
    >
    {#if section.description}
      <p class="section-description">{section.description}</p>
    {/if}
  </summary>
  <ul class="section-questions">
    {#if section.questions.length > 0}
      {#each section.questions as question}
        <Question bind:question {questionChanged} />
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
