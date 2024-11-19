// Public and Assistant keys for Vapi
const PUBLIC_KEY = "a3886229-55ea-4b2e-9e3e-53d3d00c23fb";
const ASSISTANT_KEY = "201fbf92-2a8a-44ea-a238-31b3050c4747";

// Initialize Vapi with the public key
const vapi = new Vapi(PUBLIC_KEY);

// Get the start button element from the DOM
const startButton = document.getElementById('startButton');

// Function to start the connection
async function startConnection() {
    try {
        // Request microphone permission from the user
        await navigator.mediaDevices.getUserMedia({ audio: true });
        
        // Start the Vapi connection with the assistant key
        await vapi.start(ASSISTANT_KEY);
        
        // Add 'active' class to the start button to indicate connection is active
        startButton.classList.add('active');
    } catch (error) {
        // Log any errors that occur during the connection process
        console.error('Error starting call:', error);
    }
}

// Add a click event listener to the start button to initiate the connection
startButton.addEventListener('click', startConnection);
