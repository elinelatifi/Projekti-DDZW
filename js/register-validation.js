// Register Form Validation - Plain JavaScript
document.addEventListener('DOMContentLoaded', function() {
    const registerForm = document.getElementById('registerForm');
    
    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Clear previous errors
            clearErrors();
            
            // Get form values
            const name = document.getElementById('regName').value.trim();
            const email = document.getElementById('regEmail').value.trim();
            const phone = document.getElementById('regPhone').value.trim();
            const password = document.getElementById('regPassword').value;
            const confirmPassword = document.getElementById('regConfirmPassword').value;
            const agreeTerms = document.getElementById('agreeTerms').checked;
            
            let isValid = true;
            
            // Validate name
            if (name === '') {
                showError('regNameError', 'Emri dhe mbiemri janë të detyrueshëm');
                isValid = false;
            } else if (name.length < 3) {
                showError('regNameError', 'Emri duhet të ketë të paktën 3 karaktere');
                isValid = false;
            }
            
            // Validate email
            if (email === '') {
                showError('regEmailError', 'Email është i detyrueshëm');
                isValid = false;
            } else if (!isValidEmail(email)) {
                showError('regEmailError', 'Ju lutem shkruani një email të vlefshëm');
                isValid = false;
            }
            
            // Validate phone (optional but if provided, should be valid)
            if (phone !== '' && !isValidPhone(phone)) {
                showError('regPhoneError', 'Ju lutem shkruani një numër telefoni të vlefshëm');
                isValid = false;
            }
            
            // Validate password
            if (password === '') {
                showError('regPasswordError', 'Fjalëkalimi është i detyrueshëm');
                isValid = false;
            } else if (!isValidPassword(password)) {
                showError('regPasswordError', 'Fjalëkalimi duhet të ketë të paktën 8 karaktere, me shkronjë të madhe dhe numër');
                isValid = false;
            }
            
            // Validate confirm password
            if (confirmPassword === '') {
                showError('regConfirmPasswordError', 'Ju lutem konfirmoni fjalëkalimin');
                isValid = false;
            } else if (password !== confirmPassword) {
                showError('regConfirmPasswordError', 'Fjalëkalimet nuk përputhen');
                isValid = false;
            }
            
            // Validate terms agreement
            if (!agreeTerms) {
                showError('agreeTermsError', 'Ju duhet të pranoni kushtet dhe rregullat');
                isValid = false;
            }
            
            // If form is valid, show success message
            if (isValid) {
                const successMessage = document.getElementById('registerSuccess');
                if (successMessage) {
                    successMessage.style.display = 'block';
                    registerForm.reset();
                    
                    // Redirect to login page after 3 seconds
                    setTimeout(function() {
                        // window.location.href = 'login.html';
                    }, 3000);
                }
            }
        });
        
        // Real-time validation on blur
        const nameInput = document.getElementById('regName');
        const emailInput = document.getElementById('regEmail');
        const phoneInput = document.getElementById('regPhone');
        const passwordInput = document.getElementById('regPassword');
        const confirmPasswordInput = document.getElementById('regConfirmPassword');
        
        if (nameInput) {
            nameInput.addEventListener('blur', function() {
                validateName();
            });
        }
        
        if (emailInput) {
            emailInput.addEventListener('blur', function() {
                validateEmail();
            });
        }
        
        if (phoneInput) {
            phoneInput.addEventListener('blur', function() {
                if (phoneInput.value.trim() !== '') {
                    validatePhone();
                }
            });
        }
        
        if (passwordInput) {
            passwordInput.addEventListener('blur', function() {
                validatePassword();
            });
            
            // Also validate confirm password when password changes
            passwordInput.addEventListener('input', function() {
                if (confirmPasswordInput.value !== '') {
                    validateConfirmPassword();
                }
            });
        }
        
        if (confirmPasswordInput) {
            confirmPasswordInput.addEventListener('blur', function() {
                validateConfirmPassword();
            });
        }
    }
    
    // Validation helper functions
    function validateName() {
        const name = document.getElementById('regName').value.trim();
        if (name === '') {
            showError('regNameError', 'Emri dhe mbiemri janë të detyrueshëm');
            return false;
        } else if (name.length < 3) {
            showError('regNameError', 'Emri duhet të ketë të paktën 3 karaktere');
            return false;
        } else {
            clearError('regNameError');
            return true;
        }
    }
    
    function validateEmail() {
        const email = document.getElementById('regEmail').value.trim();
        if (email === '') {
            showError('regEmailError', 'Email është i detyrueshëm');
            return false;
        } else if (!isValidEmail(email)) {
            showError('regEmailError', 'Ju lutem shkruani një email të vlefshëm');
            return false;
        } else {
            clearError('regEmailError');
            return true;
        }
    }
    
    function validatePhone() {
        const phone = document.getElementById('regPhone').value.trim();
        if (phone !== '' && !isValidPhone(phone)) {
            showError('regPhoneError', 'Ju lutem shkruani një numër telefoni të vlefshëm');
            return false;
        } else {
            clearError('regPhoneError');
            return true;
        }
    }
    
    function validatePassword() {
        const password = document.getElementById('regPassword').value;
        if (password === '') {
            showError('regPasswordError', 'Fjalëkalimi është i detyrueshëm');
            return false;
        } else if (!isValidPassword(password)) {
            showError('regPasswordError', 'Fjalëkalimi duhet të ketë të paktën 8 karaktere, me shkronjë të madhe dhe numër');
            return false;
        } else {
            clearError('regPasswordError');
            return true;
        }
    }
    
    function validateConfirmPassword() {
        const password = document.getElementById('regPassword').value;
        const confirmPassword = document.getElementById('regConfirmPassword').value;
        if (confirmPassword === '') {
            showError('regConfirmPasswordError', 'Ju lutem konfirmoni fjalëkalimin');
            return false;
        } else if (password !== confirmPassword) {
            showError('regConfirmPasswordError', 'Fjalëkalimet nuk përputhen');
            return false;
        } else {
            clearError('regConfirmPasswordError');
            return true;
        }
    }
    
    // Utility functions
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    function isValidPhone(phone) {
        // Accepts phone numbers with or without +, spaces, dashes, parentheses
        const phoneRegex = /^[\+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,9}$/;
        return phoneRegex.test(phone);
    }
    
    function isValidPassword(password) {
        // At least 8 characters, one uppercase letter, and one number
        const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
        return passwordRegex.test(password);
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

