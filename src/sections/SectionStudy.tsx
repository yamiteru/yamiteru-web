import type { Component } from "solid-js";
import { Section } from "~/components/Section/Section";
import { Study } from "~/components/Study/Study";

export const SectionStudy: Component = () => {
	return (
		<Section title={"Study"} index={4}>
			<Study
				from="2020"
				to="2022"
				title="M.Sc. in Software Engineering"
				school="University of West Bohemia"
			>
				A Master's program with a stronger emphasis on system design, software
				architecture, engineering practices, and evaluating technical decisions
				beyond implementation. It pushed me to think less in terms of isolated
				assignments and more in terms of maintainability, correctness,
				communication, and architectural consequences.
				<br />
				<br />
				Master's thesis: <i>A CRDT-Inspired JSON Synchronization Model for
				Local-First Web Applications</i> — a distributed JSON structure for
				offline-capable clients, supporting deterministic merges, causal
				metadata, out-of-order patch reconciliation, and practical
				browser/backend integration. The same idea later shipped to production
				at Spectoda as an atomic timestamped JSON-patching layer.
				<br />
				<br />
				The program deepened my understanding of how complex software systems
				are designed, evolved, tested, and operated. It overlapped with
				professional work, which made it more practical: I could compare
				academic models with real projects, see where formal methods help, and
				where they become too heavy under deadlines, legacy code, and changing
				requirements.
				<br />
				<br />
				This degree consolidated my identity as a software engineer rather
				than only a developer: define the real constraint, make tradeoffs
				explicit, prefer simple solutions, communicate decisions clearly.
			</Study>

			<Study
				from="2017"
				to="2020"
				title="B.Sc. in Software Engineering"
				school="University of West Bohemia"
			>
				A Bachelor's degree focused on fundamentals that still shape how I
				build software: algorithms, data structures, databases, operating
				systems, computer architecture, and practical application development.
				It gave me a stronger mental model of what happens below the framework
				layer.
				<br />
				<br />
				Bachelor's thesis: <i>Design and Implementation of a Signal-Based
				Reactive Web Framework</i> — a minimal JavaScript framework with
				fine-grained dependency tracking, derived computations, effects, and
				targeted DOM updates, benchmarked against virtual-DOM rendering
				patterns.
				<br />
				<br />
				The most valuable part was learning to reason about tradeoffs: how
				data structures affect runtime behavior, how database design affects
				reliability, and how architectural decisions compound. Lower-level
				subjects gave me a better understanding of execution speed, resource
				usage, benchmarking, and why small implementation details matter.
				<br />
				<br />
				This degree moved me from simply building websites toward thinking
				like an engineer — designing systems deliberately, validating
				assumptions, measuring performance, and choosing simpler solutions
				when they serve the product.
			</Study>

			<Study
				from="2013"
				to="2017"
				title="Multimedia / Applied Art and Design"
				school="SOŠ obchodu, užitého umění a designu"
			>
				A four-year multimedia and applied design program that gave me an
				early, practical foundation in visual communication, photography, web
				design, and client-facing creative work. The most valuable part was
				the habit it built: learning by making, publishing, receiving
				feedback, and improving the next version.
				<br />
				<br />
				Graduation project: <i>Modular Web Design System for Visual Website
				Composition</i> — a prototype no-code website builder that let users
				assemble responsive pages from reusable drag-and-drop components
				while preserving typography, spacing, and layout consistency.
				<br />
				<br />
				From my second year, I started taking on small client projects
				alongside school. That forced me to connect design theory with real
				constraints: unclear briefs, deadlines, revisions, handoff quality,
				and the need to explain design decisions in plain language.
				<br />
				<br />
				This diploma sits at the intersection of creative and technical
				practice. It still shapes the way I approach software today: make the
				product clear, keep the interface purposeful, respect the user's
				attention, and care about the details that make something feel
				polished.
			</Study>
		</Section>
	);
};
