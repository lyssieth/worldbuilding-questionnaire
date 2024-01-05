<script lang="ts">
  import { state } from "./store";
  import { exportQuestions } from "./util";

  let exportBlock: HTMLTextAreaElement;

  state.subscribe(() => {
    if (exportBlock) exportBlock.value = "";
  });
</script>

<label>
  <p>
    This text area is meant for exporting the questions and their answers. It
    currently exports as a very very basic <a
      href="https://en.wikipedia.org/wiki/Markdown"
      title="markdown wikipedia page">markdown-formatted</a
    > chunk. Empty questions won't get exported, so you can leave any unapplicable
    questions empty, and they won't show up. Same goes for sections.
  </p>

  <textarea
    bind:this="{exportBlock}"
    rows="10"
    id="export"
    readonly
    placeholder="{$state.current == null
      ? 'No template is selected, so this is pointless :3'
      : 'Hit the button to refresh me!'}"
  ></textarea><br />
</label>
<div class="export-buttons">
  <button
    on:click="{() => {
      exportQuestions(exportBlock);
    }}"
    disabled="{$state.current == null}">Refresh</button
  >
  <button
    on:click="{() => {
      navigator.clipboard.writeText(exportBlock.value);
    }}"
    disabled="{exportBlock && exportBlock.value.length <= 0}"
    >Copy to Clipboard</button
  >
</div>
