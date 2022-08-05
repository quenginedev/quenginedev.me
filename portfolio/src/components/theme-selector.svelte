<script lang="ts">
  import useTheme from "../hooks/use-theme"
  import { slide } from 'svelte/transition'
  import onClickOutside from "../actions/on-click-outside"
  import ThemeIcon from 'svelte-material-icons/ThemeLightDark.svelte'

  let isSelectorOpened = false;

  const { setTheme, theme: currentTheme, themes } = useTheme();
  const handleSetTheme = (selectedTheme: string) => {
    setTheme(selectedTheme);
    isSelectorOpened = false;
  };
</script>

<div class="text-right">
  {#if isSelectorOpened}
    <ul
        use:onClickOutside
        transition:slide
        on:trigger={()=>{isSelectorOpened = false}}
        class="menu menu-compact lg:menu-normal bg-base-100 w-56 p-2 rounded-box shadow-2xl mb-5"
    >
      {#each themes as theme}
        <li
            class="font-bold"
            on:click={() => handleSetTheme(theme)}
            class:bg-primary={theme === $currentTheme}
            class:text-white={theme === $currentTheme}
        >
          <a>{theme}</a>
        </li>
      {/each}
    </ul>
  {/if}
  <button
      on:click={() => {
      isSelectorOpened = !isSelectorOpened;
    }}
      class="btn btn-circle btn-secondary"
  >
    <ThemeIcon size={24}/>
  </button>
</div>
