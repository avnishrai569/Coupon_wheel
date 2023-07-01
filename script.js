const slices = 4; // Number of slices on the wheel
let spinCount = 0;
let spinning = false;

function spinWheel() {
    if (spinning) return;

    spinCount++;
    if (spinCount === 1) {
        showMessage("Try again");
    } else if (spinCount === 2) {
        startSpinning();
        setTimeout(stopSpinning, 3000);
    }
}
function startSpinning() {
    spinning = true;
    document.querySelector('.wheel').style.animationPlayState = 'running';
}

function stopSpinning() {
    spinning = false;
    document.querySelector('.wheel').style.animationPlayState = 'paused';
    const winner = Math.floor(Math.random() * slices) + 1;
    showMessage(`You won a coupon! Prize: ${winner}`);
}

function showMessage(message) {
    document.getElementById('result').textContent = message;
}
