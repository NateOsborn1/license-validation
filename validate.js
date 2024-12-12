document.addEventListener('DOMContentLoaded', function() {
    const licenseKeyInput = document.getElementById('licenseKey');
    const validateButton = document.getElementById('validateButton');
    const resultMessage = document.getElementById('resultMessage');

    // Basic license key validation function
    function isValidLicenseFormat(key) {
        // Example format: TABPRO-XXXX-YYYY-ZZZZ
        const licensePattern = /^TABPRO-[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{4}$/;
        return licensePattern.test(key);
    }

    // Simulate license validation (replace with actual backend logic)
    function validateLicense(key) {
        // In a real scenario, this would be an API call
        const validLicenseKeys = [
            'TABPRO-1234-ABCD-5678',
            'TABPRO-9876-WXYZ-4321'
        ];

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