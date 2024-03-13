export function greensock() {

    const introTextElements = document.querySelectorAll('.properties');

    introTextElements.forEach((element) => {
        gsap.from(element, {
            opacity: 0,
            y: 50,
            duration: 1,
            scrollTrigger: {
                trigger: element,
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play play none reverse',
            },
        });
    });
}