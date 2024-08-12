
window.addEventListener('load', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach((section, index) => {
        setTimeout(() => {
            section.classList.add('animate');
        }, index * 300);
    });
});
