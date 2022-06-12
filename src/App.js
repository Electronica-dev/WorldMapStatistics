import './App.css';
import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'
import { CircleMarker } from 'react-leaflet/CircleMarker';
import { Popup } from 'react-leaflet/Popup';
import Leaflet from 'leaflet';
import Legend from './components/Legend';
import computeLocationObject from './tasks/computeLocationObject';

function App() {
  const corner1 = Leaflet.latLng(-90, -200)
  const corner2 = Leaflet.latLng(90, 200)
  const bounds = Leaflet.latLngBounds(corner1, corner2)

  const locations = computeLocationObject();

  return (
    <div>
      <MapContainer
        center={[0, 0]}
        zoom={2}
        scrollWheelZoom={true}
        maxBounds={bounds}
        maxBoundsViscosity={1.0}
        minZoom={2}
        doubleClickZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {locations.map((location, i) => {
          return (
            <CircleMarker
              key={i}
              center={[location.latitude, location.longitude]}
              radius={Math.pow(Math.log10(location.data), 2.5)}
              weight={0.7}
              fillOpacity={0.4}
              color={location.color}
            >
              <Popup>
                {location.country}: ${location.data} used
              </Popup>
            </CircleMarker>
          )
        })}
      </MapContainer>
      <Legend />
    </div>
  );
}

export default App;
