<script>
  import { onDestroy } from "svelte";
  import {location} from 'svelte-spa-router';

  import FaBars from "svelte-icons/fa/FaBars.svelte";
  import MdMenu from "svelte-icons/md/MdMenu.svelte";

  import Logo from "./Logo.svelte";
  import GraphicsLogo from "./GraphicsLogo.svelte";
  import ConsultLogo from "./ConsultLogo.svelte";
  import NavLinks from "./NavLinks.svelte";
  import SideBar from "./SideBar.svelte";

  export let floatNavBar = false;
  export let currColor = "blue";

  let showSideNav = false;
  let hash = "#home";
  let timeout;

  $: currLogoComponent = () => {
    if (currColor === "orange") {
      return GraphicsLogo;
    } else if (currColor === "green") {
      return ConsultLogo;
    } else {
      return Logo;
    }
  };

  document.addEventListener("scroll", handleWindowScroll);

  onDestroy(() => {
    console.log("scroll evt");
    document.removeEventListener("scroll", handleWindowScroll);
  });

  function handleWindowScroll(e) {
    window.scrollY > 150 ? (floatNavBar = true) : (floatNavBar = false);
    if($location === '/cursos'){
      hash = null;
      return;
    } 

    let calc =
      (window.scrollY * 100) /
      (document.scrollingElement.scrollHeight - window.innerHeight);

    if (calc >= 19 && calc < 65) {
      hash = "#service";
    } else if (calc >= 65 && calc < 98) {
      hash = "#contact";
    } else if (calc >= 96) {
      hash = "#about";
    } else {
      hash = "#home";
    }
  }

  const handleCloseSideBar = () => {
    timeout = setTimeout(() => {
      showSideNav = false;
      clearTimeout(timeout);
    }, 200);
  };
</script>

<style lang="scss">
  @import "../style/theme.scss";

  .wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
    z-index: 50;
    transition: 0.5s;
    padding: 2rem 6rem;

    @media only screen and (max-width: $mobile) {
      padding: 1rem 3rem;
    }
  }

  nav {
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    height: fit-content;
    max-width: $landscape;
    height: 7rem;

    :global(figure) {
      margin-right: auto;
    }

    :global(ul) {
      // display: initial;

      @media only screen and (max-width: $desktop) {
        display: none;
      }
    }

    span {
      width: 3rem;
      margin-right: 5rem;
      color: $white-color;
      cursor: pointer;
      display: none;

      @media only screen and (max-width: $desktop) {
        display: initial;
      }
    }
  }

  .float {
    position: fixed;
    top: 0;
    padding: 0 6rem;
    background-color: $main-color;
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.2);

    @media only screen and (max-width: $mobile) {
      padding: 0 3rem;
    }
  }

  a {
    @media only screen and (max-width: $mobile + 100) {
      :global(svg) {
        width: 15rem;
      }
    }
  }
</style>

<div class="wrapper" class:float={floatNavBar}>
  <nav>
    <span on:click={() => (showSideNav = true)}>
      <MdMenu />
    </span>
    <a href="#home">
      <svelte:component this={currLogoComponent()} />
    </a>
    <NavLinks {hash} />
    {#if showSideNav}
      <SideBar on:blur={handleCloseSideBar}>
        <Logo />
        <NavLinks {hash} block={true} />
      </SideBar>
    {/if}
  </nav>
</div>
