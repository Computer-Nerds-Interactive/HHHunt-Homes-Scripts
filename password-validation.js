// 💙 MEMBERSCRIPT #36 v0.1 💙 PASSWORD VALIDATION

window.addEventListener('load', function() {
    const passwordInput = document.querySelector('input[data-ms-member="password"]');
    const submitButton = document.querySelector('[ms-code-submit-button]');
    
    if (!passwordInput || !submitButton) return;  // Return if essential elements are not found

    function checkAllValid() {
        const validationPoints = document.querySelectorAll('[ms-code-pw-validation]');
        return Array.from(validationPoints).every(validationPoint => {
            const validIcon = validationPoint.querySelector('[ms-code-pw-validation-icon="true"]');
            return validIcon && validIcon.style.display === 'flex';  // Check for validIcon existence before accessing style
        });
    }

    passwordInput.addEventListener('keyup', function() {
        const password = passwordInput.value;
        const validationPoints = document.querySelectorAll('[ms-code-pw-validation]');
        
        validationPoints.forEach(function(validationPoint) {
            const rule = validationPoint.getAttribute('ms-code-pw-validation');
            let isValid = false;
            
            // MINIMUM LENGTH VALIDATION POINT
            if (rule.startsWith('minlength-')) {
                const minLength = parseInt(rule.split('-')[1]);
                isValid = password.length >= minLength;
            }

            // UPPER AND LOWER CASE VALIDATION POINT
            else if (rule === 'upper-lower-case') {
                isValid = /[a-z]/.test(password) && /[A-Z]/.test(password);
            }

            // NUMBER VALIDATION POINT
            else if (rule === 'number') {
                isValid = /\d/.test(password);
            }
            
            const validIcon = validationPoint.querySelector('[ms-code-pw-validation-icon="true"]');
            const invalidIcon = validationPoint.querySelector('[ms-code-pw-validation-icon="false"]');
            
            if (validIcon && invalidIcon) {  // Check for existence before accessing style
                if (isValid) {
                    validIcon.style.display = 'flex';
                    invalidIcon.style.display = 'none';
                } else {
                    validIcon.style.display = 'none';
                    invalidIcon.style.display = 'flex';
                }
            }
        });

        if (checkAllValid()) {
            submitButton.classList.remove('disabled');
        } else {
            submitButton.classList.add('disabled');
        }
    });

    // Trigger keyup event after adding event listener
    var event = new Event('keyup');
    passwordInput.dispatchEvent(event);
});