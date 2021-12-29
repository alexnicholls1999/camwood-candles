export function initMap()  {
    const mapState = {
        mapRef: 'map',
        location: {
            lat: 50.930165394501785,
            lng: -0.3990112554335527
        },
        mapControls: {
            zoom: 13,
            layer: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        },
        popup: {
            title: "Camwood Candles"
        }
    }
    
    const { mapRef, location, mapControls, popup } = mapState;
    
    const map = L.map(mapRef, {
        fullscreenControl: {
            psuedoFullscreen: false
        }
    }).setView([location.lat, location.lng], mapControls.zoom);
    
    const setMap = () => {
        L.tileLayer(mapControls.layer, {
            attribution: mapControls.layer,
            zoom: mapControls.zoom,
            maxZoom: 18
        }).addTo(map)
    }

    const setMarker = () => {
        const marker = L.marker([location.lat, location.lng]).addTo(map)

        marker.bindPopup(popup.title).openPopup()
    }

    setMap()
    setMarker()
        
}  