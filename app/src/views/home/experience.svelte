<script>
  import placesList from "./places-list";
  import {fade} from 'svelte/transition'
  let active = 0;
  $: currentPlace = placesList[active];
</script>

<section id="experience" class="flex justify-center pt-24">
  <div class="max-w-screen-lg w-full p-5 grid grid-cols-1 md:grid-cols-3 gap-5">
    <h1 class="col-span-1 md:col-span-3 text-3xl font-extrabold">
      Were I've worked
    </h1>
    <div class="w-full text-center flex flex-col gap-2 col-span-1">
      {#each placesList as { name }, index}
        <button
          class="capitalize btn"
          class:btn-primary={active === index}
          class:btn-outline={active !== index}
          on:click={() => {
            active = index;
          }}
        >
          {name}</button
        >
      {/each}
    </div>
    <div transition:fade class="w-full space-y-3 md:col-span-2">
      <h2 class="text-xl font-bold">
        {currentPlace.title}
        <a href={currentPlace.url} target="_blank">@ {currentPlace.name}</a>
      </h2>
      <p class="text-xs font-bold">{currentPlace.date}</p>
      <ul class="space-y-3">
        {#each currentPlace.description as desc}
          <li>{desc}</li>
        {/each}
      </ul>
    </div>
  </div>
</section>

<style>
  a {
    @apply text-primary font-bold;
  }
</style>
