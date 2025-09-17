import {lenis} from '../interactions/scroll-interaction.js';

export default function introAnimations() {
    window.addEventListener("DOMContentLoaded", () => {
        const wrap = document.querySelector(".intro-wrap");
        const div = wrap.children[0];
        const tl = gsap.timeline();

        tl.add(() => {
            lenis.stop();
            document.querySelector("body").style.overflowY = "hidden";
        }, 0);
        
        tl.fromTo(
            div,
            {y: 0},
            {
                y: -30, 
                duration:1,
                delay:0.5,
            }
        );

        tl.fromTo(wrap, {
            y:"0",
        }, {
            y:"-100%",
            onComplete: () => {
                lenis.start();
                document.querySelector("body").style.overflowY = "auto";
            }
        })
    });
}