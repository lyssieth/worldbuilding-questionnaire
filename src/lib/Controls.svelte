<script lang="ts">
  import { changed, current } from "./store";
  import { DEFAULT_TEMPLATES, getTemplate, savedTemplates } from "./template";

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
      // TODO: Error modal
      console.error(`Template ${el.value} not found`);
    }

    el.querySelector("#gremlin")?.remove();

    el.blur();
  }

  function exportAsJson() {
    if ($current) {
      const data = JSON.stringify($current, null, 2);

      const blob = new Blob([data], { type: "application/json" });
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
  <button on:click="{exportAsJson}" class="small"
    >Export template as JSON</button
  >
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

  .small {
    font-size: 0.8em;
  }
</style>
