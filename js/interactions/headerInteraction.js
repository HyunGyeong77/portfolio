import scrollInteractions, {animationFrameId} from './scrollInteraction.js';

export default function headerInteractions() {
    const wrap = document.querySelector(".header_wrap");

    mobile_menuOpen(wrap);
    mobile_menuClose(wrap);
    menu_linkClick(wrap);
}

function mobile_menuOpen(wrap) {
    const mobile_menuOpenBtn = document.querySelector(".header_mobile_menuOpenBtn");
    mobile_menuOpenBtn.addEventListener("click", () => {
        wrap.classList.add("open");
        wrap.classList.remove("close");
    });
}

function mobile_menuClose(wrap) {
    const mobile_menuCloseBtn = document.querySelector(".header_mobile_menuCloseBtn");
    mobile_menuCloseBtn.addEventListener("click", () => {
        wrap.classList.remove("open");
        wrap.classList.add("close");
    });
}

function menu_linkClick(wrap) {
    wrap.querySelectorAll("a").forEach((item) => {
        item.addEventListener("click", (e) => {
            e.preventDefault();

            cancelAnimationFrame(animationFrameId);

            const target_href = item.getAttribute("href");
            window.location.href = target_href;

            setTimeout(() => {
                scrollInteractions();
            }, 1000);
        });
    });
}