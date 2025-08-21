export default function contactAnimations() {
    form_anim();
}

function form_anim() {
    const form = document.querySelector(".contact_form");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if(entry.isIntersecting) {
                if(window.innerWidth > 917) {
                    gsap.fromTo(form, {
                        x: "40%",
                        y: "-70%",
                        transform: "rotateZ(45deg)",
                        opacity: "0",
                        visibility: "hidden"
                    }, {
                        x: "0",
                        y: "0",
                        transform: "rotateZ(0deg)",
                        opacity: "1",
                        visibility: "visible",
                        duration: "1",
                        ease: "bounce.out",
                    });
                }

                if(window.innerWidth <= 917) {
                    gsap.fromTo(form, {
                        y: "-30%",
                        opacity: "0",
                        visibility: "hidden"
                    }, {
                        y: "0",
                        opacity: "1",
                        visibility: "visible",
                        duration: "1",
                        ease: "bounce.out"
                    })
                }
            }
        });
    });

    observer.observe(form);
}