<script>
  import {spring} from "svelte/motion";

  let mouseOver = false
  const imgSpringVal = spring(1, {damping: .04, stiffness: .1});
  
  const onMouseOver = (isOver) => () =>  {
    imgSpringVal.set(isOver ? 1.1 : 1)
    mouseOver = isOver
  }
</script>

<div on:mousemove={onMouseOver(true)} on:mouseleave={onMouseOver(false)} style:transform="scale({$imgSpringVal})">
  <slot {mouseOver}/>
</div>