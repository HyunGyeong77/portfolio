import {text} from '../texts/introTxt';

export function intro() {
    const wrap = document.querySelector(".intro_wrap");
 
    text.forEach((text, index) => {
        const p = document.createElement("p");
        p.innerText = text;
        p.className = `intro_txt${index + 1}`;

        wrap.appendChild(p);
    });

    intro_anim(wrap);
}

function intro_anim(wrap) {
    const tl = gsap.timeline();
    
    tl.fromTo(
        wrap.querySelector(".intro_txt1"),
        {x: -200, opacity: 0},
        {
            x: 0, 
            opacity: 1,
            duration: 1, 
            repeat: 1, 
            yoyo: true,
            onStart: () => document.querySelector("body").style.overflowY = "hidden"
        }
    );

    tl.fromTo(
        wrap.querySelector(".intro_txt2"),
        {x: 200, opacity: 0},
        {x: 0, opacity: 1, duration: 1, repeat: 1, yoyo: true}
    );

    tl.to(
        wrap,
        {
            height: 0, 
            duration: 0.5,
            onComplete: () => document.querySelector("body").style.overflowY = "unset"
        },
    )
}