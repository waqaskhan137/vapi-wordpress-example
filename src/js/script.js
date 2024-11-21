// Public and Assistant keys for Vapi
const PUBLIC_KEY = "b2721269-1f89-4fdf-9796-f3bc590d2d4e";
const ASSISTANT_KEY = "fa0e897b-1750-4821-9dfc-fd6d0a088698";

// Initialize Vapi with the public key
const vapi = new Vapi(PUBLIC_KEY);

// Get the start button element from the DOM
const startButton = document.getElementById('startButton');

// Variable to track the connection state
let isConnected = false;

// Function to toggle the connection
async function toggleConnection() {
    try {
        if (!isConnected) {
            // Request microphone permission from the user
            await navigator.mediaDevices.getUserMedia({ audio: true });
            
            // Start the Vapi connection with the assistant key
            await vapi.start(ASSISTANT_KEY);
            
            // Add 'active' class to the start button to indicate connection is active
            startButton.classList.add('active');
        } else {
            // Stop the Vapi connection
            await vapi.stop();
            
            // Remove 'active' class from the start button
            startButton.classList.remove('active');
        }
        
        // Toggle the connection state
        isConnected = !isConnected;
    } catch (error) {
        // Log any errors that occur during the connection process
        console.error('Error toggling connection:', error);
    }
}

// Add a click event listener to the start button to toggle the connection
startButton.addEventListener('click', toggleConnection);
