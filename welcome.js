document.addEventListener("DOMContentLoaded", () => {
    const themeBtn = document.getElementById("themeBtn");
    if (themeBtn) {
        themeBtn.addEventListener("click", () => {
            document.body.classList.toggle("dark-mode");
        });
    }
});
