// 1. Simple Mini-Game Logic
let score = 0;
const target = document.getElementById('game-target');
const scoreDisplay = document.getElementById('score');

target.addEventListener('click', () => {
    score++;
    scoreDisplay.innerText = score;
    
    // Move the box randomly
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 100);
    
    target.style.position = 'absolute';
    target.style.left = `${x}px`;
    target.style.top = `${y}px`;
});

// 2. Resource Upload Simulation
function handleUpload() {
    const fileInput = document.getElementById('fileUpload');
    const status = document.getElementById('uploadStatus');
    
    if (fileInput.files.length > 0) {
        const fileName = fileInput.files[0].name;
        status.style.color = "green";
        status.innerText = `File "${fileName}" ready for processing.`;
    } else {
        status.style.color = "red";
        status.innerText = "Please select a file first.";
    }
}

// 3. Smooth Scroll Navbar adjustment
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
