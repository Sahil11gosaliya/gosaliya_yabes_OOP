export function setupSlider() {
    // Slider navigation activation function
    function activate(e) {
        const slider = document.querySelector('.slider');
        const items = slider.querySelectorAll('.item');

        if (e.target.matches('.next')) slider.append(items[0]);
        if (e.target.matches('.prev')) slider.prepend(items[items.length - 1]);
    }

    // Attaching click event listener to the document for slider navigation
    document.addEventListener('click', activate, false);
}

