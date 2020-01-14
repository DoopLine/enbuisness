<script>
  import Router from "svelte-spa-router";

  import Header from "./containers/Header.svelte";
  import Home from "./pages/Home.svelte";
  import Course from "./pages/Course.svelte";
  import Footer from "./containers/Footer/Footer.svelte";

  console.log("Made by WorkActtack!!!");

  const routes = {
    "/": Home,
    "/cursos": Course,
    "/cursos/*": Course
  };
</script>

<style lang="scss" global>
  @import "./style/global.scss";
</style>

<Header />
<Router {routes} />
<Footer />
