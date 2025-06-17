document.getElementById('messageForm').addEventListener('submit', async function(event) {
    event.preventDefault(); // Prevent the default form submission

    const message = document.getElementById('text').value; // Get the message input
    const delayTime = parseInt(document.getElementById('delay').value); // Get the delay input and convert to number

    // Call the displayMessage function with the delay
    await displayMessage(message, delayTime);
});

// Define the delay function
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms)); // Create a promise that resolves after ms
}

// Define the displayMessage function
async function displayMessage(message, delayTime) {
    await delay(delayTime); // Wait for the specified delay
    document.getElementById('output').innerText = message; // Display the message in the output div
}
const delayTime = parseInt(document.getElementById('delay').value); // Changed variable name
console.log("Message:", message);
console.log("Delay Time:", delayTime);