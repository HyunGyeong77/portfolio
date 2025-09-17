export default function headerAnimations() {
    const wrap = document.querySelector(".header-wrap");
    const projectsWrap = document.querySelector(".projects-wrap");

    projects_into(wrap, projectsWrap);
    projects_leave(wrap, projectsWrap);
}

function projects_into(wrap, projectsWrap) {
    gsap.fromTo(wrap, {
        y: "0",
        opacity: "1",
        visibility: "visible",
    }, {
        y: "-100%",
        opacity: "0",
        visibility: "hidden",
        scrollTrigger: {
            trigger: projectsWrap,
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

export let leaveTrigger;

function projects_leave(wrap, projectsWrap) {
    leaveTrigger = ScrollTrigger.create({
        trigger: projectsWrap,
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