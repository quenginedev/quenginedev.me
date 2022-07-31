<script lang="ts">
    import {Router, Route} from "svelte-navigator";
    import Nav from "./components/nav.svelte";
    import Home from "./views/home/index.svelte";
    import AnimatedWaves from "./components/animated-waves.svelte";
    import useTheme from "./hooks/use-theme";
    import {onMount} from "svelte";
    import {useAnalytics} from "./hooks/use-analytics";
    import ThemeSelector from "./components/theme-selector.svelte";

    const {theme} = useTheme();
    const {sendPageHit} = useAnalytics()
    let isLoading = true;

    onMount(async () => {
        await sendPageHit()
        isLoading = false;
    });
</script>

<svelte:head>
    <title>Quenginedev</title>
    <meta name="description"
          content="Coffee is my fuel and code is what I produce. I build apps and services for mobile, desktop, and the web"/>
    <meta name="keywords"
          content="quenginedev, portfolio, Engineer, Developer, mobile, web, app, exceptional digital experiences, automated, accessible, human-centered, Simple Dealer, AgroInnova, TypeScript, Vue, Svelte, React, Nodejs, Electron, AWS, Mongodb, Web3"/>
    <meta name="author" content="Ernest Hayford"/>
    <meta name="theme-color" content="#211720"/>
    <meta name="msapplication-navbutton-color" content="#ffffff"/>
    <meta name="apple-mobile-web-app-status-bar-style" content="#211720"/>
    <meta name="apple-mobile-web-app-capable" content="yes"/>
    <meta name="apple-mobile-web-app-title" content="Quenginedev"/>
</svelte:head>
<div
        data-theme={$theme}
        class="w-screen h-screen overflow-auto scroll-smooth"
        id="view"
>
    <AnimatedWaves {isLoading}/>
    {#if !isLoading}
        <Router>
            <Nav/>
            <Route path="/" component={Home}/>
        </Router>
            <span class="fixed bottom-5 right-5 md:right-10">
              <ThemeSelector />
            </span>
    {/if}
</div>

<style global>
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
