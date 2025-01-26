let clickCount = 0;
let cps = 0;
let timer = 5;  // 5 seconds test
let isTesting = false;
let interval;

const clickArea = document.getElementById('clickArea');
const cpsDisplay = document.getElementById('cps');
const timeDisplay = document.getElementById('time');
const clicksDisplay = document.getElementById('clicks');
const animalDisplay = document.getElementById('animal');
const resetBtn = document.getElementById('resetBtn');

clickArea.addEventListener('click', () => {
    if (isTesting) {
        clickCount++;
        clicksDisplay.textContent = clickCount;  // Update click count
    }
});

function startTest() {
    clickCount = 0;
    cps = 0;
    timeDisplay.textContent = timer;
    cpsDisplay.textContent = cps;
    clicksDisplay.textContent = clickCount;
    animalDisplay.textContent = "You are a sloth!";  // Reset animal to default
    isTesting = true;

    interval = setInterval(() => {
        if (timer > 0) {
            timer--;
            timeDisplay.textContent = timer;
        } else {
            endTest();
        }
    }, 1000);
}

function endTest() {
    clearInterval(interval);
    isTesting = false;
    cps = clickCount / 5;  // CPS = total clicks / 5 seconds
    cpsDisplay.textContent = cps.toFixed(2);
    
    // Show animal based on CPS
    if (cps < 1) {
        animalDisplay.textContent = "You are a sloth!";
    } else if (cps >= 1 && cps < 2) {
        animalDisplay.textContent = "You are a tortoise!";
    } else if (cps >= 2 && cps < 3) {
        animalDisplay.textContent = "You are a rabbit!";
    } else if (cps >= 3 && cps < 4) {
        animalDisplay.textContent = "You are a fox!";
    } else if (cps >= 4) {
        animalDisplay.textContent = "You are a cheetah!";
    }
}

// Reset test on pressing the 'R' key or clicking the reset button
window.addEventListener('keydown', (e) => {
    if (e.key === 'r' || e.key === 'R') {
        resetTest();
    }
});

resetBtn.addEventListener('click', resetTest);

function resetTest() {
    timer = 5;
    startTest();
}

startTest();
