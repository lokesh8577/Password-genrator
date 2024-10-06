
document.addEventListener('DOMContentLoaded', function () {
    class PasswordGenerator {
        constructor() {
            // Get DOM elements
            this.smallCheckbox = document.getElementById('Small');
            this.capitalCheckbox = document.getElementById('Capital');
            this.numberCheckbox = document.getElementById('Number');
            this.symbolCheckbox = document.getElementById('Symbol');
            this.generateButton = document.querySelector('.generate');
            this.funnyButton = document.querySelector('.funny');
            this.displayDiv = document.querySelector('.display');
			this.rangeInput=document.getElementById('range');

            // Check if elements are null
            if (!this.smallCheckbox || !this.capitalCheckbox || !this.numberCheckbox || !this.symbolCheckbox || !this.generateButton || !this.funnyButton || !this.displayDiv) {
                console.error('One or more required elements are missing in the HTML.');
                return;
            }

            this.addEventListeners();
        }

        addEventListeners() {
            this.generateButton.addEventListener('click', () => this.generatePassword());
            this.funnyButton.addEventListener('click', () => this.generateFunnyPassword());
        }

        getRandomCharacter(array) {
            return array[Math.floor(Math.random() * array.length)];
        }

        generatePassword() {
            const smallLetters = 'abcdefghijklmnopqrstuvwxyz';
            const capitalLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
            const numbers = '0123456789';
            const symbols = '!@#$%^&*()_+[]{}|;:,.<>?';
            let characters = '';
            let password = '';

            if (this.smallCheckbox.checked) characters += smallLetters;
            if (this.capitalCheckbox.checked) characters += capitalLetters;
            if (this.numberCheckbox.checked) characters += numbers;
            if (this.symbolCheckbox.checked) characters += symbols;

            if (characters.length === 0) {
                this.displayDiv.textContent = 'Please select at least one option!';
                return;
            }

            for (let i = 0; i < this.rangeInput.value; i++) { 
                password += this.getRandomCharacter(characters);
            }

            this.displayDiv.textContent = password;
        }

        generateFunnyPassword() {
            const funnyWords = ['fuzzy', 'wuzzy', 'bunny', 'fluffy', 'muffin', 'wobble', 'giggle'];
            let password = '';

            for (let i = 0; i < 1; i++) { // Generate a password with 3 funny words
                password += this.getRandomCharacter(funnyWords);
                if (i < 2) password += '-'; // Add a separator between words
            }

            this.displayDiv.textContent = password;
        }
    }

    // Instantiate the PasswordGenerator class
    new PasswordGenerator();
});

