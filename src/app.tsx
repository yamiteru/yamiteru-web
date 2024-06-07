import "./app.css";

import { Link, Meta, MetaProvider, Title } from "@solidjs/meta";
import { Background } from "./components/Background";
import { Page } from "./components/Page";

export default function App() {
	return (
		<MetaProvider>
			<Title>Yamiteru</Title>
			<Meta
				name="description"
				content="I'm a software engineer with over 10 years of experience and a knack for design, who enjoys bouldering—even if it means repeatedly falling off the walls!"
			/>
			<Meta property="og:title" content="Yamiteru" />
			<Meta property="og:type" content="website" />
			<Meta property="og:image" content="/images/og-image.png" />
			<Meta property="og:url" content="https://yamiteru.cz" />
			<Meta
				property="og:description"
				content="I'm a software engineer with over 10 years of experience and a knack for design, who enjoys bouldering—even if it means repeatedly falling off the walls!"
			/>
			<Link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
			<Link
				rel="apple-touch-icon"
				sizes="180x180"
				type="image/png"
				href="/apple-touch-icon.png"
			/>
			<Link rel="icon" sizes="32x32" type="image/png" href="/32x32.png" />
			<Link rel="icon" sizes="16x16" type="image/png" href="/16x16.png" />

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

			<Background />
			<Page />
		</MetaProvider>
	);
}
