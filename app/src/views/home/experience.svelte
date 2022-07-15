<script>
  import placesList from "./places-list";
  import {fly} from 'svelte/transition'
  import {cubicInOut} from 'svelte/easing'
  console.log('null is undefined', null === undefined, typeof null);
  let active = 0;
  $: currentPlace = placesList[active];
</script>

<section id="experience" class="flex justify-center pt-24">
  <div class="max-w-screen-lg w-full p-5 grid grid-cols-1 md:grid-cols-3 gap-5">
    <h1 class="col-span-1 md:col-span-3 text-3xl font-extrabold">
      Were I've worked
    </h1>
    <div class="w-full text-center flex flex-col gap-2 col-span-1">
      {#each placesList as {name}, index}
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
    {#key currentPlace.title}
      <div in:fly={{duration: 300, easing: cubicInOut, x: 300 }} class="w-full space-y-3 md:col-span-2">
        <h2 class="text-xl font-bold">
          {currentPlace.title}
          <a href={currentPlace.url} target="_blank">@ {currentPlace.name}</a>
        </h2>
        <p class="text-xs font-bold">{currentPlace.date}</p>
        <div class="flex flex-row flex-wrap gap-5">
          {#each currentPlace.stack as stack}
            <div class="badge badge-secondary">{stack}</div>
          {/each}
        </div>
        <ul class="space-y-3">
          {#each currentPlace.description as desc}
            <li>{desc}</li>
          {/each}
        </ul>
      </div>
    {/key}
  </div>
</section>

<style>
    a {
        @apply text-primary font-bold;
    }
</style>
