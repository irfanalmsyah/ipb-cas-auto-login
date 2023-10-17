if (window.location.href.includes("class.ipb.ac.id/login/index.php")) {
  window.location.href = "https://class.ipb.ac.id/login/index.php?authCAS=CAS";
}

if (window.location.href.includes("cas.ipb.ac.id/cas/login")) {
    chrome.storage.local.get(["username", "password"], function(result) {
        const usernameInput = document.getElementById('username');
        const passwordInput = document.getElementById('password');
        const submitButton = document.getElementsByName('submit')[0];
        usernameInput.value = result.username;
        passwordInput.value = result.password;
        submitButton.removeAttribute('disabled');
        submitButton.click();
    });
}