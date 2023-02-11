document.getElementById("btn-submit").addEventListener("click", function () {
    const emailFeld = document.getElementById("email");
    const email = emailFeld.value;
    const passwordFeld = document.getElementById("password");
    const password = passwordFeld.value;
    if (email === 'sontan@baap.com' && password === 'secretbaap') {
        window.location.href="bank.html"
    }
    else{
        alert('Tui password vhule gechoss!!!! toke ami teijjo sontan ghosona korlam.')
    }
})