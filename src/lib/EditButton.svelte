<script lang="ts">
  import { Edit3Icon } from "svelte-feather-icons";
  import { editMode } from "./store";

  export let inputMode: boolean;
</script>

{#if $editMode}
  <button class="edit-button" on:click="{() => (inputMode = !inputMode)}"
    ><Edit3Icon size="1x" /></button
  >
{/if}
