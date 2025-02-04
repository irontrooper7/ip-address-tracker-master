import Layout from "@/components/Layout";
import Tracker from "@/components/Tracker";

export default function Home() {
	return (
		<Layout>
			<section className="hero">
				<div className="hero-body">
					<Tracker />
				</div>
			</section>
		</Layout>
	);
}