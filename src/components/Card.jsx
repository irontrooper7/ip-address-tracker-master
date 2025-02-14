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
						{coordinates.length > 0 && (
							<h2>{data.ip || '-------'}</h2>
						)}
					</div>
					<div className="column">
						<h3>location</h3>
						{coordinates.length > 0 && (
							<h2>{`${data.location.city || "-------"}, ${data.location.region || "-------"} ${data.location.postalCode || "-------"}`}</h2>
						)}
					</div>
					<div className="column">
						<h3>timezone</h3>
						{coordinates.length > 0 && (
							<h2>UTC {data.location.timezone || "-------"}</h2>
						)}
					</div>
					<div className="column">
						<h3>isp</h3>
						{coordinates.length > 0 && (
							<h2>{data.isp || "-------"}</h2>
						)}
					</div>
				</div>
			</div>
		</div>
	)
}