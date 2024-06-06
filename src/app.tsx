import "./app.css";

import { MetaProvider, Title } from "@solidjs/meta";
import { Page } from "./components/Page";

export default function App() {
	return (
		<MetaProvider>
			<Title>Yamiteru</Title>
			<svg style="width: 0; height: 0;">
				<filter id="paper">
					<feTurbulence
						type="fractalNoise"
						baseFrequency="0.04"
						result="noise"
						numOctaves="5"
					/>

					<feDiffuseLighting in="noise" lighting-color="#fff" surfaceScale="2">
						<feDistantLight azimuth="45" elevation="60" />
					</feDiffuseLighting>
				</filter>

				<filter id="noise">
					<feTurbulence
						type="fractalNoise"
						baseFrequency="0.65"
						numOctaves="3"
						stitchTiles="stitch"
					/>
				</filter>
			</svg>
			<Page />
		</MetaProvider>
	);
}
