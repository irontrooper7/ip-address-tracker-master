import { useCoordinates } from "../../context/CoordinatesContext"

export default function Card() {
	const { coordinates } = useCoordinates();
	const data = coordinates[0]
	return (
		<div className="card">
			<div className="card-content">
				<div className="columns">
					<div className="column">
						<h3>ip adress</h3>
						{coordinates.length > 0 ? <h2>{data.ip || '-------'}</h2> : <h2>192.212.174.101</h2>}
					</div>
					<div className="column">
						<h3>location</h3>
						{coordinates.length > 0 ? <h2>{`${data.location.city || "-------"}, ${data.location.region || "-------"} ${data.location.postalCode || "-------"}`}</h2>
							:
							<h2>Brooklyn, NY 10001</h2>
						}
					</div>
					<div className="column">
						<h3>timezone</h3>
						{coordinates.length > 0 ? <h2>UTC {data.location.timezone || "-------"}</h2> : <h2>UTC -05:00</h2>}
					</div>
					<div className="column">
						<h3>isp</h3>
						{coordinates.length > 0 ? <h2>{data.isp || "-------"}</h2> : <h2>SpaceX Starlink</h2>}
					</div>
				</div>
			</div>
		</div>
	)
}