<script>
  import { onMount, createEventDispatcher } from "svelte";
  import { fade } from "svelte/transition";

  import MdChevronLeft from "svelte-icons/md/MdChevronLeft.svelte";
  import MdChevronRight from "svelte-icons/md/MdChevronRight.svelte";

  export let imagePath;

  const dispatch = createEventDispatcher();
  let showImageNode;

  onMount(() => showImageNode.focus());
</script>

<style lang="scss">
  @import "../style/mixins.scss";
  @import "../style/theme.scss";
  div {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
    display: flex;
    @include transform-center;
    align-items: center;

    :global(svg) {
      cursor: pointer;
      z-index: 1;
      height: auto;
      color: $white-color;
    }
  }
  img {
    height: 100%;
    width: 70%;
    object-fit: cover;
  }

  span {
    position: absolute;
    width: 99%;
    height: 100%;
    background-color: rgb(0, 0, 0, 0.5);
    border-radius: $radius;
  }
</style>

<div tabindex="0" bind:this={showImageNode} on:blur transition:fade>
  <MdChevronLeft on:click={()=> dispatch('prev')} />
  <img src={imagePath} alt="teste" />
  <MdChevronRight on:click={()=> dispatch('next')} />
</div>
<span />
