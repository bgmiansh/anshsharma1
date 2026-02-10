const playfulMessages = [
    "Think once again 🥺",
    "Are you really sure? 💔",
    "Just try the green button once 😉",
    "My heart is waiting 💘",
    "Pretty please? 🌹",
    "Give us a chance 💝"
];

let messageIndex = 0;

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const playfulMessage = document.getElementById("playfulMessage");
const initialContent = document.getElementById("initialContent");
const successMessage = document.getElementById("successMessage");

function createFloatingHearts() {
    const container = document.getElementById("floatingHearts");
    for (let i = 0; i < 15; i++) {
        const heart = document.createElement("div");
        heart.className = "heart-bg";
        heart.textContent = "💕";
        heart.style.left = Math.random() * 100 + "%";
        heart.style.fontSize = Math.random() * 20 + 15 + "px";
        heart.style.animationDelay = Math.random() * 15 + "s";
        container.appendChild(heart);
    }
}

noBtn.addEventListener("click", () => {
    playfulMessage.textContent = playfulMessages[messageIndex];
    messageIndex = (messageIndex + 1) % playfulMessages.length;

    const noScale = parseFloat(noBtn.style.transform.replace("scale(", "")) || 1;
    if (noScale > 0.6) noBtn.style.transform = `scale(${noScale - 0.1})`;

    const yesScale = parseFloat(yesBtn.style.transform.replace("scale(", "")) || 1;
    if (yesScale < 1.3) yesBtn.style.transform = `scale(${yesScale + 0.05})`;
});

yesBtn.addEventListener("click", () => {
    initialContent.style.display = "none";
    successMessage.style.display = "block";
});

createFloatingHearts();
