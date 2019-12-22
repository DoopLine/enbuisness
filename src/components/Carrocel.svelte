<script>
  import EnPolygon from "./EnPolygon.svelte";
  import { fade } from "svelte/transition";

  const items = [
    { image: "./assets/photo1.png", desc: "Social" },
    { image: "./assets/photo2.jpeg", desc: "some " },
    { image: "./assets/photo3.jpeg", desc: "Desc" }
  ];

  let currIndex = 0;

  // Methods / Functions
  const handleChangeContent = index => (currIndex = index);
</script>

<style lang="scss">
  @import "../style/theme.scss";

  article {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-basis: 50%;
  }

  figure {
    flex-basis: 100%;
    height: 30rem;
    margin-bottom: 1rem;
    border-radius: $radius;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      animation: zoomIn 1s ease-out;
      border-radius: $radius;
      box-shadow: 0 1px 10px rgba(0, 0, 0, 0.4);
    }
  }

  nav {
    display: flex;
    width: fit-content;

    :global(svg) {
      margin-right: 0.5rem;
      cursor: pointer;
      color: $white-color;
    }
  }
</style>

<article>
  <figure>
    <img src={items[currIndex].image} alt={items[currIndex].desc} />
  </figure>
  <nav>
    <EnPolygon
      size="md"
      stroke={currIndex !== 0}
      on:click={() => handleChangeContent(0)} />
    <EnPolygon
      size="md"
      stroke={currIndex !== 1}
      on:click={() => handleChangeContent(1)} />
    <EnPolygon
      size="md"
      stroke={currIndex !== 2}
      on:click={() => handleChangeContent(2)} />
  </nav>

</article>
