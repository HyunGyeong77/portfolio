import {text} from '../texts/heroTxt.js';

export function hero() {
    const wrap = document.querySelector(".hero_wrap");

    text.map((item, index) => {
        const p = document.createElement("p");
        p.innerText = item;
        p.className = `hero_txt${index + 1}`;

        text_anim(p, wrap, index);
        wrap.appendChild(p);
    });

    wrap_anim(wrap);
}

function wrap_anim(wrap) {
    gsap.fromTo(wrap,
        {backgroundColor: "#000000" },
        {
            backgroundColor: "#ffffff",
            ease: "none",
            scrollTrigger: {
                trigger: wrap,
                start: "top",
                end: "bottom center",
                scrub: 0.7
            },
            onUpdate: function() {
                const currentColor = gsap.getProperty(wrap, "backgroundColor");
                document.querySelector(".about_wrap").style.backgroundColor = currentColor;
            }
        }
    )
}

function text_anim(p, wrap, index) {
    gsap.fromTo(p, 
        { color: "#ffffff" },
        {
            scrollTrigger: {
                trigger: wrap,
                start: "top",
                end: "bottom center",
                scrub: 0.7
            },
            x: index === 0 ? "100%" : "-100%",
            duration: 1,
            color: "#000000"
        }
    )
}