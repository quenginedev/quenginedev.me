<script>
  import useViewport from "../hooks/use-viewport";
  import {tweened} from 'svelte/motion'
  import {cubicInOut} from 'svelte/easing'

  const opacity = tweened(0, {duration: 700, easing: cubicInOut})
  const handleOpacity = (value) => () => {
    opacity.set(value)
  }
</script>

<div
    use:useViewport
    on:enter={handleOpacity(1)}
    on:leave={handleOpacity(0)}
    style:opacity="{$opacity}"
>
  <slot/>
</div>