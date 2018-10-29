var mobileButton = document.querySelector('a.Header-mobileNavButton');
var mobileNav = document.querySelector('.MobileNav');
page.addEventListener('click', showMobileMenu);


function showMobileMenu(e) {
    var mobileNavIcon = document.querySelector('.Header-mobileNavIcon');
    if (e.target === mobileNavIcon || e.target === mobileButton || e.target === overlay && mobileNav.classList.contains('isOpen')) {
        mobileButton.classList.toggle('isActive');
        mobileNav.classList.toggle('isOpen');
        overlay.classList.toggle('isOpen');
        e.preventDefault();
    }
}