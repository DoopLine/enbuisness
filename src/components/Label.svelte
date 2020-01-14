<script>
  export let theme = "";
  export let small = false;
</script>

<style lang="scss">
  @import "../style/theme.scss";

  p {
    padding: 0.5rem 1rem;
    margin: 1rem 0;
    background-color: $ps-light-color;
    font-size: 1.7rem;
    font-weight: bold;
    height: fit-content;
    width: 100%;
    text-align: center;
  }

  .small {
    width: fit-content;
    font-size: 1.4rem;
    padding: 0.5rem;
  }

  .ps-theme {
    color: $ps-dark-color;
    background-color: $ps-light-color;
  }

  .ai-theme {
    background-color: $ai-light-color;
    color: $ai-dark-color;
  }
  .ae-theme {
    background-color: $ae-light-color;
    color: $ae-dark-color;
  }

  .ex-theme {
    color: $white-color;
    background-color: $ex-light-color;
  }
</style>

<p class={theme} class:small>
  <slot>Lorem Ipsum</slot>
</p>
