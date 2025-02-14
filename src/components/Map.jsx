import { useEffect } from 'react';
import { useCoordinates } from '../../context/CoordinatesContext';
import { MapContainer, Marker, Popup, TileLayer, ZoomControl, useMap } from 'react-leaflet'
import { Icon } from 'leaflet';


const customIcon = new Icon({
	iconUrl: "/assets/icon-location.svg",
	iconSize: [46, 56]
});

function MapUpdater({ center }) {
	const map = useMap();
	useEffect(() => {
		if (center) {
			map.setView(center, map.getZoom());
		}
	}, [center, map]);
	return null;
}

export default function Map() {
	const { coordinates } = useCoordinates();
	const defaultCenter = [37.40599, -122.078514]; // Coordenadas por defecto
	const data = coordinates.length > 0
		? [coordinates[0].location.lat, coordinates[0].location.lng]
		: defaultCenter;
	return (
		<section className="map">
			<MapContainer center={data} zoom={10} scrollWheelZoom={false} zoomControl={false}>
				<MapUpdater center={data} /> {/* Agregamos el actualizador de mapa */}
				<TileLayer
					attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
				<Marker position={data} icon={customIcon}>
					<Popup>
						{coordinates.length > 0 ? coordinates[0].location.city : 'Ubicación predeterminada'}
					</Popup>
				</Marker>
				<ZoomControl position="bottomleft" />
			</MapContainer>
		</section>
	)
}