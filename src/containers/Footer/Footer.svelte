<script>
  import NavLinks from "../../components/NavLinks.svelte";
  import SocialIcon from "../../components/SocialIcon.svelte";
  import Logo from "../../components/Logo.svelte";
</script>

<style lang="scss">
  @import "../../style/theme.scss";
  @import "../../style/mixins.scss";

  footer {
    @include flex-center;
    flex-direction: column;
    justify-content: space-between;
    background-color: $main-color;
    min-height: 15rem;
    padding: 3rem 2rem;

  }
  section {
    display: flex;

    :last-child {
      @include flex-center;
      font-size: 1.5rem;
      color: $light-color;
    }
  }
  div {
    display: flex;
    margin-right: 4rem;
    min-width: 18rem;
    justify-content: space-around;
  }
</style>

<footer>
  <section>
    <div>
      <SocialIcon />
      <SocialIcon socialType="instagram"/>
      <SocialIcon socialType="whatsapp"/>
    </div>
    <Logo />
  </section>
  <section>
    <small>© 2020 enbusiness &reg;, Todos os direitos reservados.</small>
  </section>
</footer>
