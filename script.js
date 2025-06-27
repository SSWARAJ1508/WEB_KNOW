function getLocation() {
    const thumbnail = document.getElementById("map-thumbnail");
    const iframe = document.getElementById("map-frame");
    const resultBox = document.getElementById("geo-result");

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const lat = position.coords.latitude;
                const lon = position.coords.longitude;
                const mapUrl = `https://maps.google.com/maps?q=${lat},${lon}&z=15&output=embed`;

                // Hide thumbnail and show map
                thumbnail.style.display = "none";
                iframe.style.display = "block";
                iframe.src = mapUrl;

                // Show coordinates
                resultBox.innerHTML = `<strong>Latitude:</strong> ${lat.toFixed(4)}<br><strong>Longitude:</strong> ${lon.toFixed(4)}`;
            },
            (error) => {
                resultBox.textContent = "Error fetching location: " + error.message;
            }
        );
    } else {
        resultBox.textContent = "Geolocation is not supported by this browser.";
    }
}
