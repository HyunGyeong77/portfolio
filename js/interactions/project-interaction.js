import {tl, gsapInit} from '../animations/project-animation.js';
import {text} from '../texts/project-txt.js';
import {lenis} from './scroll-interaction.js';
import {leaveTrigger} from '../animations/header-animation.js';

export let isList = false;

export default function projectInteractions() {
    const btn = document.querySelector(".projects-change-btn");
    let coolTime = false;

    const handleBtnClick = (e) => {
        e.preventDefault();

        if(coolTime) return;
        coolTime = true;
        isList = !isList;

        const svg = btn.children[0];
        svg.style.setProperty("--rotate", isList ? "-180deg" : "0");

        const projectWrap = document.querySelector(".project-wrap");
        const projects = document.getElementById("Projects");

        projectWrap.style.setProperty("--z-index", "9999");
        projectWrap.style.setProperty("--opacity", "1");

        const body = document.querySelector("body");
        body.style.overflowY = "hidden";
        lenis.stop();

        setTimeout(() => {
            projects.scrollIntoView({block:"start"});
  
            setTimeout(() => {
                body.style.overflowY = "auto";
                projectWrap.style.setProperty("--opacity", "0");
                lenis.start();

                setTimeout(() => {
                    projectWrap.style.setProperty("--z-index", "-9999");
                }, 300);
            }, 800);
        }, 300);

        if(isList) {
            setTimeout(() => {
                tl.kill();
                projects.classList.add("list");
                projects.style.height = "max-content";
                leaveTrigger.refresh();

                const uls = document.querySelectorAll(".projects-sticky > ul");
                uls.forEach(item => {
                    item.style.opacity = "1";
                    item.style.filter = "brightness(1)";
                });
            }, 300);
        } else {
            setTimeout(() => {
                gsapInit();
                projects.classList.remove("list");
                projects.style.height = `${(120 * (Object.keys(text).length))}vh`;
                leaveTrigger.refresh();
            }, 300);
        }

        setTimeout(() => {
            coolTime = false;
        }, 1500);
    }
    
    btn.addEventListener("click", handleBtnClick);
}