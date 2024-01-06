<script lang="ts">
  import { current, importModalOpen } from "./store";
  import validate from "./types/template.validator";

  let dialog: HTMLDialogElement;
  let importArea: HTMLTextAreaElement;

  function importEnter(evt: KeyboardEvent) {
    if (evt.key === "Enter") {
      importModal();
    }
  }

  function importModal() {
    const template = importArea.value;
    console.log(template);

    try {
      const data = validate(JSON.parse(template));
      $current = data;
      $importModalOpen = false;
      dialog.close();
    } catch (e) {
      alert("Invalid template!");
    }
  }

  $: if ($importModalOpen) dialog.showModal();
</script>

<dialog
  bind:this="{dialog}"
  on:close="{() => ($importModalOpen = false)}"
  class="import-modal"
>
  <div>
    <p>
      To import a template, you must paste the template code into the box below.
      and then click the import button or hit enter.
    </p>
    <textarea
      bind:this="{importArea}"
      rows="20"
      cols="100"
      on:keypress="{importEnter}"
    ></textarea>
    <div class="horizontal">
      <button class="import" on:click="{importModal}">Import</button>
    </div>
  </div>
</dialog>

<style lang="scss">
  button.import {
    background-color: color-mix(in srgb, #242424 80%, #0f0 20%);

    @media (prefers-color-scheme: light) {
      background-color: color-mix(in srgb, #f9f9f9 80%, #0f0 20%);
    }
  }

  dialog.import-modal {
    max-width: 64em;
    border-radius: 0.5em;
    border: 2px ridge rgba(255, 255, 255, 0.44);
    padding: 0;

    @media (prefers-color-scheme: light) {
      border: 4px ridge rgba(0, 0, 0, 0.88);
    }
  }

  dialog::backdrop {
    background: blur(5px);
    background-color: rgba(0, 0, 0, 0.7);
  }

  dialog > div {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    place-items: center;
    gap: 0.5em;
  }

  div.horizontal {
    display: flex;
    flex-direction: row;
    place-items: center;
    place-content: space-between;
    gap: 1em;
  }
</style>
