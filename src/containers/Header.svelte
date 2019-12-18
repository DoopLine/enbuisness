<script>
  import Button from "../components/Button.svelte";
  import Carrocel from "../components/Carrocel.svelte";
  import Logo from "../components/Logo.svelte";
  import ENPolygon from "../components/ENPolygon.svelte";

  const linksList = [
    { title: "início", href: "*" },
    { title: "serviços", href: "*" },
    { title: "portifólio", href: "*" },
    { title: "contacto", href: "*" },
    { title: "sobre", href: "*" }
  ];
</script>

<style lang="scss">
  @import "../style/theme.scss";

  .header {
    display: flex;
    flex-direction: column;
    background-color: #d0b990;
    height: fit-content;
    padding: 3rem 6rem;
    position: relative;
    align-items: center;
    height: 55rem;

    & :global(button) {
      margin-bottom: -5rem;
      align-self: flex-start;
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

    p {
      font-size: 3rem;
      color: $main-color;
      font-weight: bold;
    }

    ul {
      display: flex;
      font-size: 1.4rem;

      // @media only screen and (max-width: $desktop) {
        
      // }

      >li{
        position: relative;
      }

      a {
        text-decoration: none;
        margin: 0 1rem;
        color: $dark-color;
        transition: 0.3s;
        border-bottom-color: transparent;
        padding: 3px;
        text-transform: uppercase;
        font-weight: 500;

        &:hover {
          border-bottom: 3px solid $light-color;
        }
      }
    }
  }

  .active_link {
    border-bottom: 3px solid $light-color !important;
  }

  .header_content {
    display: flex;
    height: 100%;
    width: 100%;
    justify-content: space-between;
    max-width: $landscape;
    align-items: center;

    &_text {
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-bottom: 8rem;

      h1 {
        font-size: 8rem;
        color: $main-color;
        margin-bottom: -2rem;
        text-shadow: 0 0 1px lighten($dark-color, 5);
      }

      h2 {
        color: $dark-color;
        font-size: 2.5rem;
        padding-left: 6px;
      }
    }
  }
</style>

<header class="header">
  <nav>
    <Logo />
    <ul>
      {#each linksList as { title, href }}
        <li class="link_item">
          {#if title === 'início'}
            <ENPolygon />
          {/if}
          <a {href} class:active_link={title === 'início'}>{title}</a>
        </li>
      {/each}
    </ul>
  </nav>
  <section class="header_content">
    <article class="header_content_text">
      <h1>Enbuisness</h1>
      <h2>Comércio e prestação de serviços</h2>
    </article>
    <Carrocel />
  </section>
  <Button>Serviços</Button>
</header>
