
const form = document.querySelector('.login-form')

form.addEventListener('submit', formValidation)

function formValidation(event) {
    event.preventDefault();
    let userData = {email: '', password: ''};
    const emailInput = form.querySelector('input[type="email"]');
    const passwordInput = form.querySelector('input[type="password"]');
    const emailValue = emailInput.value.trim();
    const passwordValue = passwordInput.value.trim();

    if (emailValue === '' || passwordValue === '') {
        alert('All form fields must be filled in')

    } else { 
        userData.email = emailValue;
        userData.password = passwordValue;
        console.log(userData);
        
        form.reset();
        }
    }