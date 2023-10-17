const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');

usernameInput.addEventListener('change', function() {
    chrome.storage.local.set({ username: usernameInput.value });
});

passwordInput.addEventListener('change', function() {
    chrome.storage.local.set({ password: passwordInput.value });
});

chrome.storage.local.get(["username", "password"], function(result) {
    usernameInput.value = result.username;
    passwordInput.value = result.password;
});