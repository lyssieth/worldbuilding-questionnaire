<script lang="ts">
  import {
    DEFAULT_TEMPLATES,
    getTemplate,
    savedTemplates,
    type Template
  } from "./template";

  export let onTemplateChange: (template: Template) => void;

  function onChange(evt: Event) {
    const el = evt.target as HTMLSelectElement;

    const template = getTemplate(el.value);

    if (template) {
      onTemplateChange(template);
    } else {
      // TODO: Error modal
      console.error(`Template ${el.value} not found`);
    }

    el.querySelector("#gremlin")?.remove();

    el.blur();
  }
</script>

<div class="controls">
  <label>
    <span>Template Selection</span>
    <select id="templateSelect" on:change="{onChange}">
      <option disabled selected id="gremlin">--- SELECT A TEMPLATE ---</option>
      <option disabled>--- DEFAULT TEMPLATES ---</option>
      {#each DEFAULT_TEMPLATES as template}
        <option>{template.name}</option>
      {/each}
      <option disabled>--- SAVED TEMPLATES ---</option>
      {#each savedTemplates as template}
        <option>{template.name}</option>
      {/each}
    </select>
  </label>
</div>

<style lang="scss">
  .controls {
    flex-direction: row;
    place-items: space-between;
    padding: 0.25em 0;

    background-color: darken(#242424, 10%);
    border: 1px solid darken(#242424, 10%);
    border-radius: 0.5em 0.5em 0 0;

    @media (prefers-color-scheme: light) {
      background-color: darken(#f9f9f9, 10%);
      border: 1px solid darken(#f9f9f9, 10%);
    }
  }
</style>
