export default function headerInteractions() {
    const wrap = document.querySelector(".header_wrap");

    mobile_menuOpen(wrap);
    mobile_menuClose(wrap);
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