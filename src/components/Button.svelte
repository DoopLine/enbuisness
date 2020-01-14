<script>
  export let type = "button";
  export let secondary = false;
  export let size = "md";
  export let theme = "";
</script>

<style lang="scss">
  @import "../style/theme.scss";

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: $main-color;
    color: $white-color;
    border-radius: 5px;
    box-shadow: 0 0 3px #00000026;
    border: none;
    width: fit-content;
    padding: 1rem 2rem;
    font-size: 1.5rem;
    text-transform: uppercase;
    cursor: pointer;
    font-weight: bold;
    letter-spacing: 1px;
    transition: box-shadow 0.2s;

    &:hover,
    &:focus {
      box-shadow: 0 1px 8px lighten($dark-color, 5);
    }

    &:disabled {
      background-color: lighten($main-color, 30);
      box-shadow: none;
      cursor: not-allowed;
    }
  }

  .secondary {
    background-color: #fff;
    border: 1px solid $white-color;
    color: $dark-color;
  }

  .large {
    padding: 1rem 2.5rem;
    font-size: 2rem;
  }

  .ps-theme {
      color: $white-color;
      background-color: $ps-dark-color;
      border: 3px solid $ps-light-color;
    }

  .ai-theme {
      background-color: $ai-dark-color;
      border: 3px solid $ai-light-color;
      color: $ai-light-color;
    }
    .ae-theme {
      background-color: $ae-dark-color;
      border: 3px solid $ae-light-color;
      color: $ae-light-color;
    }

    .ex-theme {
      color: $white-color;
      background-color: $ex-dark-color;
      border: 3px solid $ex-light-color;
    }
</style>

<button class={theme} on:click {type} class:secondary class:large={size === 'lg'}>
  <slot>Lorem</slot>
</button>
