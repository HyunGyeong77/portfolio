export let animationFrameId;

export default function scrollInteractions() {
  scroll();
}

function scroll() {
  const lenis = new Lenis({
    duration: 1.2,
    easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smooth: true,
  });
  
  function raf(time) {
    lenis.raf(time);
    animationFrameId = requestAnimationFrame(raf);
  }
  
  animationFrameId = requestAnimationFrame(raf);
}