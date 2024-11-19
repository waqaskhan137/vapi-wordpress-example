const vapi = new Vapi("a3886229-55ea-4b2e-9e3e-53d3d00c23fb");
const startButton = document.getElementById('startButton');

async function startConnection() {
    try {
        await navigator.mediaDevices.getUserMedia({ audio: true });
        await vapi.start("201fbf92-2a8a-44ea-a238-31b3050c4747");
        startButton.classList.add('active');
    } catch (error) {
        console.error('Error starting call:', error);
    }
}

startButton.addEventListener('click', startConnection);
