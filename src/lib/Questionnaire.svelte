<script lang="ts">
  import Section from "./Section.svelte";
  import { changed, current, shouldRefresh } from "./store";
  import type { TemplateSection } from "./template";

  $: template = $current;

  let sectionMap: Map<string, boolean> = new Map();

  function anyHasValue() {
    return Array.from(sectionMap.values()).some((v) => v);
  }

  function sectionChanged(section: TemplateSection, hasValue: boolean) {
    sectionMap.set(section.title, hasValue);

    if (anyHasValue()) {
      $changed = true;
      $shouldRefresh = true;
    }
  }
</script>

{#if template == null}
  <p>No template is currently selected. Please remain calm and select one:3</p>
{:else}
  {#key template}
    <h2 class="template-title">{template.name}</h2>
    {#if template.author}
      <!-- check if it's an Author type -->
      {#if template.author instanceof Object}
        <h5 class="template-author">
          by <a
            href="{template.author.url}"
            title="A link to the author of the template."
            >{template.author.name}</a
          >
        </h5>
      {:else}
        <h5 class="template-author">by {template.author}</h5>
      {/if}
    {/if}
    <p class="template-description">
      {template.description}
    </p>
    <hr />
    {#if template.sections.length > 0}
      {#each template.sections as section, i}
        <Section {section} {sectionChanged} />
        {#if i !== template.sections.length - 1}
          <hr />
        {/if}
      {/each}
    {:else}
      <p>
        There are no sections in this template. You can add more once I
        implement this feature.
      </p>
    {/if}
  {/key}
{/if}

<style lang="scss">
  .template-title {
    font-size: 1.5em;
    font-weight: bold;
    margin-bottom: 0;
  }
  .template-author {
    font-size: 0.75em;
    margin-top: 0;
    margin-bottom: 0.75em;
  }
  .template-description {
    font-size: 0.9em;
    margin-top: 0;
    margin-bottom: 0.5em;
  }
</style>
