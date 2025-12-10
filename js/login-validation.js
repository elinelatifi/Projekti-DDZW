
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            
            const email = document.getElementById('loginEmail');
            const password = document.getElementById('loginPassword');
            
           
            const emailError = document.getElementById('loginEmailError');
            const passwordError = document.getElementById('loginPasswordError');
            
            
            clearErrors([email, password], [emailError, passwordError]);
            
            let isValid = true;
            
           
            if (!email.value.trim()) {
                showError(email, emailError, 'Email është i detyrueshëm');
                isValid = false;
            } else if (!isValidEmail(email.value)) {
                showError(email, emailError, 'Ju lutem shkruani një email të vlefshëm');
                isValid = false;
            }
            
            
            if (!password.value) {
                showError(password, passwordError, 'Fjalëkalimi është i detyrueshëm');
                isValid = false;
            } else if (password.value.length < 6) {
                showError(password, passwordError, 'Fjalëkalimi duhet të ketë të paktën 6 karaktere');
                isValid = false;
            }
            
            
            if (isValid) {
                alert('Hyrja u krye me sukses! (Kjo është një demonstrim)');
                
            }
        });
    }
});


function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}


function showError(input, errorElement, message) {
    input.classList.add('error');
    errorElement.textContent = message;
    errorElement.classList.add('show');
}


function clearErrors(inputs, errorElements) {
    inputs.forEach(input => input.classList.remove('error'));
    errorElements.forEach(error => {
        error.classList.remove('show');
        error.textContent = '';
    });
}

