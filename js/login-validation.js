// Login Form Validation - Plain JavaScript
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form fields
            const email = document.getElementById('loginEmail');
            const password = document.getElementById('loginPassword');
            
            // Get error message elements
            const emailError = document.getElementById('loginEmailError');
            const passwordError = document.getElementById('loginPasswordError');
            
            // Reset previous errors
            clearErrors([email, password], [emailError, passwordError]);
            
            let isValid = true;
            
            // Validate Email
            if (!email.value.trim()) {
                showError(email, emailError, 'Email është i detyrueshëm');
                isValid = false;
            } else if (!isValidEmail(email.value)) {
                showError(email, emailError, 'Ju lutem shkruani një email të vlefshëm');
                isValid = false;
            }
            
            // Validate Password
            if (!password.value) {
                showError(password, passwordError, 'Fjalëkalimi është i detyrueshëm');
                isValid = false;
            } else if (password.value.length < 6) {
                showError(password, passwordError, 'Fjalëkalimi duhet të ketë të paktën 6 karaktere');
                isValid = false;
            }
            
            // If form is valid, show success message (in real app, this would submit to server)
            if (isValid) {
                alert('Hyrja u krye me sukses! (Kjo është një demonstrim)');
                // In a real application, you would submit the form to a server here
                // loginForm.submit();
            }
        });
    }
});

// Helper function to validate email
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Helper function to show error
function showError(input, errorElement, message) {
    input.classList.add('error');
    errorElement.textContent = message;
    errorElement.classList.add('show');
}

// Helper function to clear errors
function clearErrors(inputs, errorElements) {
    inputs.forEach(input => input.classList.remove('error'));
    errorElements.forEach(error => {
        error.classList.remove('show');
        error.textContent = '';
    });
}

