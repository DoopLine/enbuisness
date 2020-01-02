<script>
  import { onDestroy } from "svelte";

  import FaBars from "svelte-icons/fa/FaBars.svelte";
  import MdMenu from "svelte-icons/md/MdMenu.svelte";

  import Logo from "./Logo.svelte";
  import GraphicsLogo from "./GraphicsLogo.svelte";
  import ConsultLogo from "./ConsultLogo.svelte";
  import NavLinks from "./NavLinks.svelte";
  import SideBar from "./SideBar.svelte";

  export let currColor = "blue";

  let floatNavBar = false;
  let showSideNav = false;
  let location = window.location.hash;
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
    // window.location.hash = location;
    window.scrollY > 5 ? (floatNavBar = true) : (floatNavBar = false);
    let calc =
      (window.scrollY * 100) /
      (document.scrollingElement.scrollHeight - window.innerHeight);

    if (calc >= 25 && calc < 78) {
      location = "#service";
    } else if (calc >= 78 && calc < 98) {
      location = "#contact";
    } else if (calc >= 98) {
      location = "#about";
    } else {
      location = "#home";
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
    padding: 3rem 6rem;

    @media only screen and (max-width: $mobile) {
      padding: 3rem;
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
    <NavLinks {location} />
    {#if showSideNav}
      <SideBar on:blur={handleCloseSideBar}>
        <Logo />
        <NavLinks {location} block={true} />
      </SideBar>
    {/if}
  </nav>
</div>
