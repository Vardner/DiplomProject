var modalSignIn = document.getElementById('Popup-signIn');
var modalSignUp = document.getElementById('Popup-signUp');
var modalBtnClose = document.querySelectorAll('a.Popup-close');
var headerNavBtn = document.querySelectorAll('li.HeaderNav-item');
var modalToSignUp = document.querySelector('a.Popup-subLink');


modalSignIn.style.top = (document.body.offsetHeight / 2) - (modalSignIn.offsetHeight/2)+'px';
modalSignUp.style.top = (document.body.offsetHeight / 2) - (modalSignUp.offsetHeight/2)+'px';


page.addEventListener('click', toggleModal);


function toggleModal(e) {

    //Modal open Actions

    if ((e.target === headerNavBtn[0]) || (e.target === headerNavBtn[0].firstElementChild)) {
        modalSignIn.classList.toggle('isOpen');
        overlay.classList.toggle('isOpen');
        overlay.style.zIndex = '1';
    } else if ((e.target === headerNavBtn[1]) || (e.target === headerNavBtn[1].firstElementChild)) {
        modalSignUp.classList.toggle('isOpen');
        overlay.classList.toggle('isOpen');
        overlay.style.zIndex = '1';
    }

    //Modal close Actions

    if ((e.target === overlay && modalSignIn.classList.contains('isOpen')) || (e.target === modalBtnClose[0])){
        modalSignIn.classList.toggle('isOpen');
        overlay.classList.toggle('isOpen');
        overlay.style.zIndex = '0';

    } else if (e.target === overlay && modalSignUp.classList.contains('isOpen') || (e.target === modalBtnClose[1])){
        modalSignUp.classList.toggle('isOpen');
        overlay.classList.toggle('isOpen');
        overlay.style.zIndex = '0';

    }

    //Show SignUp from SignIn

    if (e.target === modalToSignUp ) {
        modalSignIn.classList.toggle('isOpen');
        modalSignUp.classList.toggle('isOpen');
    }
}


