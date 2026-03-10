// 1. Register the Service Worker
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js')
            .then(reg => console.log('Service Worker Registered Successfully!', reg))
            .catch(err => console.error('Service Worker Registration Failed!', err));
    });
}

// 2. UI Updates for Live Demo
function updateNetworkStatus() {
    const statusText = document.getElementById('status');
    if (navigator.onLine) {
        statusText.innerText = 'Online 🟢';
    } else {
        statusText.innerText = 'Offline 🔴 (Running from Cache)';
    }
}

// Check the status IMMEDIATELY when the page loads
window.addEventListener('load', updateNetworkStatus);

// Listen for any network changes while the app is open
window.addEventListener('online', updateNetworkStatus);
window.addEventListener('offline', updateNetworkStatus);