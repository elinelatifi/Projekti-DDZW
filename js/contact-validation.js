// Contact Form Validation - Plain JavaScript
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Clear previous errors
            clearErrors();
            
            // Get form values
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const phone = document.getElementById('phone').value.trim();
            const subject = document.getElementById('subject').value.trim();
            const message = document.getElementById('message').value.trim();
            
            let isValid = true;
            
            // Validate name
            if (name === '') {
                showError('nameError', 'Emri dhe mbiemri janë të detyrueshëm');
                isValid = false;
            } else if (name.length < 3) {
                showError('nameError', 'Emri duhet të ketë të paktën 3 karaktere');
                isValid = false;
            }
            
            // Validate email
            if (email === '') {
                showError('emailError', 'Email është i detyrueshëm');
                isValid = false;
            } else if (!isValidEmail(email)) {
                showError('emailError', 'Ju lutem shkruani një email të vlefshëm');
                isValid = false;
            }
            
            // Validate phone (optional but if provided, should be valid)
            if (phone !== '' && !isValidPhone(phone)) {
                showError('phoneError', 'Ju lutem shkruani një numër telefoni të vlefshëm');
                isValid = false;
            }
            
            // Validate subject
            if (subject === '') {
                showError('subjectError', 'Tema është e detyrueshme');
                isValid = false;
            } else if (subject.length < 3) {
                showError('subjectError', 'Tema duhet të ketë të paktën 3 karaktere');
                isValid = false;
            }
            
            // Validate message
            if (message === '') {
                showError('messageError', 'Mesazhi është i detyrueshëm');
                isValid = false;
            } else if (message.length < 10) {
                showError('messageError', 'Mesazhi duhet të ketë të paktën 10 karaktere');
                isValid = false;
            }
            
            // If form is valid, show success message
            if (isValid) {
                const successMessage = document.getElementById('formSuccess');
                if (successMessage) {
                    successMessage.style.display = 'block';
                    contactForm.reset();
                    
                    // Hide success message after 5 seconds
                    setTimeout(function() {
                        successMessage.style.display = 'none';
                    }, 5000);
                }
            }
        });
        
        // Real-time validation on blur
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const phoneInput = document.getElementById('phone');
        const subjectInput = document.getElementById('subject');
        const messageInput = document.getElementById('message');
        
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
        
        if (subjectInput) {
            subjectInput.addEventListener('blur', function() {
                validateSubject();
            });
        }
        
        if (messageInput) {
            messageInput.addEventListener('blur', function() {
                validateMessage();
            });
        }
    }
    
    // Validation helper functions
    function validateName() {
        const name = document.getElementById('name').value.trim();
        if (name === '') {
            showError('nameError', 'Emri dhe mbiemri janë të detyrueshëm');
            return false;
        } else if (name.length < 3) {
            showError('nameError', 'Emri duhet të ketë të paktën 3 karaktere');
            return false;
        } else {
            clearError('nameError');
            return true;
        }
    }
    
    function validateEmail() {
        const email = document.getElementById('email').value.trim();
        if (email === '') {
            showError('emailError', 'Email është i detyrueshëm');
            return false;
        } else if (!isValidEmail(email)) {
            showError('emailError', 'Ju lutem shkruani një email të vlefshëm');
            return false;
        } else {
            clearError('emailError');
            return true;
        }
    }
    
    function validatePhone() {
        const phone = document.getElementById('phone').value.trim();
        if (phone !== '' && !isValidPhone(phone)) {
            showError('phoneError', 'Ju lutem shkruani një numër telefoni të vlefshëm');
            return false;
        } else {
            clearError('phoneError');
            return true;
        }
    }
    
    function validateSubject() {
        const subject = document.getElementById('subject').value.trim();
        if (subject === '') {
            showError('subjectError', 'Tema është e detyrueshme');
            return false;
        } else if (subject.length < 3) {
            showError('subjectError', 'Tema duhet të ketë të paktën 3 karaktere');
            return false;
        } else {
            clearError('subjectError');
            return true;
        }
    }
    
    function validateMessage() {
        const message = document.getElementById('message').value.trim();
        if (message === '') {
            showError('messageError', 'Mesazhi është i detyrueshëm');
            return false;
        } else if (message.length < 10) {
            showError('messageError', 'Mesazhi duhet të ketë të paktën 10 karaktere');
            return false;
        } else {
            clearError('messageError');
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

