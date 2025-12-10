// Contact Form Validation - Plain JavaScript
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form fields
            const name = document.getElementById('contactName');
            const email = document.getElementById('contactEmail');
            const subject = document.getElementById('contactSubject');
            const message = document.getElementById('contactMessage');
            
            // Get error message elements
            const nameError = document.getElementById('contactNameError');
            const emailError = document.getElementById('contactEmailError');
            const subjectError = document.getElementById('contactSubjectError');
            const messageError = document.getElementById('contactMessageError');
            
            // Reset previous errors
            clearErrors([name, email, subject, message], [nameError, emailError, subjectError, messageError]);
            
            let isValid = true;
            
            // Validate Name
            if (!name.value.trim()) {
                showError(name, nameError, 'Emri është i detyrueshëm');
                isValid = false;
            } else if (name.value.trim().length < 2) {
                showError(name, nameError, 'Emri duhet të ketë të paktën 2 karaktere');
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
            
            // Validate Subject
            if (!subject.value.trim()) {
                showError(subject, subjectError, 'Subjekti është i detyrueshëm');
                isValid = false;
            } else if (subject.value.trim().length < 5) {
                showError(subject, subjectError, 'Subjekti duhet të ketë të paktën 5 karaktere');
                isValid = false;
            }
            
            // Validate Message
            if (!message.value.trim()) {
                showError(message, messageError, 'Mesazhi është i detyrueshëm');
                isValid = false;
            } else if (message.value.trim().length < 10) {
                showError(message, messageError, 'Mesazhi duhet të ketë të paktën 10 karaktere');
                isValid = false;
            }
            
            // If form is valid, show success message
            if (isValid) {
                alert('Mesazhi u dërgua me sukses! Ne do t\'ju kontaktojmë së shpejti.');
                contactForm.reset();
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

