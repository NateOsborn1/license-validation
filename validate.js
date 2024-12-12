document.addEventListener('DOMContentLoaded', function() {
    const licenseKeyInput = document.getElementById('licenseKey');
    const validateButton = document.getElementById('validateButton');
    const resultMessage = document.getElementById('resultMessage');

    // Hardcoded valid license keys
    const validLicenseKeys = [
        'TABPRO-MONTHLY-1234-ABCD',
        'TABPRO-YEARLY-5678-WXYZ'
    ];

    // Enhanced license key validation
    function isValidLicenseFormat(key) {
        const licensePattern = /^TABPRO-(MONTHLY|YEARLY)-[A-Z0-9]{4}-[A-Z0-9]{4}$/;
        return licensePattern.test(key);
    }

    // Validate license
    function validateLicense(key) {
        return validLicenseKeys.includes(key);
    }

    validateButton.addEventListener('click', function() {
        const licenseKey = licenseKeyInput.value.trim();

        resultMessage.classList.remove('success', 'error', 'hidden');

        if (!licenseKey) {
            resultMessage.textContent = 'Please enter a license key';
            resultMessage.classList.add('error');
            return;
        }

        if (!isValidLicenseFormat(licenseKey)) {
            resultMessage.textContent = 'Invalid license key format';
            resultMessage.classList.add('error');
            return;
        }

        if (validateLicense(licenseKey)) {
            resultMessage.textContent = 'License is valid! ✅';
            resultMessage.classList.add('success');
        } else {
            resultMessage.textContent = 'Invalid license key ❌';
            resultMessage.classList.add('error');
        }
    });
});
