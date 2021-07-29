window.addEventListener('DOMContentLoaded', () => {
    const bars = document.querySelectorAll('[data-bar]');

    bars.forEach(item => {
        item.addEventListener('input', (e) => {
            const value = e.target.value;
            e.target.style.background = `
                linear-gradient(to right, #24809E 0%, #24809E ${value}%, #fff ${value}%, white 100%)
                `;
        });
    });
});