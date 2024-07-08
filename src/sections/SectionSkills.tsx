import type { Component } from "solid-js";
import { Section } from "~/components/Section/Section";
import { Skills } from "~/components/Skills/Skills";

export const SectionSkills: Component = () => {
	return (
		<Section title={"Skills"} index={2}>
			<Skills
				title="Technology"
				start={13}
				end={24}
				data={[
					{ title: "JavaScript", start: 13, end: 24 },
					{ title: "TypeScript", start: 15, end: 24 },
					{ title: "HTML", start: 13, end: 24 },
					{ title: "CSS", start: 13, end: 24 },
					{ title: "React", start: 17, end: 24 },
					{ title: "Next", start: 18, end: 24 },
					{ title: "Svelte", start: 18, end: 24 },
					{ title: "SvelteKit", start: 22, end: 24 },
					{ title: "PHP", start: 13, end: 15 },
					{ title: "Python", start: 22, end: 24 },
					{ title: "Rust", start: 22, end: 23 },
					{ title: "Go", start: 23, end: 24 },
					{ title: "Flutter", start: 24, end: 24 },
					{ title: "Solid", start: 20, end: 24 },
					{ title: "SolidStart", start: 24, end: 24 },
					{ title: "Vue", start: 19, end: 23 },
					{ title: "Nuxt", start: 20, end: 23 },
					{ title: "Angular", start: 17, end: 18 },
					{ title: "Qwik", start: 23, end: 24 },
					{ title: "SQLite", start: 16, end: 24 },
					{ title: "MySQL", start: 14, end: 17 },
					{ title: "Cassandra", start: 18, end: 20 },
					{ title: "Neo4j", start: 18, end: 20 },
					{ title: "Tailwind", start: 21, end: 24 },
					{ title: "LESS", start: 13, end: 15 },
					{ title: "SASS", start: 14, end: 16 },
					{ title: "PostCSS", start: 17, end: 24 },
					{ title: "AWS", start: 18, end: 24 },
					{ title: "DigitalOcean", start: 23, end: 24 },
					{ title: "Cloudflare", start: 21, end: 24 },
				]}
			/>
		</Section>
	);
};
