import {text} from '../texts/skillsTxt.js';
import {fieldset_anim} from '../animations/skill-animation.js';

export default function skillComponents() {
    const layout = document.querySelector(".skills-layout");

    Object.keys(text).map((item) => {
        const legend = document.createElement("legend");
        legend.innerText = item;

        const p = document.createElement("p");
        p.innerText = text[item];

        const fieldset = document.createElement("fieldset");
        fieldset.append(legend, p);

        layout.appendChild(fieldset);

        fieldset_anim(fieldset);
    });
}