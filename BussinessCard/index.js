var pswIsVisible = false;

function setPwsVisibility() {
    pswIsVisible = !pswIsVisible;
    let pswInput = document.querySelector('.psw-input');
    let pswEyeIcon = document.getElementById('psw-eye');
    if (pswIsVisible) {
        pswEyeIcon.classList.remove('fa-eye');
        pswEyeIcon.classList.add('fa-eye-slash');
        pswInput.type = 'text';
    } else {
        pswEyeIcon.classList.remove('fa-eye-slash');
        pswEyeIcon.classList.add('fa-eye');
        pswInput.type = 'password';
    }
}
