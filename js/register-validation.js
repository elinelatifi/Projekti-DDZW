// Register Form Validation - Plain JavaScript
document.addEventListener('DOMContentLoaded', function() {
    const registerForm = document.getElementById('registerForm');
    
    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form fields
            const name = document.getElementById('registerName');
            const email = document.getElementById('registerEmail');
            const password = document.getElementById('registerPassword');
            const confirmPassword = document.getElementById('registerConfirmPassword');
            
            // Get error message elements
            const nameError = document.getElementById('registerNameError');
            const emailError = document.getElementById('registerEmailError');
            const passwordError = document.getElementById('registerPasswordError');
            const confirmPasswordError = document.getElementById('registerConfirmPasswordError');
            
            // Reset previous errors
            clearErrors([name, email, password, confirmPassword], 
                       [nameError, emailError, passwordError, confirmPasswordError]);
            
            let isValid = true;
            
            // Validate Name
            if (!name.value.trim()) {
                showError(name, nameError, 'Emri është i detyrueshëm');
                isValid = false;
            } else if (name.value.trim().length < 2) {
                showError(name, nameError, 'Emri duhet të ketë të paktën 2 karaktere');
                isValid = false;
            } else if (!/^[a-zA-ZëËçÇ\s]+$/.test(name.value.trim())) {
                showError(name, nameError, 'Emri duhet të përmbajë vetëm shkronja');
                isValid = false;
            }
            
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
            } else if (password.value.length < 8) {
                showError(password, passwordError, 'Fjalëkalimi duhet të ketë të paktën 8 karaktere');
                isValid = false;
            } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(password.value)) {
                showError(password, passwordError, 'Fjalëkalimi duhet të përmbajë të paktën një shkronjë të vogël, një të madhe dhe një numër');
                isValid = false;
            }
            
            // Validate Confirm Password
            if (!confirmPassword.value) {
                showError(confirmPassword, confirmPasswordError, 'Konfirmimi i fjalëkalimit është i detyrueshëm');
                isValid = false;
            } else if (password.value !== confirmPassword.value) {
                showError(confirmPassword, confirmPasswordError, 'Fjalëkalimet nuk përputhen');
                isValid = false;
            }
            
            // If form is valid, show success message (in real app, this would submit to server)
            if (isValid) {
                alert('Regjistrimi u krye me sukses! (Kjo është një demonstrim)');
                // In a real application, you would submit the form to a server here
                // registerForm.submit();
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

