// Initialize the map
const map = L.map('map').setView([20, 0], 2); // Centered on the world

// Add a dark-themed tile layer
L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/">CARTO</a>',
    subdomains: 'abcd',
    maxZoom: 19
}).addTo(map);

// Form submission logic
const form = document.getElementById('issueForm');

form.addEventListener('submit', async function (e) {
    e.preventDefault();

    const formData = {
        rumor: document.getElementById('rumor').value,
        type: document.getElementById('type').value,
        location: document.getElementById('location').value,
        datetime: document.getElementById('datetime').value,
        email: document.getElementById('email').value,
    };

    try {
        const response = await fetch('https://script.google.com/macros/s/AKfycbyk0jO4jrmByUhxDFb1fcx_DzV6cbLu9puhboIi6cgm_6whx1fzFHceOork5XfyL6BBqA/exec', {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            alert('Report submitted successfully!');
        } else {
            alert('Failed to submit the report.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred while submitting the report.');
    }
});

fetch('https://script.google.com/macros/s/AKfycbyk0jO4jrmByUhxDFb1fcx_DzV6cbLu9puhboIi6cgm_6whx1fzFHceOork5XfyL6BBqA/exec', {
    method: 'POST',
    body: JSON.stringify({
        rumor: 'Test Rumor',
        type: 'Political',
        location: 'Test Location',
        datetime: '2025-04-15T12:00',
        email: 'test@example.com'
    }),
    headers: { 'Content-Type': 'application/json' },
})
.then(response => response.text())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));