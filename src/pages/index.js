import dynamic from "next/dynamic";
import Tracker from "@/components/Tracker";

const Map = dynamic(() => import('../components/Map'), { ssr:false })
const Home = () => {
	return (
		<main>
			<Tracker />
			<Map />
		</main>
	)
}

export default Home