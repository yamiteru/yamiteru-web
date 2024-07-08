import type { Component } from "solid-js";
import { Card } from "~/components/Card/Card";
import { Display } from "~/components/Display/Display";
import { Eyes } from "~/components/Eyes/Eyes";
import { Flex } from "~/components/Flex/Flex";
import { Layout } from "~/components/Layout/Layout";
import { PreviewWithChinese } from "~/components/PreviewWithChinese/PreviewWithChinese";
import { Section } from "~/components/Section/Section";
import { Text } from "~/components/Text/Text";

export const SectionAbout: Component = () => (
	<Section title={"About"} index={0}>
		<Card>
			<Layout>
				<Flex direction="column" justify="space-between">
					<Display>
						Driven and curious,
						<br />
						Discussing ideas with passion,
					</Display>

					<Eyes />

					<Display>Tea, incense, gentle light.</Display>
				</Flex>

				<Text>
					Others often see me as calm and deeply thoughtful, living in a world
					of my own.
					<br />
					<br />
					Philosophy, especially Eastern wisdom, and psychology inspire me the
					most. I believe in the innate goodness of every person. Karma or not,
					I do good for its own sake, embracing the simplicity.
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
					But remember, all descriptions are fleeting; we are ever-changing. So,
					forget what you just read—it's not really me!
				</Text>
			</Layout>
		</Card>

		<PreviewWithChinese />
	</Section>
);
