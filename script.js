const whatsappBtn = document.getElementById("whatsappBtn")
const emailBtn = document.getElementById("emailBtn")

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