<script>
  export let src;
  export let alt;
  export let title;
  export let reverse = false;
</script>

<style lang="scss">
  @import "../style/theme.scss";

  section {
    display: flex;
    max-height: 35rem;
    color: $dark-color;
    margin-bottom: 5rem;
  }

  figure {
    width: 100%;
    height: auto;
    min-width: 30rem;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  article {
    width: 100%;
    padding-left: 10rem;
    font-size: 1.6rem;
    display: flex;
    flex-direction: column;
    justify-content: center;

    h4 {
      font-size: 2.5rem;
      font-weight: bold;
      margin-bottom: 1rem;
    }
  }

  .reverse {
    flex-direction: row-reverse;

    article {
      padding-right: 10rem;
      padding-left: 0;
    }
  }
</style>

<section class:reverse>
  <figure>
    <img {src} {alt} />
  </figure>
  <article>
    <h4>{title}</h4>
    <slot />
  </article>
</section>
