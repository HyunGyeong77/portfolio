import {text} from '/js/texts/skillsTxt.js';
import {fieldset_anim} from '/js/animations/skillAnimation.js';

export default function skillComponents() {
    const layout = document.querySelector(".skills_layout");

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