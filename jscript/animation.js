document.addEventListener('DOMContentLoaded', function () {
    const elements = document.querySelectorAll('.animate');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-visible');
            } else {
                entry.target.classList.remove('animate-visible');
            }
        });
    }, {
        threshold: 0.1
    });

    elements.forEach(element => {
        observer.observe(element);
    });
});
