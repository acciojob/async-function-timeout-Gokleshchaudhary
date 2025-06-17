// Function to simulate delay
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Main function to handle the button click
async function displayMessage(event) {
    event.preventDefault(); // Prevent the default form submission

    // Retrieve input values
    const textInput = document.getElementById('text').value;
    const delayInput = document.getElementById('delay').value;

    // Convert delay input to number
    const delayTime = Number(delayInput);

    // Wait for the specified delay
    await delay(delayTime);

    // Update the output div with the text
    document.getElementById('output').innerHTML = textInput;
}

// Add event listener to the form
document.getElementById('messageForm').addEventListener('submit', displayMessage);