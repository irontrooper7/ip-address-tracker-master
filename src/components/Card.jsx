export default function Card() {
	return (
		<div className="card">
			<div className="card-content">
				<div className="columns">
					<div className="column">
						<h3>ip adress</h3>
						<h2>192.212.174.101</h2>
					</div>
					<div className="column">
						<h3>location</h3>
						<h2>Brooklyn, NY 10001</h2>
					</div>
					<div className="column">
						<h3>timezone</h3>
						<h2>UTC -05:00</h2>
					</div>
					<div className="column">
						<h3>isp</h3>
						<h2>SpaceX Starlink</h2>
					</div>
				</div>
			</div>
		</div>
	)
}