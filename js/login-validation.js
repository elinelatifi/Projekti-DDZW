// Login Form Validation - Plain JavaScript
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Clear previous errors
            clearErrors();
            
            // Get form values
            const email = document.getElementById('loginEmail').value.trim();
            const password = document.getElementById('loginPassword').value.trim();
            
            let isValid = true;
            
            // Validate email
            if (email === '') {
                showError('loginEmailError', 'Email është i detyrueshëm');
                isValid = false;
            } else if (!isValidEmail(email)) {
                showError('loginEmailError', 'Ju lutem shkruani një email të vlefshëm');
                isValid = false;
            }
            
            // Validate password
            if (password === '') {
                showError('loginPasswordError', 'Fjalëkalimi është i detyrueshëm');
                isValid = false;
            } else if (password.length < 6) {
                showError('loginPasswordError', 'Fjalëkalimi duhet të ketë të paktën 6 karaktere');
                isValid = false;
            }
            
            // If form is valid, show success message
            if (isValid) {
                const successMessage = document.getElementById('loginSuccess');
                if (successMessage) {
                    successMessage.style.display = 'block';
                    loginForm.reset();
                    
                    // Redirect to home page after 2 seconds (simulation)
                    setTimeout(function() {
                        // In a real application, you would handle authentication here
                        // window.location.href = 'index.html';
                    }, 2000);
                }
            }
        });
        
        // Real-time validation on blur
        const emailInput = document.getElementById('loginEmail');
        const passwordInput = document.getElementById('loginPassword');
        
        if (emailInput) {
            emailInput.addEventListener('blur', function() {
                validateEmail();
            });
        }
        
        if (passwordInput) {
            passwordInput.addEventListener('blur', function() {
                validatePassword();
            });
        }
    }
    
    // Validation helper functions
    function validateEmail() {
        const email = document.getElementById('loginEmail').value.trim();
        if (email === '') {
            showError('loginEmailError', 'Email është i detyrueshëm');
            return false;
        } else if (!isValidEmail(email)) {
            showError('loginEmailError', 'Ju lutem shkruani një email të vlefshëm');
            return false;
        } else {
            clearError('loginEmailError');
            return true;
        }
    }
    
    function validatePassword() {
        const password = document.getElementById('loginPassword').value.trim();
        if (password === '') {
            showError('loginPasswordError', 'Fjalëkalimi është i detyrueshëm');
            return false;
        } else if (password.length < 6) {
            showError('loginPasswordError', 'Fjalëkalimi duhet të ketë të paktën 6 karaktere');
            return false;
        } else {
            clearError('loginPasswordError');
            return true;
        }
    }
    
    // Utility functions
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    function showError(errorId, message) {
        const errorElement = document.getElementById(errorId);
        if (errorElement) {
            errorElement.textContent = message;
            errorElement.style.display = 'block';
        }
    }
    
    function clearError(errorId) {
        const errorElement = document.getElementById(errorId);
        if (errorElement) {
            errorElement.textContent = '';
            errorElement.style.display = 'none';
        }
    }
    
    function clearErrors() {
        const errorElements = document.querySelectorAll('.error-message');
        errorElements.forEach(function(element) {
            element.textContent = '';
            element.style.display = 'none';
        });
    }
});

