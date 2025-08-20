import {text} from '/texts/header.js';

export function header() {
    const wrap = document.querySelector(".header_wrap");

    timeUpdate();
    mobileMenu_mouseHandler(wrap);
    projects_into(wrap);
    projects_leave(wrap);
}

function timeUpdate() {
    const formattedDay_p_desktop = document.createElement("p");
    const formattedDay_p_mobile = document.createElement("p");
    const formattedTime_p_desktop = document.createElement("p");
    const formattedTime_p_mobile = document.createElement("p");

    const formatted = () => {
        const date = new Date();

        const year = date.getFullYear();
        const month = text.monthNames[date.getMonth()];
        const day = date.getDate();
        const dayOfWeek = text.dayNames[date.getDay()];

        let hours = date.getHours();
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();

        const period = hours >= 12 ? "오후" : "오전";
        hours %= 12;
        hours = hours ? hours : 12;

        const padZero = (num) => num.toString().padStart(2, "0");
        const formattedDay = `${year}년 ${month} ${day}일 ${dayOfWeek}`;
        const formattedTime = `${period} ${hours}시 ${padZero(minutes)}분 ${padZero(seconds)}초`;
    
        formattedDay_p_desktop.innerText = formattedDay;
        formattedDay_p_mobile.innerText = formattedDay;
        formattedTime_p_desktop.innerText = formattedTime;
        formattedTime_p_mobile.innerText = formattedTime;
    }

    const formattedDay_li_desktop = document.createElement("li");
    const formattedDay_li_mobile = document.createElement("li");
    const formattedTime_li_desktop = document.createElement("li");
    const formattedTime_li_mobile = document.createElement("li");
    formattedDay_li_desktop.appendChild(formattedDay_p_desktop);
    formattedDay_li_mobile.appendChild(formattedDay_p_mobile);
    formattedTime_li_desktop.appendChild(formattedTime_p_desktop);
    formattedTime_li_mobile.appendChild(formattedTime_p_mobile);

    const formatted_ul_desktop = document.createElement("ul");
    const formatted_ul_mobile = document.createElement("ul");
    formatted_ul_desktop.append(formattedDay_li_desktop, formattedTime_li_desktop);
    formatted_ul_mobile.append(formattedDay_li_mobile, formattedTime_li_mobile);

    const desktop = document.querySelector(".header_desktop");
    const mobile = document.querySelector(".header_mobile");
    desktop.appendChild(formatted_ul_desktop);
    mobile.appendChild(formatted_ul_mobile);

    setInterval(() => {
        formatted();
    }, 1000);

    formatted();
}

function projects_into(wrap) {
    gsap.fromTo(wrap, {
        y: "0",
        opacity: "1",
        visibility: "visible",
    }, {
        y: "-100%",
        opacity: "0",
        visibility: "hidden",
        scrollTrigger: {
            trigger: document.querySelector(".projects_wrap"),
            start: "top-=70px top",
            end: "top top",
            scrub: true,
            onEnter: () => {
                wrap.classList.remove("open");
                wrap.classList.add("close");
            }
        }
    });
}

function projects_leave(wrap) {
    ScrollTrigger.create({
        trigger: document.querySelector(".projects_wrap"),
        start: "bottom top",
        end: "bottom top",
        onEnter: () => {
            gsap.fromTo(wrap, {
                y: "-100%",
                opacity: "0",
                visibility: "hidden"
            }, {
                y: "0",
                opacity: "1",
                visibility: "visible",
                duration: "0"
            })
        },
        onEnterBack: () => {
            gsap.fromTo(wrap, {
                y: "0",
                opacity: "1",
                visibility: "visible"
            }, {
                y: "-100%",
                opacity: "0",
                visibility: "hidden",
                duration: "0"
            });

            wrap.classList.remove("open");
            wrap.classList.add("close");
        }
    });
}

function mobileMenu_mouseHandler(wrap) {
    const mobile_openBtn = () => {
        const mobile_menuOpenBtn = document.querySelector(".header_mobile_menuOpenBtn");
    
        mobile_menuOpenBtn.addEventListener("click", () => {
            wrap.classList.add("open");
            wrap.classList.remove("close");
        });
    }
    
    const mobile_closeBtn = () => {
        const mobile_menuCloseBtn = document.querySelector(".header_mobile_menuCloseBtn");
    
        mobile_menuCloseBtn.addEventListener("click", () => {
            wrap.classList.remove("open");
            wrap.classList.add("close");
        });
    }

    mobile_openBtn();
    mobile_closeBtn();
}