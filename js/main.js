const dataLimite = new Date(2025, 8, 2, 11, 59);
const agora = new Date();

const botao = document.getElementById("entrar");
const expirado = document.getElementById("expirado");

if (agora > dataLimite) {
    botao.style.display = "none";
    expirado.style.display = "block";
} else {
    botao.addEventListener("click", () => {
        window.location.href = "home.html";
    });
}