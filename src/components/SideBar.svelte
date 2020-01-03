<script>
  import { onMount } from "svelte";
  import { fly } from "svelte/transition";

  let sideBar;
  onMount(() => sideBar.focus());
</script>

<style lang="scss">
  @import "../style/theme.scss";
  aside {
    position: fixed;
    display: flex;
    flex-direction: column;
    width: 40%;
    min-width: 25rem;
    height: 100%;
    left: 0;
    top: 0;
    bottom: 0;
    background-color: $main-color;
    padding: 2rem;
    outline: none;
    z-index: 10;

    &:focus {
      box-shadow: 5px 0 15px -2px rgba(0, 0, 0, 0.4);
    }

    :global(figure) {
      margin-bottom: 5rem;
    }

    @media only screen and (max-width: $mobile + 100) {
      :global(svg) {
        width: 15rem;
      }
    }
  }
</style>

<aside transition:fly={{ x: -400 }} tabindex="0" on:blur bind:this={sideBar}>
  <slot />
</aside>
