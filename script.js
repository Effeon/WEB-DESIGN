const whatsappBtn = document.getElementById("whatsappBtn");
const emailBtn = document.getElementById("emailBtn");
const githubBtn = document.getElementById(githubBtn);

whatsappBtn.addEventListener("click", () => {
    window.open(
        "https://wa.me/23277544763",
        "_blank"
    );
});

emailBtn.addEventListener("click", () => {
    window.location.href =
        "mailto:effeonpewah@gmail.com"
});

githubBtn.addEventListener("click", () => {
    window.open(
        "https://github.com/Effeon",
        "_blank"
    );
});