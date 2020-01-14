<script>
  import CourseDetails from '../containers/CourseDetails.svelte';
  import LogoOriginal from "../components/LogoOriginal.svelte";
  import PhotoshopLogo from "../components/PhotoshopLogo.svelte";
  import IllustratorLogo from "../components/IllustratorLogo.svelte";
  import AfterEffectsLogo from "../components/AfterEffectsLogo.svelte";
  import ExcelLogo from "../components/ExcelLogo.svelte";
  import Button from "../components/Button.svelte";
  import Modal from "../components/Modal.svelte";

  export let courseType = "photoshop";

  let currLogo;
  export let theme;
  let showMoreInfo = false;

  const basicModule = {
    title: "Módulos Básicos",
    modules: [
      "Conhecendo o Photoshop",
      "Camadas",
      "Textos",
      "Seleção e Recortes",
      "Estilos de Camadas",
      "Bonus"
    ]
  };

  const advanceModule = {
    title: "Módulos Avançados",
    modules: [
      "Montagens e Composição",
      "Retoque de Imagens",
      "Mascaras e Filtros",
      "Ajustes e Ações",
      "Pixels e Vectores",
      "Bonus"
    ]
  };

  {
    switch (courseType) {
      case "photoshop":
        currLogo = PhotoshopLogo;
        theme = "ps-theme";
        break;
      case "illustrator":
        currLogo = IllustratorLogo;
        theme = "ai-theme";
        break;
      case "after effects":
        currLogo = AfterEffectsLogo;
        theme = "ae-theme";
        break;
      case "excel":
        theme = "ex-theme";
        currLogo = ExcelLogo;
        break;
      default:
        currLogo = PhotoshopLogo;
        theme = "ps-theme";
        break;
    }
  }
</script>

<style lang="scss">
  @import "../style/theme.scss";
  article {
    position: relative;
    perspective: 150rem;
    -moz-perspective: 150rem;
    flex-basis: calc(#{$desktop} / 4);
    flex-shrink: 0;
    margin-right: 2rem;
    margin-bottom: 2rem;
    height: 51rem;

    //Rotation code
    &:hover,
    &:focus {
      .front {
        transform: rotateY(-180deg);
      }
      .back {
        transform: rotateY(0);

        :global(button) {
          transform: translateY(4rem);
        }
      }
    }

    @media only screen and (max-width: $mobile) {
      margin-right: initial;
    }
  }

  div {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem 0;
    justify-content: center;
    text-align: center;
    transition: all 0.8s cubic-bezier(0.22, 0.61, 0.36, 1);
    backface-visibility: hidden;
    height: inherit;
    width: 100%;
  }

  .front {
    background: url("/assets/bg_course_card.png") #ececec;
    background-blend-mode: luminosity;

    :global(svg) {
      &:first-child {
        margin-bottom: 1.5rem;
      }
      &:last-of-type {
        align-self: flex-end;
        width: 80%;
      }
    }

    h6,
    p {
      padding: 0 2rem;
      margin-bottom: 1.5rem;
    }

    h6 {
      text-transform: uppercase;
    }

    p {
      font-size: 1.5rem;
    }
  }

  .back {
    position: relative;
    transform: rotateY(180deg);
    background-color: orange;
    color: $white-color;
    font-size: 1.5rem;

    :global(button) {
      transition: all 0.8s cubic-bezier(0.22, 0.61, 0.36, 1);
    }

    p {
      padding: 0.5rem 1rem;
      margin: 1rem 0;
      background-color: $ps-light-color;
      padding: 0.5rem 1rem;
      width: 90%;
      align-self: center;
    }

    ul {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      list-style: initial;
    }
  }

  .ps-bg {
    background-color: $ps-dark-color;

    p {
      background-color: $ps-light-color;
    }
  }

  .ai-bg {
    background-color: $ai-dark-color;

    p {
      background-color: $ai-light-color;
    }
  }
  .ae-bg {
    background-color: $ae-dark-color;

    p {
      background-color: $ae-light-color;
    }
  }
  .ex-bg {
    background-color: $ex-dark-color;

    p {
      background-color: $ex-light-color;
    }
  }
</style>

<article>
  <div class="front">
    <LogoOriginal />
    <svelte:component this={currLogo} />
    <h6>{courseType} do Básico ao Avançado</h6>
    <p>
      Curso técnico essencial, de curta e média duração em área prática para
      quem pretende exercer funções de Design, e saber executar de forma
      eficiente todo seu trabalho.
    </p>
  </div>
  <div
    class="back"
    class:ps-bg={courseType === 'photoshop'}
    class:ai-bg={courseType === 'illustrator'}
    class:ae-bg={courseType === 'after effects'}
    class:ex-bg={courseType === 'excel'}>
    <p>{basicModule.title}</p>
    <ul>
      {#each basicModule.modules as module}
        <li>{module}</li>
      {/each}
    </ul>
    <p>{advanceModule.title}</p>
    <ul>
      {#each advanceModule.modules as module}
        <li>{module}</li>
      {/each}
    </ul>
    <p>Inclui E-book e Certificado</p>
    <Button {theme} on:click={() => (showMoreInfo = !showMoreInfo)}>
      Saiba Mais
    </Button>
  </div>
</article>

{#if showMoreInfo}
  <Modal {theme} on:close={() => (showMoreInfo = !showMoreInfo)}>
    <CourseDetails {theme} />
  </Modal>
{/if}

