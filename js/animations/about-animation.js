export default function aboutAnimations() {
    const wrap = document.querySelector(".about-wrap");
    const wrap_nextChild = wrap.children[0];

    gsap.fromTo(wrap_nextChild, 
        {y: -300, opacity:0}, {
        y:0,
        opacity:1,
        scrollTrigger: {
            trigger: wrap,
            start: "top center",
            end: "bottom bottom",
            scrub: true
        }
    });
}
