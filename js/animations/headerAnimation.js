export default function headerAnimations() {
    const wrap = document.querySelector(".header_wrap");
    const projects_wrap = document.querySelector(".projects_wrap");

    projects_into(wrap, projects_wrap);
    projects_leave(wrap, projects_wrap);
}

function projects_into(wrap, projects_wrap) {
    gsap.fromTo(wrap, {
        y: "0",
        opacity: "1",
        visibility: "visible",
    }, {
        y: "-100%",
        opacity: "0",
        visibility: "hidden",
        scrollTrigger: {
            trigger: projects_wrap,
            start: "top-=70px top",
            end: "top top",
            scrub: true,
            onEnter: () => {
                wrap.classList.remove("open");
                wrap.classList.add("close");
            }
        }
    });
}

function projects_leave(wrap, projects_wrap) {
    ScrollTrigger.create({
        trigger: projects_wrap,
        start: "bottom top",
        end: "bottom top",
        onEnter: () => {
            gsap.fromTo(wrap, {
                y: "-100%",
                opacity: "0",
                visibility: "hidden"
            }, {
                y: "0",
                opacity: "1",
                visibility: "visible",
                duration: "0"
            })
        },
        onEnterBack: () => {
            gsap.fromTo(wrap, {
                y: "0",
                opacity: "1",
                visibility: "visible"
            }, {
                y: "-100%",
                opacity: "0",
                visibility: "hidden",
                duration: "0"
            });

            wrap.classList.remove("open");
            wrap.classList.add("close");
        }
    });
}