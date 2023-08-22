const emailInput = document.getElementById('email');
const errorMessage = document.getElementById('input-error');

emailInput.addEventListener('blur', function() {
    if (!isValidEmail(emailInput.value)) {
        emailInput.classList.add('error');
        errorMessage.textContent = 'Valid email required';
    } else {
        emailInput.classList.remove('error');
        errorMessage.textContent = '';
    }
});

emailInput.addEventListener('focus', function() {
    if (emailInput.classList.contains('error')) {
        emailInput.classList.remove('error');
        errorMessage.textContent = '';
    }
});

function isValidEmail(email) {
    /* Regexp to validate email format */
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}