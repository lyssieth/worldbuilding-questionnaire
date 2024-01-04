<script lang="ts">
  export let title: string;
</script>

<div class="question-block">
  <h3 class="list-title">{title}</h3>
  <ul class="question-list">
    <slot />
  </ul>
</div>

<style>
  .list-title {
    font-size: 1.5em;
    font-weight: bold;
    margin-bottom: 0.1em;
  }

  .question-list {
    list-style-type: none;
    padding-left: 0;
  }

  /* display flex centered */
  .question-block {
    margin-bottom: 1em;
    display: flex;
    flex-direction: column;
    place-items: center;
  }
</style>
