export default function heroAnimations() {
    const wrap = document.querySelector(".hero_wrap");

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

export function text_anim(p, wrap, index) {
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