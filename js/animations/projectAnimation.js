import {text} from '../texts/projectTxt.js';

export default function projectAnimations() {
    project_scrollChange();
}

function project_scrollChange() {
    window.addEventListener("DOMContentLoaded", () => {
        const wrap = document.querySelector(".projects_wrap");
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: wrap,
                start: () => `top+=100 top`,
                end: () => `${wrap.clientHeight - window.innerHeight}px top`,
                scrub: true
            }
        });

        const project_select = (index) => {
            tl.fromTo(document.querySelector(`.projects_project${index}`),
            {bottom: "0", filter: "brightness(1)"}, {bottom: "100%", filter: "brightness(0.7)"});
        }

        Object.keys(text).map((_, index) => {
            if(index !== (Object.keys(text).length - 1)) {
                project_select(index);
            }
        })
    });
}