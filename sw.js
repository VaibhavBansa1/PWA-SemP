// Import Workbox from Google CDN (Exactly like the Fireship video)
importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js');

if (workbox) {
    console.log(`Workbox is loaded 🎉`);
    
    // Core PWA Feature: Cache the HTML, CSS, and JS files. 
    // NetworkFirst means it tries the internet first, but falls back to the cache if offline.
    workbox.routing.registerRoute(
        ({request}) => request.destination === 'document' || 
                       request.destination === 'script' || 
                       request.destination === 'style',
        new workbox.strategies.NetworkFirst()
    );

} else {
    console.log(`Workbox failed to load 😬`);
}