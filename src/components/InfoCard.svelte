<script>
  import Logo from "./Logo.svelte";
  import Button from "./Button.svelte";
  import GridImage from "../components/GridImage.svelte";

  export let title;
  export let reverse = false;
  export let type = "service";
  export let images = [];

  let showGrid = false;
  let currIndex = undefined;
</script>

<style lang="scss">
  @import "../style/theme.scss";

  section {
    display: flex;
    max-height: 35rem;
    color: $dark-color;
    margin-bottom: 10rem;
    height: 30rem;
  }

  figure {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: auto;
    min-width: 30rem;
    border-radius: $radius;
    background-color: $main-color;
    cursor: pointer;

    h3 {
      color: #fff;
      font-size: 4rem;
    }
  }
  .success {
    background-color: $success-color;
  }
  .danger {
    background-color: $danger-color;
  }

  article {
    width: 100%;
    padding-left: 10rem;
    font-size: 1.6rem;
    display: flex;
    flex-direction: column;
    justify-content: center;

    h4 {
      font-size: 2.5rem;
      font-weight: bold;
      margin-bottom: 1rem;
    }

    :global(button) {
      align-self: flex-end;
      margin-top: 2rem;
    }
  }

  .reverse {
    flex-direction: row-reverse;

    article {
      padding-right: 10rem;
      padding-left: 0;
    }
  }
</style>

<section class:reverse>
  {#if showGrid}
    <GridImage {images} bind:currImageindex={currIndex} />
  {:else}
    <figure
      class:danger={type === 'graphics'}
      class:success={type === 'economic'}
      on:click={() => (showGrid = !showGrid)}>
      <Logo />
    </figure>
  {/if}
  <article>
    <h4>{title}</h4>
    {#if currIndex !== undefined && showGrid }
      <p>{images[currIndex].text}</p>
    {:else}
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque
        rerum dolorum aspernatur quisquam nam laboriosam pariatur esse ad, iure
        vitae? Necessitatibus pariatur quod sequi ipsum repudiandae facilis
        eaque, voluptates voluptate!
      </p>
    {/if}
    <Button on:click={() => (showGrid = !showGrid)}>
      {showGrid ? "Voltar" : "Ver mais"}
    </Button>
  </article>
</section>
