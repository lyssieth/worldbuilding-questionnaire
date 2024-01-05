<script lang="ts">
  let width = 0;

  function toTop() {
    document.body.scrollTo(0, 0); // for Safari
    document.documentElement.scrollTo(0, 0); // for Chrome, Firefox, IE and Opera
  }

  $: condition = width < 600;
</script>

<svelte:window bind:innerWidth="{width}" />
<button on:click="{toTop}" id="scrollButton" title="Return to top"
  >{condition ? "Top ^" : "Back to Top ^"}</button
>

<style lang="scss">
  #scrollButton {
    position: Fixed;
    bottom: 1em;
    right: 1em;
    z-index: 100;
    display: fixed;
    padding: 0.5em;
    background-color: #3c3c3c;

    @media (prefers-color-scheme: light) {
      background-color: #f9f9f9;
    }

    // if it's less than 600px wide, make it smaller
    @media (max-width: 600px) {
      padding: 0.25em;
      content: "^ Scroll";
    }
  }
</style>
