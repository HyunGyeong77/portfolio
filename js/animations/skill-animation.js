

export function fieldset_anim(fieldset) {
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