<script>
  const items = [
    { image: "/assets/photo1.png", desc: "Social" },
    { image: "/assets/photo2.jpeg", desc: "some " },
    { image: "/assets/photo3.jpeg", desc: "Desc" }
  ];

  let currIndex = 0;

  $: console.log(currIndex);

  // Methods / Functions
  const handleChangeContent = index => currIndex = index;

</script>

<style lang="scss">
  @import "../style/theme.scss";

  article {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
  }

  figure {
    width: 100%;
    height: 30rem;
    background-color: azure;
    margin-bottom: 1rem;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  nav {
    display: flex;
    width: fit-content;

    span {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 2rem;
      height: 2rem;
      background-color: transparent;
      border: 2px solid $main-color;
      border-radius: 50%;
      margin: 0 0.5rem;
      cursor: pointer;

      &::before {
        content: "";
        width: 1.2rem;
        height: 1.2rem;
        border-radius: 50%;
        background-color: transparent;
      }
    }
  }

  .active::before {
    background-color: $main-color !important;
  }
</style>

<article>
  <figure>
    <img src={items[currIndex].image} alt={items[currIndex].desc} />
  </figure>
  <nav>
    <span class:active={0 === currIndex} on:click={() => handleChangeContent(0)} />
    <span class:active={1 === currIndex} on:click={() => handleChangeContent(1)} />
    <span class:active={2 === currIndex} on:click={() => handleChangeContent(2)} />
  </nav>

</article>
