const ashington = {
    lat: "50.930165394501785", 
    lng: "-0.3990112554335527"
}

const zoom = 13
const layer = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'

var map = L.map('map', {
    fullscreenControl: {
        psuedoFullscreen: false
    }
}).setView([ashington.lat, ashington.lng], zoom);

L.tileLayer(layer, {
    attribution: attribution
}).addTo(map);

L.marker([ashington.lat, ashington.lng]).addTo(map)
    .bindPop('Camwood Candles')
    .openPopup()