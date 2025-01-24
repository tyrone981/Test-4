const emailInput = document.getElementById('emailInput');
const startTrialButton = document.getElementById('startTrialButton');

startTrialButton.addEventListener('click', () => {
    const email = emailInput.value;
    alert(`You entered the email: ${email}`);
});