<script lang="ts">
  import EditableText from "./EditableText.svelte";
  import QuestionTitle from "./QuestionTitle.svelte";
  import { current, editMode } from "./store";
  import type { TemplateQuestion } from "./types/template";

  let self: HTMLLIElement | null;
  export let question: TemplateQuestion;
  export let questionChanged: (
    question: TemplateQuestion,
    hasValue: boolean
  ) => void;

  let qChanged = false;
  const { type, placeholder } = question;

  const rows = {
    short: 4,
    medium: 8,
    long: 16
  };

  function onChange(evt: Event) {
    const el = evt.target as HTMLInputElement | HTMLTextAreaElement;

    if (el.value.length === 0) {
      qChanged = false;
      questionChanged(question, false);
      return;
    }

    qChanged = true;
    questionChanged(question, true);
  }

  current.subscribe(() => {
    qChanged = false;

    if (self) {
      const inputElement = self.querySelector(".answer");

      if (
        inputElement instanceof HTMLInputElement ||
        inputElement instanceof HTMLTextAreaElement
      ) {
        inputElement.value = "";
      }
    }
  });
</script>

<li class="question" data-question="{question.question}" bind:this="{self}">
  {#if $editMode}
    <div class="editable-block">
      <h3>Title</h3>
      <pre class="editable"><EditableText
          bind:value="{question.question}"
        /></pre>
      <hr />
      <h3 class="ediitable-title">Placeholder</h3>
      <pre class="editable"><EditableText
          bind:value="{question.placeholder}"
        /></pre>
      <label style="flex-direction: row; gap: 0.5em;">
        <span>What type of question is this?</span>
        <select bind:value="{question.type}">
          <option value="textarea">Text area</option>
          <option value="text">Text box</option>
          <option value="number">Number</option>
        </select>
      </label>
      {#if question.type === "textarea" || question.type === "text"}
        <label style="flex-direction: row; gap: 0.5em;">
          <span>How large the text area/box should be:</span>
          <select bind:value="{question.length}">
            <option value="short">Short</option>
            <option value="medium">Medium</option>
            <option value="long">Long</option>
          </select>
        </label>
      {/if}
    </div>
  {:else}
    <label>
      <QuestionTitle changed="{qChanged}"
        ><EditableText bind:value="{question.question}" />
        <slot /></QuestionTitle
      >
      {#if type === "textarea"}
        {@const { length } = question}
        <textarea
          data-flub="{question.placeholder}"
          on:change="{onChange}"
          class="answer"
          rows="{rows[length ?? 'medium']}"
          {placeholder}
        ></textarea>
      {:else if type === "number"}
        <input
          data-flub="{question.placeholder}"
          on:change="{onChange}"
          class="answer"
          type="number"
          {placeholder}
        />
      {:else if type === "text"}
        {@const { length } = question}
        <input
          data-flub="{question.placeholder}"
          on:change="{onChange}"
          class="answer"
          type="text"
          {placeholder}
          data-length="{length ?? 'medium'}"
        />
      {/if}
    </label>
  {/if}
</li>

<style lang="scss">
  .question {
    margin-bottom: 1em;
  }

  input {
    display: block;
    width: 100%;
    max-width: 600px;
  }

  input[type="number"] {
    width: 50%;
  }

  input[type="text"][data-length="short"] {
    width: 40%;
  }

  input[type="text"][data-length="medium"] {
    width: 60%;
  }

  input[type="text"][data-length="long"] {
    width: 80%;
  }

  textarea {
    width: 100%;
    max-width: 600px;
  }

  label {
    display: flex;
    flex-direction: column;
    place-items: center;
  }
</style>
