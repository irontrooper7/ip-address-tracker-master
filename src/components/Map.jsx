import { MapContainer, Marker, Popup, TileLayer, ZoomControl } from 'react-leaflet'
import { Icon } from 'leaflet';

const position = [19.432767446537678, -99.13292240448699]

const customIcon = new Icon({
	iconUrl: "/assets/icon-location.svg",
	iconSize: [46, 56]
});

export default function Map() {
	return (
		<section className="map">
			<MapContainer center={position} zoom={30} scrollWheelZoom={false} zoomControl={false}>
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
				<Marker position={position} icon={customIcon} >
					<Popup>
						A pretty CSS3 popup. <br /> Easily customizable.
					</Popup>
				</Marker>
				<ZoomControl position='bottomleft' />
			</MapContainer>
		</section>
	)
}