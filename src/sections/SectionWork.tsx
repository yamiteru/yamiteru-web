import type { Component } from "solid-js";
import { createMemo, createSignal } from "solid-js";
import { Section } from "~/components/Section/Section";
import { Timeline } from "~/components/Timeline/Timeline";
import { Work } from "~/components/Work/Work";

export const SectionWork: Component = () => {
	const items = [
		{
			from: { year: 13, month: 1 },
			to: { year: 15, month: 9 },
			company: "Freelance",
			titles: ["UX/UI Designer", "Frontend Developer"],
			text: `Independent UX/UI and frontend engagements for Czech SMBs in parallel with school. Took briefs from vague idea to shipped product, owning research, design, responsive frontend, and direct client communication.

Strongest work came when design and programming met. For Econea (Czechia's leading eco-friendly e-shop), I rebuilt the purchase flow across ~17 components, simplified the buying path, and introduced BEM in Sass to stabilize a fragile CSS codebase. The client reported a ~15% conversion lift after the changes.

For HiFi Hejhal, I delivered a one-man end-to-end project — visual design, responsive frontend, PHP templating, deployment. The site is still running years later.

This period taught me how to communicate professionally with clients, turn business problems into usable interfaces, and ship complete products without a team or process around me.`,
		},
		{
			from: { year: 15, month: 10 },
			to: { year: 18, month: 11 },
			company: "Agionet",
			titles: ["UI/UX Designer", "Frontend Developer"],
			text: `Hybrid UI/UX designer and frontend developer who grew into a client-facing owner for performance-minded web delivery. Shipped ~17 websites and apps for clients including the University of West Bohemia, České dráhy, Škoda, and DJKT, led ~11 projects end-to-end, and created 9 brand identities.

The role sat at the intersection of product discovery, design, frontend engineering, and delivery. I ran client conversations, extracted requirements, translated them into Adobe XD designs and implementation plans, then coordinated developers, designers, marketers, and copywriters through launch.

Technically, I started in PHP/Joomla and SASS but helped pull the studio toward React, Vue, Stripe integrations, and reusable components. I also introduced 5 internal hackathons that became the studio's tooling/SaaS sandbox.

The through-line of my work was performance. I fought for every byte and pushed Lighthouse scores toward 100 across the board, shifting the studio's mindset from "desktop-perfect page" to "fast, maintainable, respectful of the user's device".`,
		},
		{
			from: { year: 18, month: 12 },
			to: { year: 20, month: 12 },
			company: "Early-Stage AI Startup (Stealth)",
			titles: ["Founding Engineer", "Researcher"],
			text: `Founding engineer (3-person team) on a pre-LLM factual-search platform, trying to turn the internet from noisy documents into a structured, source-backed information layer. The idea was closer to today's LLM search but without the cost or opacity of a monolithic model.

I owned most of the technical path. The stack began as TypeScript on JanusGraph, ScyllaDB, and Redis, but the data shape did not fit existing graph databases. That mismatch pushed me into designing a custom database from first principles.

Conceptually, the system separated "brain" (a continuously evolving semantic memory) and "compute" (a query layer reasoning over it in real time). The target was a dynamically growing ontological graph where words, facts, opinions, sources, and meanings formed typed, weighted relationships traversable from any direction. Target scale was hundreds of TB — the kind of substrate frontier AI teams are still trying to build today.

I also built the research UI: a depth-controllable explorer projecting multidimensional meaning space into something curators could understand, inspect, and rewire directly instead of through static taxonomies.

This remains the hardest technical problem I've ever worked on.`,
		},
		{
			from: { year: 21, month: 1 },
			to: { year: 25, month: 2 },
			company: "Rascasone",
			titles: ["Tech Lead", "Software Architect", "Senior Software Engineer"],
			text: `Joined as senior React/Vue developer and left as Tech Lead — most senior engineer in a 20-person agency. Operated across up to 3 concurrent client projects spanning 12+ developers, combining tech-lead and PM responsibilities while still writing code on the hardest implementation work.

Acted as principal architect on H2 Organizer, a Cloudflare-native HR platform serving 100,000+ registered users (10,000+ MAU at seasonal peak): SvelteKit, Workers, Pages, D1 (adopted in open alpha), R2, tRPC, Zod, Drizzle. Team scaled from 8 to 14 developers under that architecture.

Led mid-build database and stack migrations under live delivery, including CockroachDB + Prisma → Cloudflare D1 + Drizzle, and a Next.js + Strapi rebuild of a 10,000+-user real-estate aggregator after the client lost source-code access.

Built a custom video-based liveness check on top of Amazon Rekognition for a rental platform with ~5,000 daily active users, enforcing one-real-person-one-verified-account.

Drove company-wide engineering tradecraft: typed end-to-end models across frontend, backend, validation, and DB; automated testing across critical flows; mentored juniors through review-driven delivery. Beyond client work: kicked off internal hackathons, the engineering education program, and OmniEye — an internal AI desktop tool using screen context to assist team workflows.`,
		},
		{
			from: { year: 25, month: 3 },
			to: { year: 26, month: 4 },
			company: "Spectoda",
			titles: ["Lead Software Engineer", "Tech Lead"],
			text: `Hired to fix a smart-lighting codebase the team was afraid to ship from, and the process around it. Mesh-controlled lights running in real factories: 100+ installations, ~500 users, largest install 200+ controllers.

Lead engineer in a 3-developer team. Made the architecture calls, shipped 2,000+ commits, reviewed 200+ PRs, and replaced firefighting with a workflow the team could trust.

Killed the flaky VPS: Dockerized server + bridge, per-PR Neon DB branches, Bun CI, Pulumi-managed cloud infra, and VictoriaMetrics observability feeding a corruption-tolerant analytics pipeline. Replaced branch-per-customer chaos with a single prod/dev workflow; fragmentation bugs went to ~zero and overall bug volume dropped 60–70%.

Extracted the ORM, carved the server out of Studio, merged in tRPC, and migrated tooling toward Bun (Jest/Vitest → bun:test, ESLint/Prettier → Biome, Jotai → idiomatic Zustand).

Built two foundational libraries powering production reliability: a Go-style return-error contract for explicit failure boundaries, and an atomic timestamped JSON-patching layer that reconciles offline snapshot edits in any order — applying my master's CRDT thesis in production.

Replaced a third-party identity provider with first-party auth across two apps over 4 months. Added offline-first plumbing with Workbox, IndexedDB, gzip-after-connect sync, and WASM-bundled network data. Co-set the company's two-plus-year technical roadmap with the CTO, seeding ~1 year of engineering work past my exit.`,
		},
	];

	const [active, setActive] = createSignal(items.length - 1);
	const item = createMemo(() => items[active()]);

	return (
		<Section title={"Work"} index={1}>
			<Timeline items={items} active={active} setActive={setActive} />

			<Work {...item()} />
		</Section>
	);
};
