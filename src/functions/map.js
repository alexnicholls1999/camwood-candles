export function initMap()  {
    const mapState = {
        mapRef: 'map',
        location: {
            lat: 50.930165394501785,
            lng: -0.3990112554335527
        },
        mapControls: {
            zoom: 13,
            layer: 'https://api.mapbox.com/styles/v1/alexnicholls1999/ckym1h13kngf614ruhaiqos1e/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiYWxleG5pY2hvbGxzMTk5OSIsImEiOiJjazg5NXEyc2UwMzRxM25wa3A0cWJpc3llIn0.Xjr0Tkt6MXcyqIwGUdsDIw',
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'
        },
        popup: {
            title: "Camwood Candles"
        }
    }
    
    const { mapRef, location, mapControls, popup } = mapState;

    const MarkerIcon = L.Icon.extend({
        options: {
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
            shadowSize: [41, 41]
        }
    })

    let markerIcon = new MarkerIcon({iconUrl: "/src/assets/icons/marker.svg"});

    L.icon = (options) => new L.Icon(options);
    
    const map = L.map(mapRef, {
        fullscreenControl: {
            psuedoFullscreen: false
        }
    }).setView([location.lat, location.lng], mapControls.zoom);

    const setMap = () => {
        L.tileLayer(mapControls.layer, {
            attribution: mapControls.attribution,
            maxZoom: 18,
            tileSize: 512,
            zoom: mapControls.zoom,
            zoomOffset: -1,
        }).addTo(map);
    }

    const setMarker = () => {
        const marker = L.marker([location.lat, location.lng], {icon: markerIcon}).addTo(map)

        marker.bindPopup(popup.title).openPopup()
    }

    setMap()
    setMarker()
        
}  