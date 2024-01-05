<script lang="ts">
  export let changed: boolean = false;
</script>

{#if changed}
  <h4
    class="section-title changed"
    title="The content of this section has been changed"
  >
    * <slot /> *
  </h4>
{:else}
  <h4 class="section-title">
    <slot />
  </h4>
{/if}

<style lang="scss">
  .section-title {
    font-size: 1.5em;
    font-weight: bold;
    margin-bottom: 0;
  }

  .changed {
    color: color-mix(
      in lab,
      rgba(255, 255, 255, 0.87) 50%,
      rgba(0, 255, 0, 0.87) 50%
    );

    @media (prefers-color-scheme: light) {
      color: color-mix(in lab, #213547 50%, rgba(0, 184, 0, 0.87) 50%);
    }
  }
</style>
