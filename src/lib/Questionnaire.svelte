<script lang="ts">
  import { PlusIcon, XIcon } from "svelte-feather-icons";
  import EditableText from "./EditableText.svelte";
  import Section from "./Section.svelte";
  import { changed, current, editMode, shouldRefresh } from "./store";
  import type { TemplateSection } from "./types/template";

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

  function addSection() {
    current.update((c) => {
      if (c)
        c.sections.push({
          title: "New Section",
          description: "New Section's Description",
          questions: []
        });

      return c;
    });
  }

  function deleteSection(i: number) {
    current.update((c) => {
      if (c) c.sections.splice(i, 1);

      return c;
    });
  }
</script>

<p style="font-size: 0.75em;">Note: the sections are collapsible :3</p>
{#if $editMode}
  <p style="padding: 0 0.25em;">
    When in edit mode, questions will not display the answer box, instead
    displaying a selection box for their type and an editable text for their
    placeholder. Clicking outside of, or hitting enter inside of, the text boxes
    that appear will save the changes.
  </p>
{/if}
{#if $current == null}
  <p>No template is currently selected. Please remain calm and select one:3</p>
{:else}
  <h2 class="template-title">
    <EditableText bind:value="{$current.name}" />
  </h2>
  {#if $current.author}
    <!-- check if it's an Author type -->
    {#if $current.author instanceof Object}
      <h5 class="template-author">
        by <a
          href="{$current.author.url}"
          title="A link to the author of the template."
          >{$current.author.name}</a
        >
      </h5>
    {:else}
      <h5 class="template-author">
        by <EditableText bind:value="{$current.author}" />
      </h5>
    {/if}
  {/if}
  <p class="template-description">
    <EditableText type="textarea" bind:value="{$current.description}" />
  </p>
  <hr />
  {#if $editMode}
    <button class="edit-button" on:click="{addSection}">
      <PlusIcon size="1x" />Add Section
    </button>
  {/if}
  {#if $current.sections.length > 0}
    {#each $current.sections as section, i}
      <Section {section} {sectionChanged}>
        {#if $editMode}
          <button
            class="edit-button"
            on:click="{() => {
              deleteSection(i);
            }}"
            title="Delete this section."
          >
            <XIcon size="1x" />
          </button>
        {/if}
      </Section>
      {#if i !== $current.sections.length - 1}
        <hr />
      {/if}
    {/each}
  {:else}
    <p>
      There are no sections in this template. You can add more once I implement
      this feature.
    </p>
  {/if}
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
