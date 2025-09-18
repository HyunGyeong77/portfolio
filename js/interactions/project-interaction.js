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

        // 버튼 클릭할 때마다 회전 효과
        const svg = btn.children[0];
        svg.style.setProperty("--rotate", isList ? "-180deg" : "0");
        
        // 레이아웃 변경 체크
        e.currentTarget.setAttribute("aria-checked", isList);

        const projectWrap = document.querySelector(".project-wrap");
        const projects = document.getElementById("Projects");

        // 버튼 클릭할 때마다 스냅샷 효과 적용
        const snapshot = () => {
            projectWrap.style.setProperty("--z-index", "9999");
            projectWrap.style.setProperty("--opacity", "1");

            const body = document.querySelector("body");
            body.style.overflowY = "hidden";
            // 스크롤 이벤트 종료
            lenis.stop();

            setTimeout(() => {
                // Project의 상단 위치로 스크롤
                projects.scrollIntoView({block:"start"});
    
                setTimeout(() => {
                    body.style.overflowY = "auto";
                    projectWrap.style.setProperty("--opacity", "0");

                    setTimeout(() => {
                        projectWrap.style.setProperty("--z-index", "-9999");
                        // 스크롤 이벤트 재시작
                        lenis.start();
                    }, 300);
                }, 800);
            }, 300);
        }

        snapshot();

        if(isList) {
            setTimeout(() => {
                // project의 gsap timeline 종료
                tl.kill();
                projects.classList.add("list");
                projects.style.height = "max-content";
                // header의 scrollTrigger end 위치 값 재조정
                leaveTrigger.refresh();

                // gsap timeline으로 인해 설정되어 있던 값 초기화
                const uls = document.querySelectorAll(".projects-sticky > ul");
                uls.forEach(item => {
                    item.style.opacity = "1";
                    item.style.filter = "brightness(1)";
                });
            }, 300);
        } else {
            setTimeout(() => {
                // project의 gsap timeline 재시작
                gsapInit();
                projects.classList.remove("list");
                projects.style.height = `${(120 * (Object.keys(text).length))}vh`;
                // header의 scrollTrigger end 위치 값 재조정
                leaveTrigger.refresh();
            }, 300);
        }

        setTimeout(() => {
            coolTime = false;
        }, 1500);
    }
    
    btn.addEventListener("click", handleBtnClick);
}