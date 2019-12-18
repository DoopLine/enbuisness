<script>
  export let type = "button";
//   export let className = "";
</script>

<style lang="scss">
  @import "../style/theme.scss";

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: $main-color;
    color: $light-color;
    border-radius: 5px;
    box-shadow: 0 0 3px #00000026;
    border: none;
    width: fit-content;
    padding: 1rem 2rem;
    font-size: 2rem;
    text-transform: uppercase;
    cursor: pointer;
    font-weight: bold;
    letter-spacing: 1px;
    transition: box-shadow .2s;

    &:hover,
    &:focus {
      box-shadow: 0 1px 8px lighten($dark-color, 5);
    }

    &:disabled{
        background-color: lighten($main-color, 30);
        box-shadow: none;
        cursor: not-allowed;
    }
  }
</style>

<button {type}>
  <slot>Lorem</slot>
</button>
