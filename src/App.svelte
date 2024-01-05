<script lang="ts">
  import Controls from "./lib/Controls.svelte";
  import Questionnaire from "./lib/Questionnaire.svelte";
  import ScrollButton from "./lib/ScrollButton.svelte";
  import { state } from "./lib/store";
  import { type Template } from "./lib/template";
  import { exportQuestions } from "./lib/util";

  let exportBlock: HTMLTextAreaElement;

  let changed: boolean = false;
  let questionnaire: Questionnaire;

  function onTemplateChange(template: Template) {
    if ($state.current && changed) {
      const current = $state.current;
      const confirm = window.confirm(
        "You have unsaved changes. Are you sure you want to change templates?"
      );

      if (!confirm) {
        const el = document.getElementById(
          "templateSelect"
        ) as HTMLSelectElement;

        el.value = current.name;

        return;
      }
    }

    $state.current = template;
    changed = false;

    // can't trust the urls of other people sadly. sorry ;;
    if (template.author instanceof Object) {
      if (
        template.author.name !== "lys" &&
        template.author.url !== "https://lys.ee/contact"
      ) {
        $state.current.author = template.author.name;
      }
    }

    exportBlock.value = "";
  }

  window.addEventListener("beforeunload", (e) => {
    if (changed) {
      const confirm = "Are you sure you want to leave?";
      e.preventDefault();
      e.returnValue = confirm;
      return confirm;
    }
  });
</script>

<main>
  <h1>Worldbuilding Questionnaire</h1>

  <h2>What is this?</h2>
  <p>
    The purpose of this website is to act as a questionnaire for worldbuilding
    purposes. This is v2 of the experiment, where I've added templates for
    different things one might want to build, automatic generation of sections,
    and collapsible sections. There is also change tracking for the sections, so
    changing the template can't break things.
  </p>

  <p>
    This is a work in progress. If you have any suggestions, please leave an
    issue on <a
      href="https://github.com/lyssieth/worldbuilding-questionnaire"
      title="A link to the project's version management site, GitHub."
      >the github</a
    >, or contact me
    <a href="https://lys.ee/contact" title="My contact page"
      >on one of these places I exist on</a
    >.
  </p>
  <hr />

  <div id="questionnaire">
    <Controls {onTemplateChange} />
    {#if $state.current}
      <Questionnaire
        bind:this={questionnaire}
        bind:changed
        current={$state.current}
      />
    {:else}
      <p>There is currently no template selected. Select one above.</p>
    {/if}
  </div>

  <hr />
  <p>
    This text area is meant for exporting the questions and their answers. It
    currently exports as a very very basic <a
      href="https://en.wikipedia.org/wiki/Markdown"
      title="markdown wikipedia page">markdown-formatted</a
    > chunk.
  </p>
  <p>
    Empty questions won't get exported, so you can leave any unapplicable
    questions empty, and they won't show up. Same goes for sections.
  </p>

  <button on:click={() => exportQuestions(exportBlock)} disabled={state == null}
    >Refresh</button
  ><br />
  <textarea
    bind:this={exportBlock}
    rows="25"
    cols="150"
    id="export"
    readonly
    placeholder={state == null
      ? "No template is selected, so this is pointless :3"
      : "Hit the button to refresh me!"}
  />
  <hr />
</main>
<ScrollButton />
