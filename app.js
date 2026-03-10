// 1. Register the Service Worker
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js')
            .then(reg => console.log('Service Worker Registered Successfully!', reg))
            .catch(err => console.error('Service Worker Registration Failed!', err));
    });
}

// 2. UI Updates for Live Demo (Shows when you pull the plug on WiFi)
window.addEventListener('online', () => {
    document.getElementById('status').innerText = 'Online 🟢';
});

window.addEventListener('offline', () => {
    document.getElementById('status').innerText = 'Offline 🔴 (Running from Cache)';
});