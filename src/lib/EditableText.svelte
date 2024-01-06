<script lang="ts">
  import EditButton from "./EditButton.svelte";
  import { editMode } from "./store";

  export let value: string | null | undefined;
  export let type: "text" | "textarea" = "text";
  let inputMode = false;
  let input: HTMLElement;

  function key(e: KeyboardEvent) {
    if (e.key == "Enter") {
      input.blur();
    }
  }
</script>

{#if $editMode && inputMode}
  {#if type == "text"}
    <input
      bind:this="{input}"
      on:blur="{() => (inputMode = false)}"
      on:keypress="{key}"
      type="text"
      bind:value
    />
  {:else if type == "textarea"}
    <textarea
      bind:this="{input}"
      on:blur="{() => (inputMode = false)}"
      on:keypress="{key}"
      bind:value
      cols="70"
      rows="5"
    ></textarea>
  {/if}
{:else}
  {value}
  {#if $editMode}
    <EditButton bind:inputMode />
  {/if}
{/if}
