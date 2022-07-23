
const intersectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const eventName = entry.isIntersecting ? 'enter' : 'leave';
    entry.target.dispatchEvent(new CustomEvent(eventName)); 
  });
})

const useViewport = (node: Element) => {
  intersectionObserver.observe(node);

  return {
    update: () => { },
    destroy: () => {
      intersectionObserver.unobserve(node);
    }
  }
}


export default useViewport;