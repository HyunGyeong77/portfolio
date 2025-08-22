import {lenis} from '../interactions/scrollInteraction.js';

export default function introAnimations() {
    window.addEventListener("DOMContentLoaded", () => {
        const wrap = document.querySelector(".intro_wrap");
        const tl = gsap.timeline();
        
        tl.fromTo(
            wrap.querySelector(".intro_txt1"),
            {x: -200, opacity: 0},
            {
                x: 0, 
                opacity: 1,
                duration: 1, 
                repeat: 1, 
                yoyo: true,
                onStart: () => {
                    lenis.stop();
                    document.querySelector("body").style.overflowY = "hidden";
                }
            }
        );

        tl.fromTo(
            wrap.querySelector(".intro_txt2"),
            {x: 200, opacity: 0},
            {x: 0, opacity: 1, duration: 1, repeat: 1, yoyo: true}
        );

        tl.to(
            wrap,
            {
                height: 0, 
                duration: 0.5,
                onComplete: () => {
                    lenis.start();
                    document.querySelector("body").style.overflowY = "unset";
                }
            },
        )
    });
}