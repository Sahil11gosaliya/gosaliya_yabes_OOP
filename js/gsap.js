export function typeAnimation(selector, speed) {
    document.querySelectorAll(selector).forEach((element) => {
        // Split text into characters
        const text = element.textContent;
        const characters = text.split('');
        element.textContent = '';

        // Animate each character
        characters.forEach((char, index) => {
            const span = document.createElement('span');
            span.textContent = char;
            element.appendChild(span);

            // Use GSAP to animate the opacity and optionally, slight y translation
            gsap.fromTo(span, { opacity: 0, y: -5 }, { opacity: 1, y: 0, delay: index * speed, duration: speed });
        })
    })
}