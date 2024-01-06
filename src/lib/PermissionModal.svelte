<script lang="ts">
  import { permissionGranted, permissionModalOpen } from "./store";

  let dialog: HTMLDialogElement;

  function allowPermission() {
    console.debug("Permission granted");
    $permissionModalOpen = false;
    $permissionGranted = true;
    dialog.close();
  }

  function denyPermission() {
    console.debug("Permission denied");
    $permissionModalOpen = false;
    $permissionGranted = false;
    dialog.close();
  }

  $: if ($permissionModalOpen) dialog.showModal();
</script>

<dialog
  bind:this="{dialog}"
  on:close="{() => ($permissionModalOpen = false)}"
  class="permission-modal"
>
  <div>
    <p>
      To save/load custom templates, this website requires the use of <a
        href="https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API"
        >LocalStorage</a
      >. This is a feature of your browser that allows websites to store data on
      your computer. This data is only accessible by this website, and is not
      shared with anyone else.
    </p>
    <p>
      However, if you do not want anything stored, simply say no. You will still
      be able to edit, export, and import templates, but won't be able to save
      them without saying yes.
    </p>
    <p>
      To my knowledge, this isn't a security issue, but I'm not an expert, and
      you don't know what you don't know.
    </p>
    <p>
      Note that you will have to hit 'Save'/'Load' again, this is a limitation
      of v3 of the experiment, and might not remain in the final version.
    </p>
    <div class="horizontal">
      <button class="allow" on:click="{allowPermission}"
        >Grant Permission</button
      >
      <button class="deny" on:click="{denyPermission}"
        >Deny and Clear LocalStorage</button
      >
    </div>
  </div>
</dialog>

<style lang="scss">
  button.allow {
    background-color: color-mix(in srgb, #242424 80%, #0f0 20%);

    @media (prefers-color-scheme: light) {
      background-color: color-mix(in srgb, #f9f9f9 80%, #0f0 20%);
    }
  }

  button.deny {
    background-color: color-mix(in srgb, #242424 80%, #f00 20%);

    @media (prefers-color-scheme: light) {
      background-color: color-mix(in srgb, #f9f9f9 80%, #f00 20%);
    }
  }

  dialog.permission-modal {
    max-width: 32em;
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
    gap: 0.1em;
  }

  div.horizontal {
    display: flex;
    flex-direction: row;
    place-items: center;
    place-content: space-between;
    gap: 1em;
  }
</style>
