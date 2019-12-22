<script>
  import InfoCard from "../components/InfoCard.svelte";
  import Contact from "../containers/Contact.svelte";
  import About from "../containers/About.svelte";

  const graphicsImages = [
    {
      text:
        "1. A nossa linha de actuação pauta-se pela integridade, profissionalismo e responsabilidade. O nosso objetivo último é o cumprimento dos compromissos assumidos e desta forma, responder satisfatoriamente às expectativas dos nossos clientes.",
      image: "./assets/graphics/web_boilerplate.png"
    },
    {
      text:
        "2. A nossa linha de actuação pauta-se pela integridade, profissionalismo e responsabilidade. O nosso objetivo último é o cumprimento dos compromissos assumidos e desta forma, responder satisfatoriamente às expectativas dos nossos clientes.",
      image: "./assets/graphics/pink_site.png"
    },
    {
      text:
        "3. A nossa linha de actuação pauta-se pela integridade, profissionalismo e responsabilidade. O nosso objetivo último é o cumprimento dos compromissos assumidos e desta forma, responder satisfatoriamente às expectativas dos nossos clientes.",
      image: "./assets/graphics/web_boilerplate.png"
    },
    {
      text:
        "4. A nossa linha de actuação pauta-se pela integridade, profissionalismo e responsabilidade. O nosso objetivo último é o cumprimento dos compromissos assumidos e desta forma, responder satisfatoriamente às expectativas dos nossos clientes.",
      image: "./assets/graphics/pink_site.png"
    },
    
  ];
</script>

<style lang="scss">
  @import "../style/theme.scss";

  main {
    padding: 6rem 5rem;
    max-width: $landscape;
    margin: auto;
  }

  h5 {
    text-align: center;
    margin-bottom: 6rem;
  }
</style>

<main>
  <h5 id="service">Conheça os nossos serviços</h5>
  <InfoCard title="Consultoria" images={graphicsImages}></InfoCard>
  <InfoCard type="graphics" title="Media e T.I" reverse={true}></InfoCard>
  <InfoCard type="economic" title="Consultoria"></InfoCard>
  <h5 id="contact">Contacto</h5>
  <Contact />
  <h5 id="about">Sobre Nós</h5>
  <About />
</main>
