import Layout from "@/components/Layout";
import Map from "@/components/Map";
import Tracker from "@/components/Tracker";

export default function Home() {
	return (
		<Layout>
			<Tracker />
			<Map />
		</Layout>
	);
}