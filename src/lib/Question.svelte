<script lang="ts">
  import QuestionTitle from "./QuestionTitle.svelte";
  import type { TemplateQuestion } from "./template";

  export let question: TemplateQuestion;
  export let questionChanged: (
    question: TemplateQuestion,
    hasValue: boolean
  ) => void;

  let changed = false;
  const { type, placeholder } = question;

  const rows = {
    short: 4,
    medium: 8,
    long: 16,
  };

  function onChange(evt: Event) {
    const el = evt.target as HTMLInputElement | HTMLTextAreaElement;

    if (el.value.length === 0) {
      changed = false;
      questionChanged(question, false);
      return;
    }

    changed = true;
    questionChanged(question, true);
  }
</script>

<li class="question" data-question={question.question}>
  <label>
    <QuestionTitle {changed}>{question.question}</QuestionTitle>
    {#if type === "textarea"}
      {@const { length } = question}
      <textarea
        data-flub={question.placeholder}
        on:change={onChange}
        class="answer"
        rows={rows[length ?? "medium"]}
        {placeholder}
      />
    {:else if type === "number"}
      <input
        data-flub={question.placeholder}
        on:change={onChange}
        class="answer"
        type="number"
        {placeholder}
      />
    {:else if type === "text"}
      {@const { length } = question}
      <input
        data-flub={question.placeholder}
        on:change={onChange}
        class="answer"
        type="text"
        {placeholder}
        data-length={length ?? "medium"}
      />
    {/if}
  </label>
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
