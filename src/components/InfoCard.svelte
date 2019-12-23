<script>
  import Logo from "./Logo.svelte";
  import GraphicsLogo from "./GraphicsLogo.svelte";
  import ConsultLogo from "./ConsultLogo.svelte";
  import EnOutline from "./EnOutline.svelte";

  import Button from "./Button.svelte";
  import GridImage from "../components/GridImage.svelte";

  export let title;
  export let reverse = false;
  export let type = "service";
  export let images = [];

  let showGrid = false;
  let currIndex = undefined;

  const handleShowGrid = () => {
    if (showGrid) currIndex = undefined;
    showGrid = !showGrid;
  };
</script>

<style lang="scss">
  @import "../style/theme.scss";

  section {
    display: flex;
    max-height: 35rem;
    color: $dark-color;
    margin-bottom: 10rem;
    height: 30rem;

    @media only screen and (max-width: $mobile) {
      flex-direction: column;
      height: initial;
      max-height: initial;
    }
  }

  figure {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: auto;
    min-width: 30rem;
    border-radius: $radius;
    background-color: $main-color;
    cursor: pointer;

    @media only screen and (max-width: $mobile) {
      height: 30rem;
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

    @media only screen and (max-width: $mobile) {
      margin-top: 2rem;
      padding: 1rem;
    }

    :global(button) {
      align-self: flex-end;
      margin-top: 2rem;
    }
  }

  .reverse {
    flex-direction: row-reverse;

    @media only screen and (max-width: $mobile) {
      flex-direction: column;
      height: initial;
      max-height: initial;
    }

    article {
      padding-right: 10rem;
      padding-left: 0;

      @media only screen and (max-width: $mobile) {
        margin-top: 2rem;
        padding: 1rem;
      }
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
      on:click={handleShowGrid}>
      {#if type === 'graphics'}
        <GraphicsLogo size="lg" />
      {:else if type === 'economic'}
        <ConsultLogo size="lg" />
      {:else}
        <Logo size="lg" />
      {/if}
      <EnOutline />
    </figure>
  {/if}
  <article>
    <h4>{title}</h4>
    {#if currIndex !== undefined && showGrid}
      <p>{images[currIndex].text}</p>
    {:else}
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque
        rerum dolorum aspernatur quisquam nam laboriosam pariatur esse ad, iure
        vitae? Necessitatibus pariatur quod sequi ipsum repudiandae facilis
        eaque, voluptates voluptate!
      </p>
    {/if}
    <Button on:click={handleShowGrid}>
      {showGrid ? 'Voltar' : 'Ver mais'}
    </Button>
  </article>
</section>
