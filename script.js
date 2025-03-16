const images = [
    { src: "dhol.jpg", word: "dhol" },
    { src: "hp.jpg", word: "heropanti" },
    { src: "mp.jpg", word: "mirzapur" },
    { src: "panchayat.jpeg", word: "panchayat" },
    { src: "php.jpg", word: "phir hera pheri" }
];

const finalImage = "7cr.jpg"; // Image to show at the end

let shuffledImages = [...images].sort(() => Math.random() - 0.5); // Shuffle images randomly
let currentIndex = 0;

const imageElement = document.getElementById("game-image");
const inputElement = document.getElementById("word-input");
const messageElement = document.getElementById("message");

function loadImage() {
    imageElement.src = shuffledImages[currentIndex].src;
    inputElement.value = "";
    messageElement.textContent = "";
}

function checkGuess() {
    const userGuess = inputElement.value.toLowerCase();
    if (userGuess === shuffledImages[currentIndex].word) {
        messageElement.textContent = "Correct!";
        messageElement.style.color = "green";
        currentIndex++;
        if (currentIndex < shuffledImages.length) {
            setTimeout(loadImage, 1000);
        } else {
            setTimeout(() => {
                imageElement.src = "7cr.jpg"; // Show final image
                messageElement.textContent="Congratulations! You guessed all words correctly!";
            }, 500);
        }
    } else {
        messageElement.textContent = "Wrong guess, try again!";
        messageElement.style.color = "red";
    }
}

document.addEventListener("DOMContentLoaded", loadImage);