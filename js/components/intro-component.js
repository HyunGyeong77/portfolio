import {text} from '../texts/intro-txt.js';

export default function introComponents() {
    const wrap = document.querySelector(".intro-wrap");

    text.forEach((text, index) => {
        const p = document.createElement("p");

        p.innerText = text;
        p.className = `intro_txt${index + 1}`;

        const div = document.createElement("div");
        div.appendChild(p);

        wrap.appendChild(div);
    });
}