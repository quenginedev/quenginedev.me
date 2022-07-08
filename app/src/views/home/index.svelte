<script>
  import Summary from "./summary.svelte";
  import About from "./about.svelte";
  import Experience from "./experience.svelte";
  import Work from "./working_on.svelte";
  import FadeInView from "../../components/fade-in-view.svelte";
  import Contact from "./contact.svelte";

  const components = [
    Summary,
    About,
    Experience,
    Work, 
    Contact
  ];
</script>

{#each components as component, index}
  <FadeInView>
    <svelte:component this={component} />
  </FadeInView>
{/each}
