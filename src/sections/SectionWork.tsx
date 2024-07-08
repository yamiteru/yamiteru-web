import type { Component } from "solid-js";
import { createMemo, createSignal } from "solid-js";
import { Dynamic } from "solid-js/web";
import { Library } from "~/components/Library/Library";
import { Section } from "~/components/Section/Section";
import { Switcher } from "~/components/Switcher/Switcher";
import { Timeline } from "~/components/Timeline/Timeline";
import { Work } from "~/components/Work/Work";

const ExperienceScreen: Component = () => {
	const items = [
		{
			from: 13,
			to: 15,
			company: "Freelancer",
			titles: ["Junior Web Developer", "Junior Web Designer"],
			text: `During this period, I developed numerous simple presentational websites as well as more interactive ones, such as booking systems and real estate websites.

I primarily used vanilla ES5 JavaScript and PHP 5.4, along with MySQL or MariaDB on bare metal servers.

I learned valuable lessons about human nature, business, marketing, and more.

Gradually, I transitioned from graphic design as my main professional focus to pursuing web development full-time.`,
		},
		{
			from: 15,
			to: 18,
			company: "Agionet",
			titles: ["Medior Web Developer", "Medior Web Designer"],
			text: `Initially, I primarily used Joomla and WordPress to develop various presentational websites and simple eCommerce sites.

As the company transitioned to more modern technologies like React, I began working on more complex web applications.

During this period, I had the opportunity to explore a wide range of languages, systems, frameworks, libraries, and build systems.

I became the team's go-to expert on new technologies and led the modernization efforts for the entire team.

This experience helped shape and solidify my software engineering preferences and interests.

Additionally, I gained significant insights into business operations, the inner workings of large companies, and the bureaucracy involved.`,
		},
		{
			from: 18,
			to: 19,
			company: "Secret, sorry",
			titles: ["Senior Software Engineer", "Medior Web Designer"],
			text: `I worked on a cutting-edge product, a factual and AI-powered search engine designed to help users make informed decisions and purchases amidst widespread misinformation.

Before large language models (LLMs) became prevalent, I was tasked with creating a custom database, algorithms, and data structures based entirely on my own designs for the AI.

I also developed highly complex admin interfaces, such as a multidimensional explorer of the source data fueling the AI algorithm, and customer-facing prototypes, all of which I designed myself.

The development process was extremely fast-paced. Each day began with a two-hour brainstorming session and whiteboard sketches, followed by prototype development, culminating in a finished prototype by the end of the day for the next morning's brainstorming.

Through this experience, I gained extensive knowledge about the inner workings of databases (primarily graph databases), Big Data, optimization, and orchestration at scale. I continually iterated and redefined the system based on changing specifications.

This fast-paced environment taught me more in a short period than all my previous years of experience combined.`,
		},
		{
			from: 19,
			to: 21,
			company: "Likely",
			titles: ["Senior Software Engineer", "Senior Web Designer"],
			text: `Together with a good friend of mine, I co-founded a design studio, blending my expertise in graphic design with his knowledge of interior and product design.

We unofficially secured first place in the “Young Design” competition, which addresses significant social and environmental challenges, but our victory went unrecognized because we forgot to put our names on our product submission.

Over the years, I've experimented extensively with various technologies and occasionally built websites for clients. Focusing primarily on backend development for the past two years, I've explored numerous frameworks, styling techniques, and state management libraries.

My design skills have led me to create and develop various visual challenges, significantly enhancing my understanding of browser capabilities and limitations.

Those days were chaotic, bringing both stress and fun, but they also gave me a substantial confidence boost in my craft.`,
		},
		{
			from: 21,
			to: 24,
			company: "Rascasone",
			titles: ["Tech Lead", "Software Architect", "Senior Software Engineer"],
			text: `As a software engineer, I've worked on both frontend and backend development across a range of projects, from small-scale to large, utilizing diverse technologies.

As a software architect, I've designed architectures for several medium to large projects, each running on different infrastructures.

In my role as a tech lead, I've managed multiple teams, mentored developers, established company-wide guidelines and technology standards, and conducted thousands of code reviews.

I am particularly proud of a major project which I've designed and where I developed most of the core features and later led the team as the tech lead. This project is set to launch in a few months and is anticipated to become the top product in its category.

During my time at this company, I've significantly enhanced my teamwork skills, working effectively with colleagues who have varying opinions, preferences, interests and skill sets.

I've also learned to take on more responsibility and to plan proactively for the future rather than making reactionary decisions.`,
		},
	];

	const [active, setActive] = createSignal(items.length - 1);
	const item = createMemo(() => items[active()]);

	return (
		<>
			<Timeline items={items} active={active} setActive={setActive} />

			<Work {...item()} />
		</>
	);
};

const LibrariesScreen: Component = () => {
	return (
		<>
			<Library org="the-minimal" title="validator">
				Validator is a sleek, efficient data validation library you can learn in
				15 minutes. It focuses on minimal CPU/memory use and is easily
				extendable.
				<br />
				<br />
				Unapologetically opinionated, it sticks to pure data validation,
				avoiding data transformation and async validations. No eval/compilation,
				no unnecessary complexity.
				<br />
				<br />
				Validator's core is simple, type-safe functions called Assertions.
				They're composable and tree-shakeable, keeping it lightweight and fast.
				<br />
				<br />
				With 40 Assertions in just 835 bytes, Validator offers blazing speed and
				minimal memory use, outpacing competitors like Zod. It's honed through
				fast prototyping and iteration, making it a precise, efficient tool free
				from needless features.
			</Library>

			<Library org="the-minimal" title="protocol">
				Protocol is a minimal, modular binary schema for TypeScript, perfect for
				efficient data encoding. At under 1.1 KB, it keeps runtime overhead low
				while providing static type inference and flexible data validation.
				<br />
				<br />
				Seamlessly integrating with tools like Validator, Protocol lets you
				create schemas for encoding data, such as emails and passwords, with
				specific criteria. Set up a state with Uint8Array and DataView, and
				encode your data into a compact binary form.
				<br />
				<br />
				Protocol's simplicity and efficiency make it ideal for developers
				seeking a lightweight, type-safe solution for binary data encoding in
				TypeScript.
			</Library>

			<Library org="the-minimal" title="id">
				ID is a compact and secure tool for generating unique identifiers, at
				around 700 bytes, ensuring minimal runtime overhead with
				cryptographically secure randomization.
				<br />
				<br />
				It uses multiple entropy sources: SHA-512 hashed fingerprint, random
				start counter, 64-byte millisecond timestamp, 52-byte random salt, and
				optional external data hashed with SHA-512.
				<br />
				<br />
				IDs are generated at variable lengths by combining entropy sources into
				a 128-byte array, hashing with SHA-512, converting to a Base36 string,
				and slicing to the desired length, defaulting to 24 characters.
				<br />
				<br />
				This method ensures collision resistance with a 5.58e18 chance until a
				50% collision probability, producing uniform, URL-friendly output with
				minimal character variance.
			</Library>
		</>
	);
};

const SCREENS = [ExperienceScreen, LibrariesScreen];

export const SectionWork: Component = () => {
	const [active, setActive] = createSignal(0);

	return (
		<Section title={"Work"} index={1}>
			<Switcher
				items={["Experience", "Libraries"]}
				active={active}
				setActive={setActive}
			/>

			<Dynamic component={SCREENS[active()]} />
		</Section>
	);
};
