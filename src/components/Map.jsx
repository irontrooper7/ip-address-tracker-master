import { MapContainer, Marker, Popup, TileLayer, ZoomControl } from 'react-leaflet'
import { Icon } from 'leaflet';
import { useCoordinates } from '../../context/CoordinatesContext';

const customIcon = new Icon({
	iconUrl: "/assets/icon-location.svg",
	iconSize: [46, 56]
});

export default function Map() {
	const {coordinates} = useCoordinates();
	const data = coordinates.length > 0 ? [coordinates[0].location.lat, coordinates[0].location.lng] : [37.40599, -122.078514]
	return (
		<section className="map">
			<MapContainer center={data} zoom={30} scrollWheelZoom={false} zoomControl={false}>
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
				<Marker position={data} icon={customIcon} >
					<Popup>{coordinates.length > 0 ? coordinates[0].location.city : 'A pretty CSS3 popup.'}</Popup>
				</Marker>
				<ZoomControl position='bottomleft' />
			</MapContainer>
		</section>
	)
}