<script>
  import { onMount } from "svelte";
  // import { fade } from "svelte/transition";

  import Button from "../components/Button.svelte";
  import Carrocel from "../components/Carrocel.svelte";
  import NavBar from "../components/NavBar.svelte";

  let currColor = "blue";
  let animate = false;

  onMount(() => {
    animate = true;
  });
</script>

<style lang="scss">
  @import "../style/theme.scss";

  .header {
    display: flex;
    flex-direction: column;
    background-color: $main-color;
    background-repeat: no-repeat;
    // background-image: url("/assets/bg_polygon.png");
    background-size: cover;
    background-position-y: center;
    height: fit-content;
    padding: 3rem 6rem;
    position: relative;
    align-items: center;
    height: 75rem;

    @media only screen and (min-width: $landscape + 500) {
      height: 100rem;
    }
  }

  .bg-orange {
    background-color: $danger-color;
  }

  .bg-green {
    background-color: $success-color;
  }

  .header_content {
    display: flex;
    height: 100%;
    width: 100%;
    justify-content: space-around;
    max-width: $landscape;
    align-items: center;
    z-index: 1;

    @media only screen and (max-width: $tablet) {
      flex-direction: column-reverse;
      justify-content: center;
    }

    @media only screen and (min-width: $landscape) {
      height: 85%;
    }

    &_text {
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-bottom: 8rem;

      h1 {
        color: $white-color;
        margin-bottom: -1rem;
        text-shadow: 0 0 1px lighten($dark-color, 5);
        animation-duration: 1s;
        animation-delay: 1s;
        animation-fill-mode: backwards;
      }

      h6 {
        color: $light-color;
        font-weight: 500;
        padding-left: 6px;
        animation-duration: 1s;
        animation-delay: 2s;
        animation-fill-mode: backwards;
      }
    }
  }

  .handshake-image {
    position: absolute;
    bottom: -30px;
    animation: fadeInUp 1s ease backwards;
    width: 100%;
    transform: scale(1.1);
  }

  .bg-image {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
</style>

<header
  id="home"
  class="header"
  class:bg-orange={currColor === 'orange'}
  class:bg-green={currColor === 'green'}>
  <NavBar {currColor} />
  <section class="header_content">
    <article class="header_content_text">
      <h1 class:slide-in-left={animate}>Enbusiness</h1>
      <h6 class:slide-in-left={animate}>Qualquer negócio em boas mãos.</h6>
    </article>
    <Carrocel bind:currColor />
  </section>
  <img
    class="bg-image"
    src="./assets/bg_polygon.png"
    alt="enbusiness polígono" />
  <img
    class="handshake-image"
    src="./assets/svg/shake_hands.svg"
    alt="aperto de mãos" />
</header>
