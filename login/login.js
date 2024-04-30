const container = document.getElementById('container'); // der Varible container wird ein Wert zugewiesen
const registerBtn = document.getElementById('register'); // der Varible registerBtn wird ein Wert zugewiesen
const loginBtn = document.getElementById('login'); // der Varible loginBtn wird ein Wert zugewiesen

registerBtn.addEventListener('click', () => { // beim klicken auf den Registrieren button wird die classe vom container geändert
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => { // beim klicken auf den Login button wird die classe vom container geändert
    container.classList.remove("active");
});

function warning() { // Pop-UP wenn man veruscht sich anzumelden/Registrieren
    window.alert("Dieses Feature ist noch nicht verfügbar!");
};