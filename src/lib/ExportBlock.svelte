<script lang="ts">
  import { Packer } from "docx";
  import { exportToDoc } from "./document";
  import { current, shouldRefresh } from "./store";
  import { exportQuestions } from "./util";

  let exportBlock: HTMLTextAreaElement | null;

  current.subscribe(() => {
    if (exportBlock) exportBlock.value = "";
  });

  shouldRefresh.subscribe(() => {
    if (exportBlock) {
      exportQuestions(exportBlock);
      $shouldRefresh = false;
    }
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
    placeholder="{$current == null
      ? 'No template is selected, so this is pointless :3'
      : 'Write some words and text will appear!'}"
  ></textarea><br />
</label>
<div class="export-buttons">
  <button
    on:click="{async () => {
      if (exportBlock && exportBlock.value.length > 0) {
        await navigator.clipboard.writeText(exportBlock.value);
        alert('Copied to clipboard!');
      } else {
        alert('Nothing to copy!');
      }
    }}">Copy to Clipboard</button
  >
  <button
    on:click="{async () => {
      if (exportBlock && exportBlock.value.length > 0) {
        const doc = exportToDoc(exportBlock.value);

        const blob = await Packer.toBlob(doc);
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'exported.docx';
        document.body.appendChild(a);
        a.click();
        setTimeout(() => {
          document.body.removeChild(a);
          window.URL.revokeObjectURL(url);
        }, 5);
      } else {
        alert('Nothing to export!');
      }
    }}">Export as DOCX</button
  >
</div>
