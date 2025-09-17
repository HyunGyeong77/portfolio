import {lenis} from './scroll-interaction.js';

export default function headerInteractions() {
    const wrap = document.querySelector(".header-wrap");

    mobile_menuOpen(wrap);
    mobile_menuClose(wrap);
    menu_linkClick(wrap);
}

function mobile_menuOpen(wrap) {
    const mobile_menuOpenBtn = document.querySelector(".header-mobile-menuOpenBtn");
    mobile_menuOpenBtn.addEventListener("click", () => {
        wrap.classList.add("open");
        wrap.classList.remove("close");
    });
}

function mobile_menuClose(wrap) {
    const mobileMenuCloseBtn = document.querySelector(".header-mobile-menuCloseBtn");
    mobileMenuCloseBtn.addEventListener("click", () => {
        wrap.classList.remove("open");
        wrap.classList.add("close");
    });
}

function menu_linkClick(wrap) {
    wrap.querySelectorAll("a").forEach((item) => {
        item.addEventListener("click", (e) => {
            e.preventDefault();

            const target_href = item.getAttribute("href");
            lenis.scrollTo(target_href);
        });
    });
}