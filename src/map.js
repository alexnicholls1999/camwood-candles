const mapState = {
    location: {
        lat: 50.930165394501785, 
        lng: -0.3990112554335527
    },
    controls: {
        zoom: 13,
        layer: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    },
    popUp: "<p>Camwood Candles</p>"
}

function initMap() {
    
    const { location, controls, popUp } = mapState;

    const map = L.map('map').setView([location.lat, location.lng], controls.zoom);
    const marker = L.marker([location.lat, location.lng]).addTo(map);

    L.tileLayer(controls.layer, {
        attribution: controls.attribution,
        maxZoom: 18,
    }).addTo(map);

    marker.bindPopup(popUp).openPopup()
} 

initMap()