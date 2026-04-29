import type { Component } from "solid-js";
import { Section } from "~/components/Section/Section";
import { Skills } from "~/components/Skills/Skills";

export const SectionSkills: Component = () => {
	return (
		<Section title={"Skills"} index={3}>
			<Skills />
		</Section>
	);
};
