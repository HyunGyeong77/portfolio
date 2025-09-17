import {text} from '../texts/hero-txt.js';
import {text_anim} from '../animations/hero-animation.js';

export default function heroComponents() {
    const wrap = document.querySelector(".hero-wrap");

    text.map((item, index) => {
        const p = document.createElement("p");
        p.innerText = item;
        p.className = `hero_txt${index + 1}`;

        text_anim(p, wrap, index);
        wrap.appendChild(p);
    });
}