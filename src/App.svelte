<script lang="ts">
  import Controls from "./lib/Controls.svelte";
  import ExportBlock from "./lib/ExportBlock.svelte";
  import Questionnaire from "./lib/Questionnaire.svelte";
  import ScrollButton from "./lib/ScrollButton.svelte";
  import { changed } from "./lib/store";

  window.addEventListener("beforeunload", (e) => {
    if ($changed) {
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
    <Controls />
    <Questionnaire />
  </div>

  <hr />

  <ExportBlock />
</main>
<ScrollButton />
