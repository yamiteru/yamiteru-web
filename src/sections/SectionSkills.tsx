import type { Component } from "solid-js";
import { Section } from "../components/Section";
import { Card } from "../components/Card";
import { Display } from "../components/Display";
import { Layout } from "../components/Layout";
import { Text } from "../components/Text";
import { Switcher } from "../components/Switcher";
import { section, setSkills, skills } from "../stores/navigation";
import { useKeypress } from "../utils/useKeypress";
import { Dynamic } from "solid-js/web";

export const SectionSkills: Component = () => {
	const index = 2;
	const items = ["Advanced", "Intermediate", "Beginner"];
	const components = [SkillsAdvanced, SkillsIntermediate, SkillsBeginner];

	useKeypress((key) => {
		if (section() === index) {
			const itemIndex = items.findIndex((item) => item[0] === key.slice(3));

			if (itemIndex >= 0) {
				setSkills(itemIndex as any);
			}
		}
	});

	return (
		<Section title="Skills" index={index}>
			<Card>
				<Switcher
					items={items}
					index={skills()}
					onClick={(index) => setSkills(index as any)}
				/>
			</Card>

			<Dynamic component={components[skills()]} />
		</Section>
	);
};

const SkillsAdvanced: Component = () => {
	return (
		<>
			<Card>
				<Display>
					TypeScript, JavaScript, PostgreSQL, SQLite, Cassandra, Neo4j,
					JanusGraph, MongoDB, Cloudflare, DigitalOcean, HTML, CSS, Tailwind,
					React/Next, Svelte(Kit), Solid(Start)
				</Display>
			</Card>

			<Card>
				<Layout>
					<Text>
						My language of choice is JavaScript, but for the past five or so
						years, I've primarily used TypeScript. I find TypeScript generally
						safer (when used correctly) and easier to maintain, especially in
						strict mode.
						<br />
						<br />I have a deep understanding of JavaScript, particularly its
						inner workings in the V8 engine, driven by my keen interest in
						performance optimization. This passion naturally requires a thorough
						knowledge of how the engine operates.
						<br />
						<br />
						I'm often considered a TypeScript wizard, as I take great pleasure
						in crafting complex type systems, which sometimes becomes essential
						when developing a TypeScript library.
						<br />
						<br />
						I've extensively used React and NextJS as my main frameworks,
						aligning with industry standards and client preferences. However, in
						recent years, I've gravitated towards Svelte/Kit and Solid/Start,
						appreciating their more elegant approach to reactivity compared to
						the VDOM.
						<br />
						<br />
						In terms of styling, I have experience with all imaginable methods
						for styling HTML, making me highly proficient in CSS. Additionally,
						with the rise of Tailwind CSS, I've become proficient in this
						utility-first framework, adapting to its growing popularity in
						recent years.
					</Text>
					<Text>
						I've worked extensively with various databases to tackle a wide
						range of challenges, and I've even developed two of my own, drawing
						significant inspiration from graph and vector databases.
						<br />
						<br />
						While there's no perfect jack-of-all-trades database, each one has
						unique characteristics that make it suitable for specific problems.
						I've developed a particular fondness for Cassandra, as it compels
						developers to carefully consider the database structure before
						making the first query.
						<br />
						<br />I also appreciate simple key-value databases like Redis, which
						I frequently use for caching in almost every project, though I
						rarely utilize its more advanced features.
						<br />
						<br />
						My passion extends to graph databases as well. I prefer the Gremlin
						syntax found in JanusGraph over the Cypher syntax used in Neo4j,
						although both ultimately achieve similar goals.
						<br />
						<br />
						Multi-model databases like FaunaDB also intrigue me. However, there
						is limited client demand for them, and it is often challenging to
						justify their use over two or three standalone databases that the
						team is already familiar with.
					</Text>
				</Layout>
			</Card>
		</>
	);
};

const SkillsIntermediate: Component = () => {
	return (
		<>
			<Card>
				<Display>
					PHP, Go, Python, MySQL, Redis, AWS, Angular, Qwik(City)
				</Display>
			</Card>

			<Card>
				<Layout>
					<Text>
						I use PHP primarily when working on WordPress websites, which is
						rare, or when dealing with custom PHP codebases. I've also developed
						a few libraries in PHP (8).
						<br />
						<br />
						For most of my personal CLI tools, I prefer Go due to its excellent
						cross-compilation capabilities and robust standard library.
						<br />
						<br />
						Whenever I need to plot data or create graphs, which is quite often
						for visualizing and comparing benchmark results, I turn to Python.
						<br />
						<br />
						Given a week or two to refresh my memory and acquire the necessary
						skills for a specific project, I can become proficient in any of
						these languages.
					</Text>
					<Text>
						As MySQL declines in popularity, often being overshadowed by
						PostgreSQL, I encounter it less frequently in my daily work.
						<br />
						<br />I value simple key-value databases like Redis, which I
						regularly use for caching in nearly every project, though I seldom
						tap into its more advanced features.
						<br />
						<br />
						While I have extensive experience with various AWS services over the
						years, I've not yet had the opportunity to design large-scale
						infrastructures with them, so there are likely advanced aspects of
						AWS I still need to explore.
						<br />
						<br />
						I've successfully used Angular and Qwik(City) a few times, but I
						lack extensive experience with them. However, they are not
						drastically different from other frameworks I've worked with.
					</Text>
				</Layout>
			</Card>
		</>
	);
};

const SkillsBeginner: Component = () => {
	return (
		<>
			<Card>
				<Display>Rust, C/C++, Zig, OCaml, Flutter</Display>
			</Card>

			<Card>
				<Layout>
					<Text>
						I've been learning Rust for a while and can write decent synchronous
						Rust. However, I find async Rust challenging and haven't had a
						project that required it, so I haven't pushed past this plateau.
						<br />
						<br />I genuinely enjoy working with Rust and am eager to find a
						project that allows me to overcome these challenges and achieve
						proficiency.
						<br />
						<br />
						Currently, my main frustration lies with the function annotations
						for async or lifetimes. These can cause changes in one function to
						ripple through the codebase, necessitating extensive refactoring.
					</Text>
					<Text>
						I've written numerous algorithms in C/C++, but my experience beyond
						algorithms is limited, as I haven't extensively worked with their
						standard libraries or built applications with them.
						<br />
						<br />
						I've experimented with writing simple programs in Zig and OCaml and
						enjoy both languages, though there currently isn't much demand for
						them.
						<br />
						<br />
						Despite the growing demand for Flutter, I haven't been assigned to
						any mobile app projects, as my focus has primarily been on web
						applications. Apart from a few hours spent experimenting with
						Flutter over a weekend, I don't have substantial experience with it.
					</Text>
				</Layout>
			</Card>
		</>
	);
};
