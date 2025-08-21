import {text} from '../texts/introTxt.js';

export default function introComponents() {
    const wrap = document.querySelector(".intro_wrap");
 
    text.forEach((text, index) => {
        const p = document.createElement("p");
        p.innerText = text;
        p.className = `intro_txt${index + 1}`;

        wrap.appendChild(p);
    });
}