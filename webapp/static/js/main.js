const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const predictButton = document.getElementById('predict-button');
const clearButton = document.getElementById('clear-button');
const predictionSpan = document.getElementById('prediction');

let isDrawing = false;

// Set up the canvas
ctx.lineWidth = 20;
ctx.lineCap = 'round';
ctx.strokeStyle = 'black';

function startDrawing(e) {
    isDrawing = true;
    draw(e);
}

function stopDrawing() {
    isDrawing = false;
    ctx.beginPath();
}

function draw(e) {
    if (!isDrawing) return;

    // Adjust mouse position for canvas offset
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    ctx.lineTo(x, y);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x, y);
}

function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    predictionSpan.textContent = '';
}

async function predict() {
    const imageData = canvas.toDataURL('image/png');

    const response = await fetch('/predict', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ image: imageData })
    });

    const data = await response.json();
    predictionSpan.textContent = data.digit;
}

// Event Listeners
canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mouseup', stopDrawing);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseout', stopDrawing); // Stop drawing if mouse leaves canvas

predictButton.addEventListener('click', predict);
clearButton.addEventListener('click', clearCanvas);

// Initial clear
clearCanvas();