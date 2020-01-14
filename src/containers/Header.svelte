<script>
  import { location } from "svelte-spa-router";

  import HeaderHome from "./HeaderHome.svelte";
  import HeaderCourse from "./HeaderCourse.svelte";

  import Button from "../components/Button.svelte";
  import NavBar from "../components/NavBar.svelte";
  import EnHandShake from "../components/EnHandShake.svelte";

  let currColor = "blue";
</script>

<style lang="scss">
  @import "../style/theme.scss";

  .header {
    display: flex;
    flex-direction: column;
    background-color: $main-color;
    background-repeat: no-repeat;
    background-image: url("/assets/bg_polygon.png");
    background-size: cover;
    background-position-y: center;
    height: fit-content;
    position: relative;
    align-items: center;
    height: fit-content;
  }

  .bg-orange {
    background-color: $danger-color;
  }

  .bg-green {
    background-color: $success-color;
  }

  .bg-image {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.5;
  }
</style>

<header
  id="home"
  class="header"
  class:bg-orange={currColor === 'orange'}
  class:bg-green={currColor === 'green'}>
  <NavBar {currColor} />

  {#if $location === '/cursos'}
    <HeaderCourse />
  {:else}
    <HeaderHome bind:currColor />
  {/if}
  <!-- <img
    class="bg-image"
    src="./assets/bg_polygon.png"
    alt="enbusiness polígono" /> -->
  <EnHandShake />
</header>
