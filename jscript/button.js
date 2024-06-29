document.querySelectorAll('.btns').forEach(button => {
    button.addEventListener('click', function() {
        const url = this.getAttribute('data-url');
        window.location.href = url;
    });
});
