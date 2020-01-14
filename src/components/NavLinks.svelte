<script>
  import { location } from "svelte-spa-router";

  import EnPolygon from "../components/ENPolygon.svelte";

  export let addPolygon = true;
  export let block = false;

  export let hash = window.location.hash;

  const linksList = [
    { title: "início", href: "#home" },
    { title: "serviços", href: "#service" },
    { title: "cursos", href: "#/cursos" },
    { title: "contatos", href: "#contact" },
    { title: "sobre", href: "#about" }
  ];
</script>

<style lang="scss">
  @import "../style/theme.scss";

  ul {
    display: flex;
    font-size: 1.4rem;

    :global(svg) {
      color: $white-color;
    }
  }

  li {
    position: relative;

    :global(svg) {
      position: absolute;
      top: -15px;
      left: 0px;
    }
  }

  a {
    text-decoration: none;
    margin: 0 1rem;
    color: $white-color;
    transition: 0.3s;
    border-bottom-color: transparent;
    padding: 3px;
    text-transform: uppercase;
    font-weight: 500;

    &:hover {
      border-bottom: 3px solid $white-color;
    }
  }

  .active_link {
    font-weight: bold;
    letter-spacing: 1px;
  }

  .block {
    display: block;
    margin-top: 4rem;

    li {
      margin-bottom: 3rem;

      > a {
        border-bottom: 2px solid #335897;
        transition: 0.3s ease-in;
        display: flex;
        padding: 1rem;

        &:hover {
          background-color: #33589799;
        }
      }
    }

    .active_link {
      font-weight: bold;
      letter-spacing: 1px;
    }
  }
</style>

<ul class:block>
  {#each linksList as { title, href }}
    <li class="link_item">
      {#if href.replace('#', '') === $location}
        <EnPolygon />
      {:else if hash === href && addPolygon}
        <EnPolygon />
      {/if}
      <a
        {href}
        class:active_link={hash === href || href.replace('#', '') === $location}>
        {title}
      </a>
    </li>
  {/each}
</ul>
