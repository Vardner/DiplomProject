if (document.querySelector('ul.ProductGallery-scroll')) {
    var sliderList = document.querySelector('ul.ProductGallery-scroll');
    sliderList.addEventListener('click', selectItem);
}

function selectItem(e) {
    var itemsList = sliderList.children;
    if (e.target.parentElement.classList.contains('ProductGallery-scrollItem') && !e.target.parentElement.classList.contains('isActive')) {
        for (i = 0; i < itemsList.length; i++) {
            if (itemsList[i].classList.contains('isActive')) itemsList[i].classList.remove('isActive');
        }
        e.target.parentElement.classList.add('isActive');
        for (b = 0; b < itemsList.length; b++)
            if (e.target.parentElement === itemsList[b]) {
                var slider = document.querySelector('.ProductGallery-sliderList');
                var translateLenght;
                var imageWidth = slider.parentElement.offsetWidth;
                translateLenght = b * imageWidth * -1;
                slider.style.transform = 'translateX(' + translateLenght + 'px)';
            }
    }
}