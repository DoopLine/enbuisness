<script>
  import InfoCard from "../components/InfoCard.svelte";
  import Contact from "../containers/Contact.svelte";
  import About from "../containers/About.svelte";
  import PartnerSection from "../containers/PartnerSection.svelte";

  import {
    graphicsServiceData,
    consultingServiceData,
    geralServiceData
  } from "../data/servicesData.js";
</script>

<style lang="scss">
  @import "../style/theme.scss";

  main {
    padding: 6rem 5rem;
    max-width: $landscape;
    margin: auto;

    @media only screen and (max-width: $mobile) {
      padding: 6rem 2rem;
    }
  }

  h5 {
    text-align: center;
    margin-bottom: 6rem;
  }
</style>

<svelte:head>
		<title>Enbusiness - Seja Bem-vindo</title>
    <meta name="description" content="A ENBUSINESS é uma empresa angolana de comércio e prestação de serviço,
    cujos quadros têm vindo a colaborar com entidades públicas e privadas,
    actuando em diversos sectores de actividade.">
</svelte:head>

<main>
  <h5 id="service">Conheça os nossos serviços</h5>
  <InfoCard title="Comércio" images={geralServiceData}>
    Na área de comércio vendemos
    <strong>equipamentos de protecção individual</strong>
    (equipamentos destinados à Segurança e Prevenção de acidentes no trabalho).
  </InfoCard>
  <InfoCard
    type="graphics"
    title="Mídia Digital"
    reverse={true}
    images={graphicsServiceData}>
    Tornamo-nos aliados dos nossos clientes para identificar a essência de sua
    marca, e juntos, construirmos estratégias que potencializam os seus produtos
    e serviços atravéz do
    <strong>Design, Mobile e Web Apps</strong>
  </InfoCard>
  <InfoCard type="economic" title="Consultoria" images={consultingServiceData}>
    Possuimos profissionais capacitados para diagnosticar e formular soluções
    para os diferentes problemas no meio empresarial, trabalhamos nas áreas de
    <strong>Gestão, Contabilidade e Físcalidade.</strong>
  </InfoCard>
  <h5 id="contact">Contactos</h5>
  <Contact />
  <PartnerSection />
  <h5 id="about">Sobre Nós</h5>
  <About />
</main>
