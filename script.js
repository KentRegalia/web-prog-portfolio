document.addEventListener("DOMContentLoaded", function () {

    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const msgBox = document.getElementById("messageText");
    const counter = document.getElementById("counter");
    const greeting = document.getElementById("greeting");
    const form = document.getElementById("messageForm");
    const themeBtn = document.getElementById("themeBtn");
    const editJobBtn = document.getElementById("editJobBtn");
    const toggleSkillsBtn = document.getElementById("toggleSkillsBtn");
    const skillsSection = document.getElementById("skillsSection");

    nameInput.addEventListener("input", function() {
        greeting.textContent = nameInput.value ? "Hello, " + nameInput.value + "!" : "";
    });

    form.addEventListener("submit", function(e) {
        e.preventDefault();
        if (!nameInput.value.trim() || !emailInput.value.trim()) {
            alert("Name and Email are required");
            return;
        }
        alert("Message sent successfully!");
        form.reset();
        greeting.textContent = "";
        counter.textContent = 200;
    });

    themeBtn.addEventListener("click", function() {
        document.body.classList.toggle("dark-mode");
        if (document.body.classList.contains("dark-mode")) {
            themeBtn.textContent = "Light Mode";
        } else {
            themeBtn.textContent = "Dark Mode";
    }
    });

    editJobBtn.addEventListener("click", function() {
        let newTitle = prompt("Enter new job title:");
        if (newTitle && newTitle.trim() !== "") {
            document.querySelector(".job-title").textContent = newTitle;
        }
    });

    toggleSkillsBtn.addEventListener("click", function() {
        if (skillsSection.style.display === "none") {
            skillsSection.style.display = "block";
            toggleSkillsBtn.textContent = "Hide Skills";
        } else {
            skillsSection.style.display = "none";
            toggleSkillsBtn.textContent = "Show Skills";
        }
    });

    msgBox.addEventListener("input", function() {
        counter.textContent = 200 - msgBox.value.length;
    });

    document.getElementById("dateDisplay").textContent =
        "Today’s Date: " + new Date().toDateString();

    const profileImg = document.getElementById("profileImg");
    const changeImgBtn = document.getElementById("changeImgBtn");

    const images = ["profile.jpg", "profile2.jpg", "profile3.jpg", "profile4.jpg"];
    let currentIndex = 0;

    changeImgBtn.addEventListener("click", function() {
        currentIndex = (currentIndex + 1) % images.length;
        profileImg.src = images[currentIndex];
    });
    
    function showTimeGreeting() {
        const greetingEl = document.getElementById("timeGreeting");
        const hour = new Date().getHours();
        let message = "";
        if (hour >= 5 && hour < 12) {
            message = "Good Morning ☀️";
        } else if (hour >= 12 && hour < 18) {
            message = "Good Afternoon 🌤️";
        } else {
            message = "Good Evening 🌙";
        }
        greetingEl.textContent = message;
    }
    
    showTimeGreeting();
});
