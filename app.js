let generateButton = document.getElementById('genBtn');
let displayThePassword = document.getElementById('passwordInput');


generateButton.addEventListener('click', () => {
    // Fetch the length and options as in your current code
    const length = document.getElementById('length').value;
    const options = {
        includeUppercase: document.getElementById('Uppercase').checked,
        includeLowercase: document.getElementById('Lowercase').checked,
        includeNumbers: document.getElementById('Numbers').checked,
        includeSymbols: document.getElementById('Symbols').checked,
    };

    let characterPool = '';
    let randomString = '';

    const characterSets = {
        includeLowercase: 'abcdefghijklmnopqrstuvwxyz',
        includeUppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
        includeNumbers: '0123456789',
        includeSymbols: '!@#$%^&*()_+[]{}|;:,.<>?/`',
    };

    for (const [key, charSet] of Object.entries(characterSets)) {
        if (options[key]) {
            characterPool += charSet;
        }
    }

    if (!characterPool) {
        alert('No character sets selected. Please enable at least one option.');
        return;
    }

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characterPool.length);
        randomString += characterPool[randomIndex];
    }

    displayThePassword.value = randomString;

    // Call the evaluatePasswordStrength function
    const strength = evaluatePasswordStrength(randomString, options);

    // Display the strength
    console.log(`Password Strength: ${strength}`);
    let signalStrengthText=document.querySelector('.strength-text');
    signalStrengthText.textContent = `${strength}`;
    updateStrengthBars(strength.toLocaleLowerCase());
    // Apply styles dynamically
signalStrengthText.style.fontFamily = 'JetBrains Mono, monospace';
signalStrengthText.style.fontSize = '24px';
signalStrengthText.style.fontWeight = '700';
signalStrengthText.style.lineHeight = '31.68px';
signalStrengthText.style.textAlign = 'right';
signalStrengthText.style.textUnderlinePosition = 'from-font';
signalStrengthText.style.textDecorationSkipInk = 'none';
});


// Update the range value display when the slider is changed
const rangeInput = document.getElementById('length');
const rangeValue = document.getElementById('rangeValue');
rangeInput.addEventListener('input', () => {
    rangeValue.textContent = rangeInput.value;
});
document.addEventListener('DOMContentLoaded', () => {
    const rangeInput = document.getElementById('length');
    const rangeValue = document.getElementById('rangeValue');

    // Function to update the background fill of the range slider
    const updateSliderBackground = () => {
        const min = rangeInput.min;
        const max = rangeInput.max;
        const value = rangeInput.value;

        // Calculate the percentage filled
        const percentage = ((value - min) / (max - min)) * 100;

        // Update the background style
        rangeInput.style.background = `linear-gradient(to right, #A4FFAF ${percentage}%, #18171F ${percentage}%)`;

        // Update the displayed value
        rangeValue.textContent = value;
    };

    // Add event listeners for the slider
    rangeInput.addEventListener('input', updateSliderBackground);

    // Initialize the slider background on page load
    updateSliderBackground();
});


//strength 
// Function to evaluate password strength
const evaluatePasswordStrength = (password, options) => {
    const { includeLowercase, includeUppercase, includeNumbers, includeSymbols } = options;

    // Determine the number of character types used
    const characterTypes = [
        includeLowercase ? /[a-z]/.test(password) : false,
        includeUppercase ? /[A-Z]/.test(password) : false,
        includeNumbers ? /\d/.test(password) : false,
        includeSymbols ? /[!@#$%^&*()_+\[\]{}|;:,.<>?/`]/.test(password) : false,
    ].filter(Boolean).length;

    // Evaluate password strength
    if (password.length < 8) {
        return "TOO WEAK";
    } else if (password.length >= 8 && characterTypes === 1) {
        return "WEAK";
    } else if (password.length >= 8 && characterTypes === 2) {
        return "MEDIUM";
    } else if (password.length >= 12 && characterTypes >= 3) {
        return "STRONG";
    }

    return "WEAK"; // Default fallback
};
function updateStrengthBars(strength) {
    // Get all the strength bars
    const strengthBars = document.querySelectorAll('.strength-bar');

    // Define colors for each strength level
    const colors = {
        "too weak": "#F64A4A",
        "weak": "#FB7C58",
        "medium": "#F8CD65",
        "strong": "#A4FFAF"
    };

    // Reset all bars to their default state
    strengthBars.forEach(bar => {
        bar.style.backgroundColor = "#18171F"; // Default background color
    });

    // Apply colors based on strength level
    switch (strength) {
        case "too weak":
            strengthBars[0].style.backgroundColor = colors["too weak"];
            break;
        case "weak":
            strengthBars[0].style.backgroundColor = colors["weak"];
            strengthBars[1].style.backgroundColor = colors["weak"];
            break;
        case "medium":
            strengthBars[0].style.backgroundColor = colors["medium"];
            strengthBars[1].style.backgroundColor = colors["medium"];
            strengthBars[2].style.backgroundColor = colors["medium"];
            break;
        case "strong":
            strengthBars.forEach(bar => {
                bar.style.backgroundColor = colors["strong"];
            });
            break;
        default:
            console.error("Invalid strength value provided");
    }
}
updateStrengthBars();

document.getElementById('copyBtn').addEventListener('click', function() {
    const passwordInput = document.getElementById('passwordInput');
    
    // Copy the text inside the text field
    navigator.clipboard.writeText(passwordInput.value).then(() => {
        // Show the copied message
        const copyMessage = document.getElementById('copyMessage');
        copyMessage.style.display = 'inline'; // Show the message
        
        // Hide the message after 2 seconds
        setTimeout(() => {
            copyMessage.style.display = 'none';
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
});
