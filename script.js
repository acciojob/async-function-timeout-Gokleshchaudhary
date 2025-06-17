//your JS code here. If required.
document.getElementById('messageForm').addEventListener('submit', async function(event) {
    event.preventDefault(); // Prevent the default form submission

    const message = document.getElementById('text').value; // Get the message input
    const delay = parseInt(document.getElementById('delay').value); // Get the delay input and convert to number

    // Call the displayMessage function with the delay
    await displayMessage(message, delay);
});

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms)); // Create a promise that resolves after ms
}

async function displayMessage(message, delay) {
    await delay(delay); // Wait for the specified delay
    document.getElementById('output').innerText = message; // Display the message in the output div
}