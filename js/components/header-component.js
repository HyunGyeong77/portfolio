import {text} from '../texts/header-txt.js';

export default function headerComponents() {
    timeUpdate();
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

    const desktop = document.querySelector(".header-desktop");
    const mobile = document.querySelector(".header-mobile");
    desktop.appendChild(formatted_ul_desktop);
    mobile.appendChild(formatted_ul_mobile);

    setInterval(() => {
        formatted();
    }, 1000);

    formatted();
}