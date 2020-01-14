<script>
  import CourseCard from "../components/CourseCard.svelte";
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

  section {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
</style>

<svelte:head>
  <title>Enbusiness - Cursos</title>
  
  <meta
    name="description"
    content="Conheça os Cursos que a Enbusiness tem para si." />
</svelte:head>
<main>
  <h5 id="service">
    Conheça os nossos
    <strong>cursos</strong>
  </h5>
  <section>
    <CourseCard />
    <CourseCard courseType="illustrator" />
    <CourseCard courseType="after effects" />
    <CourseCard courseType="excel" />
  </section>
</main>
