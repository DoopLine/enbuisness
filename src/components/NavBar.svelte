<script>
  import { onDestroy } from "svelte";

  import FaBars from "svelte-icons/fa/FaBars.svelte";
  import MdMenu from "svelte-icons/md/MdMenu.svelte";

  import Logo from "./Logo.svelte";
  import NavLinks from "./NavLinks.svelte";
  import SideBar from "./SideBar.svelte";

  let floatNavBar = false;
  let showSideNav = false;
  let location = window.location.hash;

  window.addEventListener("scroll", handleWindowScroll);

  onDestroy(() => {
    console.log("scroll evt");
    window.removeEventListener("scroll", handleWindowScroll);
  });

  function handleWindowScroll(e) {
    window.scrollY > 5 ? (floatNavBar = true) : (floatNavBar = false);
    location = window.location.hash;
  }

  const handleCloseSideBar = () => {
    setTimeout(() => {
      showSideNav = false;
    }, 200);
  };
</script>

<style lang="scss">
  @import "../style/theme.scss";

  nav {
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    height: fit-content;
    max-width: $landscape;
    height: 7rem;
    transition: 0.5s;
    z-index: 50;

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
    box-shadow: 0 3px 5px rgba(0,0,0,.2);
  }
</style>

<nav class:float={floatNavBar}>
  <span on:click={() => (showSideNav = true)}>
    <MdMenu />
  </span>
  <Logo size="sm" />
  <NavLinks {location} />
  {#if showSideNav}
    <SideBar on:blur={handleCloseSideBar}>
      <Logo />
      <NavLinks {location} block={true} />
    </SideBar>
  {/if}
</nav>
