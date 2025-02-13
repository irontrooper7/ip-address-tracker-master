import "@/styles/globals.sass";
import { CoordinatesProvider } from "../../context/CoordinatesContext";

export default function App({ Component, pageProps }) {
  return (
    <CoordinatesProvider>
      <Component {...pageProps} />;
    </CoordinatesProvider>
  )
}
