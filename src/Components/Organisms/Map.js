import L from 'leaflet';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import IconMarker from './../../assets/icons/marker.svg';

function Map() {
  const position = [50.930165394501785, -0.3990112554335527];

  const icon = L.icon({
    iconUrl: IconMarker
  });

  return (
    <MapContainer id='map' center={position} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://api.mapbox.com/styles/v1/alexnicholls1999/ckym1h13kngf614ruhaiqos1e/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiYWxleG5pY2hvbGxzMTk5OSIsImEiOiJjazg5NXEyc2UwMzRxM25wa3A0cWJpc3llIn0.Xjr0Tkt6MXcyqIwGUdsDIw'
      />
      <Marker position={position} icon={icon}>
        <Popup>Camwood Candles</Popup>
      </Marker>
    </MapContainer>
  );
}

export default Map;
