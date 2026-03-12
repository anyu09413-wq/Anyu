// --- 1. Photo Upload & Live Preview ---
const fileInput = document.getElementById('fileInput');
const displayPicture = document.getElementById('display-picture');
const fileNameDisplay = document.getElementById('fileNameDisplay');

fileInput.addEventListener('change', function() {
    const file = this.files[0];
    if (file) {
        fileNameDisplay.innerText = `Selected: ${file.name}`;
        
        const reader = new FileReader();
        reader.onload = function(e) {
            // Instantly update the header profile picture
            displayPicture.src = e.target.result;
        }
        reader.readAsDataURL(file);
    }
});

// --- 2. Reflex Mini Game ---
let score = 0;
const target = document.getElementById('game-target');
const scoreDisplay = document.getElementById('score');
const container = document.querySelector('.game-container');

target.addEventListener('mousedown', function() {
    score++;
    scoreDisplay.innerText = score;
    moveTarget();
});

function moveTarget() {
    const maxX = container.clientWidth - target.clientWidth;
    const maxY = container.clientHeight - target.clientHeight;
    
    // Calculate random positions within the pink box
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);
    
    target.style.left = `${randomX}px`;
    target.style.top = `${randomY}px`;
}

// Initialize target position on load
moveTarget();
