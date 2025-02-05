import Card from "./Card";
import TrackerForm from "./TrackerForm";

export default function Tracker() {
	return (
		<div className="tracker">
			<div className="container">
				<h1>IP Address Tracker</h1>
				<TrackerForm />
				<Card />
			</div>
		</div>
	)
}