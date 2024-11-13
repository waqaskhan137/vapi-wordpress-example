const vapi = new Vapi("a3886229-55ea-4b2e-9e3e-53d3d00c23fb");
const startButton = document.getElementById('startButton');
let isConnected = false;
let isConnecting = false;

async function requestMicPermission() {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        return true;
    } catch (err) {
        console.error('Microphone permission denied:', err);
        return false;
    }
}

function waitForConnection() {
    return new Promise((resolve, reject) => {
        const timeout = setTimeout(() => {
            reject(new Error('Connection timeout'));
        }, 30000);

        function handler(state) {
            console.log('Connection state changed to:', state);
            if (state === 'connected') {
                clearTimeout(timeout);
                vapi.off('connectionStateChanged', handler);
                resolve();
            } else if (state === 'failed' || state === 'disconnected') {
                clearTimeout(timeout);
                vapi.off('connectionStateChanged', handler);
                reject(new Error('Connection failed'));
            }
        }

        vapi.on('connectionStateChanged', handler);
    });
}

vapi.on('ready', () => {
    console.log('Vapi is ready to use');
});

startButton.addEventListener('click', async function() {
    if (!isConnected && !isConnecting) {
        const hasMicPermission = await requestMicPermission();
        if (!hasMicPermission) {
            alert('Microphone permission is required for this application.');
            return;
        }

        try {
            isConnecting = true;
            console.log('Starting connection process');
            
            // Start Vapi
            await vapi.start("201fbf92-2a8a-44ea-a238-31b3050c4747");
            
            // Wait for connection in background
            waitForConnection().then(() => {
                console.log('Connection successful');
                isConnected = true;
                isConnecting = false;
                startButton.classList.add('active');
            }).catch(error => {
                console.error('Connection failed:', error);
                isConnecting = false;
                isConnected = false;
                startButton.classList.remove('active');
            });
            
        } catch (error) {
            console.error('Error starting call:', error);
            isConnecting = false;
            isConnected = false;
            startButton.classList.remove('active');
            alert('Failed to start call. Please try again.');
        }
    } else if (isConnected) {
        try {
            console.log('Stopping connection');
            await vapi.stop();
            startButton.classList.remove('active');
            isConnected = false;
        } catch (error) {
            console.error('Error stopping call:', error);
        }
    }
});

vapi.on('error', (error) => {
    console.error('Vapi error:', error.message);
    isConnected = false;
    isConnecting = false;
    startButton.classList.remove('active');
    alert(`Error: ${error.message}`);
}); 