<script>
  // import { fade } from "svelte/transition";

  import Button from "../components/Button.svelte";
  import Carrocel from "../components/Carrocel.svelte";
  import NavBar from "../components/NavBar.svelte";

  let currColor = "blue";
</script>

<style lang="scss">
  @import "../style/theme.scss";

  .header {
    display: flex;
    flex-direction: column;
    background: url("/assets/bg_polygon.png") no-repeat $main-color;
    background-size: cover;
    background-position-y: center;
    height: fit-content;
    padding: 3rem 6rem;
    position: relative;
    align-items: center;
    height: 65rem;

    @media only screen and (max-width: $tablet) {
      height: 70rem;
    }
  }

  .bg-orange{
    background-color: $danger-color;
  }

  .bg-green{
    background-color: $success-color;
  }

  .header_content {
    display: flex;
    height: 100%;
    width: 100%;
    justify-content: space-between;
    max-width: $landscape;
    align-items: center;

    @media only screen and (max-width: $tablet) {
      flex-direction: column-reverse;
      justify-content: center;
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

  img {
    position: absolute;
    bottom: -30px;
    animation: fadeInUp 1s ease backwards;
    max-width: 101%;
  }
</style>

<header id="home" class="header" class:bg-orange={currColor === "orange"} class:bg-green={currColor === "green"}>
  <NavBar {currColor} />
  <section class="header_content">
    <article class="header_content_text">
      <h1 class="slide-in-left">Enbusiness</h1>
      <h6 class="slide-in-left">Qualquer negócio em boas mãos.</h6>
    </article>
    <Carrocel bind:currColor />
  </section>
  <img src="./assets/svg/shake_hands.svg" alt="aperto de mãos" />
</header>
