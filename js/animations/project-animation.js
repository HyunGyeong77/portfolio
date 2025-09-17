import {text} from '../texts/project-txt.js';

export default function projectAnimations() {
    project_scrollChange();
}

export let tl;

export const gsapInit = () => {
    const wrap = document.querySelector(".projects-wrap");
    tl = gsap.timeline({
        scrollTrigger: {
            trigger: wrap,
            start: () => `top+=100 top`,
            end: () => `${wrap.clientHeight - window.innerHeight}px top`,
            scrub: true
        }
    });

    const project_select = (index) => {
        tl.fromTo(document.querySelector(`.projects-project${index}`),
        {bottom: "0", filter: "brightness(1)"}, {bottom: "100%", filter: "brightness(0.7)"});
    }

    Object.keys(text).map((_, index) => {
        if(index !== (Object.keys(text).length - 1)) {
            project_select(index);
        }
    })
}

function project_scrollChange() {
    window.addEventListener("DOMContentLoaded", () => {
        gsapInit();
    });
}