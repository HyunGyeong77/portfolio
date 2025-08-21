import {text} from '/js/texts/heroTxt.js';
import {text_anim} from '/js/animations/heroAnimation.js';

export default function heroComponents() {
    const wrap = document.querySelector(".hero_wrap");

    text.map((item, index) => {
        const p = document.createElement("p");
        p.innerText = item;
        p.className = `hero_txt${index + 1}`;

        text_anim(p, wrap, index);
        wrap.appendChild(p);
    });
}