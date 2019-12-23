<script>

</script>

<style lang="scss">
  @import "../style/mixins.scss";
  @import "../style/theme.scss";
  section {
    font-size: 1.5rem;
    display: flex;

    @media only screen and (max-width: $mobile) {
      flex-direction: column;
    }

    p {
      @include flex-center;
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
      padding: 2rem;
      border-radius: $radius;

      &:not(:last-child) {
        margin-right: 1rem;
      }

      @media only screen and (max-width: $mobile) {
        &:not(:last-child) {
          margin-right: initial;
          margin-bottom: 3rem;
        }
      }
    }
  }
</style>

<section>
  <p>
    A ENBUSINESS é uma empresa angolana de comércio e prestação de serviço,
    cujos quadros têm vindo a colaborar com entidades públicas e privadas,
    actuando em diversos sectores de actividade. A nossa linha de actuação
    pauta-se pela integridade, profissionalismo e responsabilidade.
  </p>
  <p>
    O nosso objetivo último é o cumprimento dos compromissos assumidos e desta
    forma, responder satisfatoriamente às expectativas dos nossos clientes.
  </p>
  <p>
    O nosso “know-how” são garante, com provas dadas, da nossa capacidade de
    responder às mais variadas solicitações para diversos sectores de
    actividade, entre as quais, destacamos as indústrias de exploração mineira e
    petrolífera.
  </p>
</section>
