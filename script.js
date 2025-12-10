// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Modal functionality
const modal = document.getElementById('bookingModal');
const bookBtn = document.getElementById('bookBtn');

if (bookBtn) {
    bookBtn.addEventListener('click', () => {
        if (modal) {
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        } else {
            alert('Ju lutem regjistrohuni për të rezervuar!');
            window.location.href = 'login.html';
        }
    });
}

if (modal) {
    const closeBtn = document.querySelector('.close');
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
    }

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
}

// Contact Form Validation (Plain JavaScript)
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('contactName');
        const email = document.getElementById('contactEmail');
        const message = document.getElementById('contactMessage');
        const nameError = document.getElementById('nameError');
        const emailError = document.getElementById('emailError');
        const messageError = document.getElementById('messageError');
        
        let isValid = true;
        
        // Reset errors
        nameError.classList.remove('show');
        emailError.classList.remove('show');
        messageError.classList.remove('show');
        name.classList.remove('error');
        email.classList.remove('error');
        message.classList.remove('error');
        
        // Validate name
        if (name.value.trim() === '') {
            nameError.textContent = 'Ju lutem shkruani emrin tuaj';
            nameError.classList.add('show');
            name.classList.add('error');
            isValid = false;
        } else if (name.value.trim().length < 2) {
            nameError.textContent = 'Emri duhet të jetë të paktën 2 karaktere';
            nameError.classList.add('show');
            name.classList.add('error');
            isValid = false;
        }
        
        // Validate email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email.value.trim() === '') {
            emailError.textContent = 'Ju lutem shkruani email-in tuaj';
            emailError.classList.add('show');
            email.classList.add('error');
            isValid = false;
        } else if (!emailRegex.test(email.value)) {
            emailError.textContent = 'Ju lutem shkruani një email të vlefshëm';
            emailError.classList.add('show');
            email.classList.add('error');
            isValid = false;
        }
        
        // Validate message
        if (message.value.trim() === '') {
            messageError.textContent = 'Ju lutem shkruani mesazhin tuaj';
            messageError.classList.add('show');
            message.classList.add('error');
            isValid = false;
        } else if (message.value.trim().length < 10) {
            messageError.textContent = 'Mesazhi duhet të jetë të paktën 10 karaktere';
            messageError.classList.add('show');
            message.classList.add('error');
            isValid = false;
        }
        
        if (isValid) {
            alert('Faleminderit, ' + name.value + '! Mesazhi juaj është dërguar. Do t\'ju kontaktojmë së shpejti.');
            contactForm.reset();
        }
    });
}

// Login Form Validation (Plain JavaScript)
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = document.getElementById('loginEmail');
        const password = document.getElementById('loginPassword');
        const emailError = document.getElementById('loginEmailError');
        const passwordError = document.getElementById('loginPasswordError');
        
        let isValid = true;
        
        // Reset errors
        emailError.classList.remove('show');
        passwordError.classList.remove('show');
        email.classList.remove('error');
        password.classList.remove('error');
        
        // Validate email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email.value.trim() === '') {
            emailError.textContent = 'Ju lutem shkruani email-in tuaj';
            emailError.classList.add('show');
            email.classList.add('error');
            isValid = false;
        } else if (!emailRegex.test(email.value)) {
            emailError.textContent = 'Ju lutem shkruani një email të vlefshëm';
            emailError.classList.add('show');
            email.classList.add('error');
            isValid = false;
        }
        
        // Validate password
        if (password.value === '') {
            passwordError.textContent = 'Ju lutem shkruani fjalëkalimin';
            passwordError.classList.add('show');
            password.classList.add('error');
            isValid = false;
        } else if (password.value.length < 6) {
            passwordError.textContent = 'Fjalëkalimi duhet të jetë të paktën 6 karaktere';
            passwordError.classList.add('show');
            password.classList.add('error');
            isValid = false;
        }
        
        if (isValid) {
            alert('Hyrja u krye me sukses! Mirë se vini!');
            // Në versionin final, këtu do të bëhet dërguar te serveri
            window.location.href = 'home.html';
        }
    });
}

// Register Form Validation (Plain JavaScript)
const registerForm = document.getElementById('registerForm');
if (registerForm) {
    registerForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('registerName');
        const email = document.getElementById('registerEmail');
        const phone = document.getElementById('registerPhone');
        const password = document.getElementById('registerPassword');
        const passwordConfirm = document.getElementById('registerPasswordConfirm');
        const agreeTerms = document.getElementById('agreeTerms');
        
        const nameError = document.getElementById('registerNameError');
        const emailError = document.getElementById('registerEmailError');
        const phoneError = document.getElementById('registerPhoneError');
        const passwordError = document.getElementById('registerPasswordError');
        const passwordConfirmError = document.getElementById('registerPasswordConfirmError');
        const agreeTermsError = document.getElementById('agreeTermsError');
        
        let isValid = true;
        
        // Reset errors
        nameError.classList.remove('show');
        emailError.classList.remove('show');
        phoneError.classList.remove('show');
        passwordError.classList.remove('show');
        passwordConfirmError.classList.remove('show');
        agreeTermsError.classList.remove('show');
        
        name.classList.remove('error');
        email.classList.remove('error');
        phone.classList.remove('error');
        password.classList.remove('error');
        passwordConfirm.classList.remove('error');
        
        // Validate name
        if (name.value.trim() === '') {
            nameError.textContent = 'Ju lutem shkruani emrin tuaj';
            nameError.classList.add('show');
            name.classList.add('error');
            isValid = false;
        } else if (name.value.trim().length < 3) {
            nameError.textContent = 'Emri duhet të jetë të paktën 3 karaktere';
            nameError.classList.add('show');
            name.classList.add('error');
            isValid = false;
        }
        
        // Validate email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email.value.trim() === '') {
            emailError.textContent = 'Ju lutem shkruani email-in tuaj';
            emailError.classList.add('show');
            email.classList.add('error');
            isValid = false;
        } else if (!emailRegex.test(email.value)) {
            emailError.textContent = 'Ju lutem shkruani një email të vlefshëm';
            emailError.classList.add('show');
            email.classList.add('error');
            isValid = false;
        }
        
        // Validate phone
        const phoneRegex = /^(\+355|0)[0-9]{9}$/;
        if (phone.value.trim() === '') {
            phoneError.textContent = 'Ju lutem shkruani numrin e telefonit';
            phoneError.classList.add('show');
            phone.classList.add('error');
            isValid = false;
        } else if (!phoneRegex.test(phone.value.replace(/\s/g, ''))) {
            phoneError.textContent = 'Ju lutem shkruani një numër telefoni të vlefshëm (p.sh. +355 69 123 4567)';
            phoneError.classList.add('show');
            phone.classList.add('error');
            isValid = false;
        }
        
        // Validate password
        if (password.value === '') {
            passwordError.textContent = 'Ju lutem shkruani fjalëkalimin';
            passwordError.classList.add('show');
            password.classList.add('error');
            isValid = false;
        } else if (password.value.length < 6) {
            passwordError.textContent = 'Fjalëkalimi duhet të jetë të paktën 6 karaktere';
            passwordError.classList.add('show');
            password.classList.add('error');
            isValid = false;
        }
        
        // Validate password confirmation
        if (passwordConfirm.value === '') {
            passwordConfirmError.textContent = 'Ju lutem konfirmoni fjalëkalimin';
            passwordConfirmError.classList.add('show');
            passwordConfirm.classList.add('error');
            isValid = false;
        } else if (password.value !== passwordConfirm.value) {
            passwordConfirmError.textContent = 'Fjalëkalimet nuk përputhen';
            passwordConfirmError.classList.add('show');
            passwordConfirm.classList.add('error');
            isValid = false;
        }
        
        // Validate terms agreement
        if (!agreeTerms.checked) {
            agreeTermsError.textContent = 'Ju duhet të pranoni kushtet dhe rregullat';
            agreeTermsError.classList.add('show');
            isValid = false;
        }
        
        if (isValid) {
            alert('Regjistrimi u krye me sukses! Tani mund të hyni në llogari.');
            // Në versionin final, këtu do të bëhet dërguar te serveri
            window.location.href = 'login.html';
        }
    });
}

// Header mbetet fiks - pa efekte scroll

// Set minimum date for booking to today
const dateInput = document.querySelector('input[type="date"]');
if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.setAttribute('min', today);
}