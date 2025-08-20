import {text} from '/texts/skillsTxt.js';

export function skills() {
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

function fieldset_anim(fieldset) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if(entry.isIntersecting) {
                gsap.fromTo(fieldset, {
                    y:-100, 
                    opacity:0, 
                    visibility:"hidden"
                }, {
                    y:0,
                    opacity:1,
                    visibility:"visible",
                    duration: 1
                });
            }
        });
    });

    observer.observe(fieldset);
} 