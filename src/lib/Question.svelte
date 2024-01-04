<script lang="ts">
  export let question: string;
  export let placeholder: string | undefined = undefined;
  export let type: "textarea" | "number" | "text" = "textarea";
  export let length: "short" | "medium" | "long" = "medium";

  const cols = {
    short: 60,
    medium: 80,
    long: 140,
  };

  const rows = {
    short: 4,
    medium: 8,
    long: 16,
  };
</script>

<li class="question">
  <label>
    <span class="question-text">{question}</span>
    {#if type === "textarea"}
      <textarea
        class="answer"
        rows={rows[length]}
        cols={cols[length]}
        {placeholder}
      />
    {:else if type === "number"}
      <input class="answer" type="number" {placeholder} />
    {:else if type === "text"}
      <input class="answer" type="text" {placeholder} />
    {/if}
  </label>
</li>

<style>
  .question {
    margin-bottom: 1em;
  }

  .question-text {
    display: block;
    font-weight: bold;
    margin-bottom: 0.5em;
  }

  input {
    display: block;
    width: 100%;
  }

  input[type="number"] {
    width: 5em;
  }

  label {
    display: flex;
    flex-direction: column;
    place-items: center;
  }
</style>
