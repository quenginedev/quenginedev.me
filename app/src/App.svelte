<script>
  import { Router, Route } from "svelte-navigator";
  import Nav from "./components/nav.svelte";
  import Home from "./views/home/index.svelte";
  import AnimatedWaves from "./components/animated-waves.svelte";
  import ThemeSelector from "./components/theme-selector.svelte";
  import useTheme from "./hooks/use-theme";
  import { onMount } from "svelte";

  const { theme } = useTheme();
  let isLoading = true;
  onMount(() => {
    setTimeout(() => {
      isLoading = false;
    }, 3000);
  });
</script>

<svelte:head>
  <title>Q.Dev</title>
</svelte:head>
<div
  data-theme={$theme}
  class="w-screen h-screen overflow-auto scroll-smooth"
  id="view"
>
  <AnimatedWaves {isLoading} />
  {#if !isLoading}
    <Router>
      <Nav />
      <Route path="/" component={Home} />
    </Router>
    <span class="fixed bottom-5 right-5 md:right-10">
      <ThemeSelector />
    </span>
  {/if}
</div>

<style>
  #view::-webkit-scrollbar {
    @apply w-2 h-2;
  }

  #view::-webkit-scrollbar-track {
    @apply bg-base-100 h-screen;
  }

  #view::-webkit-scrollbar-thumb {
    @apply rounded-md bg-primary bg-opacity-60;
  }

  #view::-webkit-scrollbar-thumb:hover {
    @apply bg-opacity-100;
  }
</style>
