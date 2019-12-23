<script>
  import InfoCard from "../components/InfoCard.svelte";
  import Contact from "../containers/Contact.svelte";
  import About from "../containers/About.svelte";

  import { graphicsServiceData, consultingServiceData } from '../data/servicesData.js';
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
  <InfoCard title="Serviços" images={graphicsServiceData}></InfoCard>
  <InfoCard type="graphics" title="Media Digital" reverse={true} images={graphicsServiceData}></InfoCard>
  <InfoCard type="economic" title="Consultoria e Gestão" images={consultingServiceData}></InfoCard>
  <h5 id="contact">Contacto</h5>
  <Contact />
  <h5 id="about">Sobre Nós</h5>
  <About />
</main>
