<script>
  import InfoCard from "../components/InfoCard.svelte";
</script>

<style lang="scss">
  @import "../style/theme.scss";

  main {
    padding: 6rem 5rem;
    max-width: $landscape;
    margin: auto;
  }

  h1 {
    font-size: 3.5rem;
    text-align: center;
    margin-bottom: 6rem;
  }
</style>

<main>
  <h1>Conheça os nossos serviços</h1>
  <InfoCard src="/assets/finance_graph.jpg" alt="finance" title="Consultoria">
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque rerum
      dolorum aspernatur quisquam nam laboriosam pariatur esse ad, iure vitae?
      Necessitatibus pariatur quod sequi ipsum repudiandae facilis eaque,
      voluptates voluptate!
    </p>
  </InfoCard>
  <InfoCard src="/assets/finance_graph.jpg" alt="media" title="Media e T.I" reverse={true}>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque rerum
      dolorum aspernatur quisquam nam laboriosam pariatur esse ad, iure vitae?
      Necessitatibus pariatur quod sequi ipsum repudiandae facilis eaque,
      voluptates voluptate!
    </p>
  </InfoCard>
  <InfoCard
    src="/assets/finance_graph.jpg"
    alt="gestao"
    title="Gestão Empresarial">
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque rerum
      dolorum aspernatur quisquam nam laboriosam pariatur esse ad, iure vitae?
      Necessitatibus pariatur quod sequi ipsum repudiandae facilis eaque,
      voluptates voluptate!
    </p>
  </InfoCard>
</main>
