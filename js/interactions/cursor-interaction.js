import {lenis} from "./scroll-interaction.js";

export default function cursorInteractions() {
    mobileCheck();
}

let isMaxScroll;
let isTagMouseOver;

function mobileCheck() {
    const resizeHandler = () => {
        const wrap = document.querySelector(".cursor-wrap");
        const isMobile = /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

        if(!isMobile) {
            mouseMoveHandler(wrap);
            mouseHover(wrap);
            contentChange(wrap);
        } else {
            wrap.style.setProperty("--opacity", "0");
        }
    }

    resizeHandler();
    window.addEventListener("resize", resizeHandler);
}

function mouseMoveHandler(wrap) {
    let half = 0;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    const ease = 0.1;

    const targetPos_init = (e) => {
        targetX = e.clientX - half;
        targetY = e.clientY - half;
    }

    const tick = () => {
        currentX += (targetX - currentX) * ease;
        currentY += (targetY - currentY) * ease;

        wrap.style.setProperty("--translateX", `${currentX}px`);
        wrap.style.setProperty("--translateY", `${currentY}px`);
        requestAnimationFrame(tick);
    }

    window.addEventListener("mousemove", (e) => {
        if(e.pointerType && (e.pointerType !== "mouse")) return;

        targetPos_init(e);
    });

    window.addEventListener("mouseover", (e) => {
        if(e.pointerType && (e.pointerType !== "mouse")) return;

        wrap.style.setProperty("--opacity", "1");
    });

    const updateHalf = () => {
        half = wrap.getBoundingClientRect().width / 2;
    }

    const resizeObserver = new ResizeObserver(updateHalf);
    resizeObserver.observe(wrap);

    tick();
}

function mouseHover(wrap) {
    window.addEventListener("DOMContentLoaded", () => {
        const aTags = document.querySelectorAll("a");
        const buttonTags = document.querySelectorAll("button");
        const inputTags = document.querySelectorAll("input");
        const textAreas = document.querySelectorAll("textarea");

        const mouseHandler = (boolean, value) => () => {
            isTagMouseOver = boolean;
            wrap.style.setProperty("--content", boolean ? `'${value}'` : `'${isMaxScroll}'`);
        }
        
        const eventListener = (tags, value) => {
            tags.forEach((item) => {
                item.addEventListener("mouseover", mouseHandler(true, value));
                item.addEventListener("mouseleave", mouseHandler(false));
            });
        }

        const inputEventListener = (tags) => {
            tags.forEach((item) => {
                item.addEventListener("mouseover", mouseHandler(true, item.type !== "submit" ? "write" : "send"));
                item.addEventListener("mouseleave", mouseHandler(false));
            })
        }
        
        eventListener(aTags, "click");
        eventListener(buttonTags, "click");
        eventListener(textAreas, "write");
        inputEventListener(inputTags);
    });
}

function contentChange(wrap) {
    lenis.on("scroll", ({scroll, limit}) => {
        isMaxScroll = scroll >= (limit - 50) ? "end" : "scroll";

        if(!isTagMouseOver) {
            wrap.style.setProperty("--content", `'${isMaxScroll}'`);
        }
    })
}