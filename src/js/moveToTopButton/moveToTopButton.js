var toTopButton = document.querySelector('a.Footer-moveTop');

toTopButton.addEventListener('click', scrollToTop);

function scrollToTop(e) {
    e.preventDefault();
    window.scroll({top: 0, left: 0, behavior: 'smooth'});
}