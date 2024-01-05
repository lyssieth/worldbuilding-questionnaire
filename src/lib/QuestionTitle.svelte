<script lang="ts">
  export let changed: boolean = false;
</script>

{#if changed}
  <span
    class="question-text changed"
    title="The answer to this question has been changed">* <slot /> *</span
  >
{:else}
  <span class="question-text"><slot /></span>
{/if}

<style>
  .question-text {
    display: block;
    font-weight: bold;
    margin-bottom: 0.5em;
  }

  .changed {
    color: color-mix(
      in lab,
      rgba(255, 255, 255, 0.87) 50%,
      rgba(0, 255, 0, 0.87) 50%
    );
  }
</style>
