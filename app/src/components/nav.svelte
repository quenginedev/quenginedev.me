<script lang="ts">
  import onClickOutside from "../actions/on-click-outside";
  import responsive from 'tailwindcss/lib/util/responsive'
  console.log({ responsive })
	let isMobileHidden = true;
	const handleClickOutside = () => {
    if(!isMobileHidden) isMobileHidden = true;
  };
</script>

<div class="w-full flex flex-row justify-center px-5 fixed top-0 z-50 bg-primary">
  <div
      class="max-w-screen-lg w-full flex justify-between items-center bg-primary py-5 md:py-0"
  >
    <a href="/#summary" class="btn btn-primary text-3xl rounded">
      Q
      <span class="hidden md:block lowercase">uenginedev</span>
      <span class="md:hidden lowercase">.dev</span>

    </a>

    <div class="relative">
      <button class="btn btn-ghost md:hidden" on:click={()=>isMobileHidden = !isMobileHidden}>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            class="iconify iconify--heroicons-solid"
            width="32"
            height="32"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 20 20"
        >
          <path
              fill="currentColor"
              fill-rule="evenodd"
              d="M3 5a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1Zm0 5a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1Zm6 5a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2h-6a1 1 0 0 1-1-1Z"
              clip-rule="evenodd"
          />
        </svg
        >
      </button>
      <ul
          use:onClickOutside
          on:trigger={handleClickOutside}
          on:click={()=>isMobileHidden = true}
          class="fixed top-20 right-10 rounded-md font-bold py-2 mt-3 mb-3 px-10 flex flex-col md:flex-row md:static bg-base-100 md:block shadow-2xl"
          class:hidden={isMobileHidden}
      >
        <li class="btn btn-link"><a href="#about">About</a></li>
        <li class="btn btn-link">
          <a href="#experience">Experience</a>
        </li>
        <li class="btn btn-link"><a href="#work">Work</a></li>
        <li class="btn btn-link"><a href="#contact">Contact</a></li>
        <li class="btn btn-secondary btn-disabled"><a href="#resume">Resume</a></li>
      </ul>
    </div>
  </div>
</div>
