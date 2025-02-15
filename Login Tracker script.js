const registerContainer = document.getElementById('register-container');
const loginContainer = document.getElementById('login-container');
const welcomeContainer = document.getElementById('welcome-container');
const registerForm = document.getElementById('register-form');
const loginForm = document.getElementById('login-form');
const welcomeMessage = document.getElementById('welcome-message');
const signOutButton = document.getElementById('sign-out');
const breakStartButton = document.getElementById('break-start');
const breakEndButton = document.getElementById('break-end');

let users = [];
let currentUser = null;
let breakTimes = [];

registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const userId = document.getElementById('userId').value;
    const userName = document.getElementById('userName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    users.push({ userId, userName, email, password });
    alert('Registration successful!');
    registerContainer.classList.add('hidden');
    loginContainer.classList.remove('hidden');
});

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const userName = document.getElementById('loginUserName').value;
    const password = document.getElementById('loginPassword').value;

    currentUser = users.find(user => user.userName === userName && user.password === password);
    if (currentUser) {
        alert('Login successful!');
        loginContainer.classList.add('hidden');
        welcomeContainer.classList.remove('hidden');
        welcomeMessage.textContent = `Welcome, ${currentUser.userName}!`;
        logUserActivity('sign in');
    } else {
        alert('Invalid credentials!');
    }
});

signOutButton.addEventListener('click', () => {
    logUserActivity('sign out');
    welcomeContainer.classList.add('hidden');
    loginContainer.classList.remove('hidden');
});

breakStartButton.addEventListener('click', () => {
    const startTime = new Date().toLocaleString();
    breakTimes.push({ startTime });
    alert(`Break started at ${startTime}`);
});

breakEndButton.addEventListener('click', () => {
    const endTime = new Date().toLocaleString();
    const lastBreak = breakTimes[breakTimes.length - 1];
    if (lastBreak && !lastBreak.endTime) {
        lastBreak.endTime = endTime;
        alert(`Break ended at ${endTime}`);
    } else {
        alert('No break started!');
    }
});

function logUserActivity(activity) {
    const dateTime = new Date().toLocaleString();
    console.log(`${currentUser.userName} ${activity} at ${dateTime}`);
    // Here you would store the activity in an Excel file or database
}
