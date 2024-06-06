import type { Component } from "solid-js";
import { Card } from "../components/Card";
import { Display } from "../components/Display";
import { Image } from "../components/Image";
import { Layout } from "../components/Layout";
import { Section } from "../components/Section";
import { Switcher } from "../components/Switcher";
import { Text } from "../components/Text";
import { about, section, setAbout } from "../stores/navigation";
import { useKeypress } from "../utils/useKeypress";

export const SectionAbout: Component = () => {
	const index = 0;
	const items = ["Serious", "Happy", "Funny"];
	const images = ["serious", "happy", "funny"];

	useKeypress((key) => {
		if (section() === index) {
			const itemIndex = items.findIndex((item) => item[0] === key.slice(3));

			if (itemIndex >= 0) {
				setAbout(itemIndex as any);
			}
		}
	});

	return (
		<Section title="About" index={index}>
			<Card>
				<Display>
					Driven and curious,
					<br />
					Discussing ideas with passion,
					<br />
					Tea, incense, gentle light.
				</Display>
			</Card>

			<Card>
				<Layout>
					<div>
						<Switcher
							index={about}
							items={items}
							onClick={(index) => setAbout(index as any)}
						/>

						<Image src={images[about()]} alt={items[about()]} />
					</div>

					<Text>
						Others often see me as calm and deeply thoughtful, living in a world
						of my own.
						<br />
						<br />
						Philosophy, especially Eastern wisdom, and psychology inspire me the
						most. I believe in the innate goodness of every person. Karma or
						not, I do good for its own sake, embracing the simplicity.
						<br />
						<br />
						Races, religions, countries, political views—all artificial
						constructs. What truly matters is our shared humanity and the quest
						for a harmonious society that spans galaxies and universes.
						<br />
						<br />
						Though contemplative, I sometimes wish to quiet my mind. Bouldering,
						biking, hiking, camping, or playing an instrument bring me that
						Zen-like stillness.
						<br />
						<br />A life goal of mine is to pass on my knowledge and skills so
						others can live easier and become wiser. I love simplicity;
						unnecessary complexity is like a cluttered garden. I strive to avoid
						it, embracing minimalism.
						<br />
						<br />
						But remember, all descriptions are fleeting; we are ever-changing.
						So, forget what you just read—it's not really me!
					</Text>
				</Layout>
			</Card>
		</Section>
	);
};
