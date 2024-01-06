<script lang="ts">
  import { changed, current, editMode, importModalOpen } from "./store";
  import {
    DEFAULT_TEMPLATES,
    getTemplate,
    hashTemplate,
    saveToLocalStorage,
    savedTemplates,
    savedToLocalStorage
  } from "./template";
  import type { Template } from "./types/template";

  let templateSelect: HTMLSelectElement;

  function onChange(evt: Event) {
    const el = evt.target as HTMLSelectElement;

    const template = getTemplate(el.value);

    if (template) {
      if ($current && $changed) {
        const confirm = window.confirm(
          "You have unsaved changes. Are you sure you want to change templates?"
        );

        if (!confirm) {
          const el = document.getElementById(
            "templateSelect"
          ) as HTMLSelectElement;

          el.value = $current.name;

          return;
        }
      }

      $current = template;
      $changed = false;

      // can't trust the urls of other people sadly. sorry ;;
      if (template.author instanceof Object) {
        if (
          template.author.name !== "lys" &&
          template.author.url !== "https://lys.ee/contact"
        ) {
          $current.author = template.author.name;
        }
      }
    } else {
      window.alert(`Template ${el.value} not found`);
      console.error(`Template ${el.value} not found`);
    }

    el.querySelector("#gremlin")?.remove();

    el.blur();
  }

  function newTemplate() {
    if ($current && $changed) {
      const confirm = window.confirm(
        "You have unsaved changes. Are you sure you want to create a new template?"
      );

      if (!confirm) {
        return;
      }
    }

    $current = {
      name: "New Template",
      description: "A New Template",
      sections: [],
      author: "Someone"
    };
  }

  async function copyTemplate() {
    if ($current) {
      const template = JSON.parse(JSON.stringify($current)) as Template;
      template.name = `${template.name} (copy)`;
      template.id = await hashTemplate(template);

      $current = template;
    } else {
      alert("No template is currently selected.");
    }
  }

  async function deleteTemplate() {
    if ($current) {
      const confirm = window.confirm(
        "Are you sure you want to delete this template?"
      );

      if (confirm) {
        const index = $savedTemplates.findIndex(
          (template) => template.id === $current?.id
        );

        if (index !== -1) {
          savedTemplates.update((c) => {
            c.splice(index, 1);
            return c;
          });
          $current = null;
          await savedToLocalStorage();
        } else {
          window.alert("Template not found in saved templates.");
          return;
        }
      }
    } else {
      alert("No template is currently selected.");
    }
  }

  async function saveTemplate() {
    if ($current) {
      await saveToLocalStorage($current);
    } else {
      alert("No template is currently selected.");
    }
  }

  async function exportTemplate() {
    if ($current) {
      $current.id = await hashTemplate($current);

      const blob = new Blob([JSON.stringify($current)], {
        type: "application/json"
      });
      const url = URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;
      a.download = `${$current.name}.json`;

      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } else {
      alert("No template is currently selected.");
    }
  }

  function templateName(template: Template): string {
    if ($editMode) {
      return `${template.name} | ${template.id}`;
    } else {
      return template.name;
    }
  }

  editMode.subscribe((v) => {
    if (v && $current) {
      current.update((v) => v); // noop just to trigger the update

      if ($current.author instanceof Object)
        $current.author = $current.author.name; // remove the link so nobody can claim it's an official template
    }
  });
</script>

<div class="controls">
  <div class="row">
    <label>
      <span>Template Selection</span>
      {#key $savedTemplates}
        <select
          bind:this="{templateSelect}"
          id="templateSelect"
          on:change="{onChange}"
        >
          <option disabled selected id="gremlin"
            >--- SELECT A TEMPLATE ---</option
          >
          <option disabled>--- DEFAULT TEMPLATES ---</option>
          {#each DEFAULT_TEMPLATES as template}
            <option>{template.name}</option>
          {/each}
          <option disabled>--- SAVED TEMPLATES ---</option>
          {#each $savedTemplates as template}
            <option>{templateName(template)}</option>
          {/each}
        </select>
      {/key}
    </label>
    <button on:click="{() => ($editMode = !$editMode)}" class="small">
      {$editMode ? "Exit Edit Mode" : "Enter Edit Mode"}</button
    >
    <button on:click="{() => ($importModalOpen = true)}" class="small">
      Import Template</button
    >
  </div>
  {#if $editMode}
    <div class="row">
      <button on:click="{newTemplate}" class="small">New Blank Template</button>
      <button on:click="{copyTemplate}" class="small">Copy Template</button>
      <button on:click="{saveTemplate}" class="small">Save Template</button>
      <button on:click="{deleteTemplate}" class="small">Delete Template</button>
      <button on:click="{exportTemplate}" class="small">Export Template</button>
    </div>
  {/if}
</div>

<style lang="scss">
  .controls {
    flex-direction: column;
    place-items: start;
    padding: 0.25em 0;
    gap: 0.25em;

    background-color: darken(#242424, 10%);
    border: 1px solid darken(#242424, 10%);
    border-radius: 0.5em 0.5em 0 0;

    @media (prefers-color-scheme: light) {
      background-color: darken(#f9f9f9, 10%);
      border: 1px solid darken(#f9f9f9, 10%);
    }

    .row {
      flex-direction: row;
    }
  }

  .small {
    font-size: 0.8em;
  }
</style>
