import type { Component } from "solid-js";
import { createSignal } from "solid-js";
import { Dynamic } from "solid-js/web";
import { Card } from "~/components/Card/Card";
import { Display } from "~/components/Display/Display";
import { Flex } from "~/components/Flex/Flex";
import { Layout } from "~/components/Layout/Layout";
import { Section } from "~/components/Section/Section";
import { Switcher } from "~/components/Switcher/Switcher";
import { Text } from "~/components/Text/Text";

const Project: Component<{
	from: string;
	to: string;
	title: string;
	company?: string;
	children: any;
}> = (props) => (
	<Card>
		<Layout>
			<Flex direction="column">
				<Text>
					{props.from === props.to ? props.from : `${props.from} - ${props.to}`}
				</Text>
				<Display>{props.title}</Display>
				{props.company && <Text>{props.company}</Text>}
			</Flex>

			<Text>{props.children}</Text>
		</Layout>
	</Card>
);

const CommercialScreen: Component = () => {
	return (
		<>
			<Project
				from="2026"
				to="2026"
				title="Macaly"
				company="Senior Full-Stack Engineer"
			>
				AI app-builder platform where rising usage exposed a storage problem:
				the existing Postgres-based layer was consuming terabytes of data,
				becoming expensive, and slowing future features.
				<br />
				<br />
				Joined a 10-developer team and rewrote the storage layer around a
				Git-backed model on Freestyle.sh with durable Cloudflare R2 backups.
				Replaced duplicated project state in Postgres with template
				repositories and cheap forking.
				<br />
				<br />
				Result: an estimated 70–80% storage-cost reduction and a model that
				fits how generated app projects actually behave — file trees, not
				relational records — making templates cheap to clone, branch, and
				recover.
				<br />
				<br />
				Tech: TypeScript, React, Postgres, Git-based storage, Freestyle.sh,
				Cloudflare R2.
			</Project>

			<Project
				from="2022"
				to="2024"
				title="H2 Organizer"
				company="Principal Architect — Rascasone"
			>
				Cloud-based HR platform for large agricultural employers, built to
				move recruitment, work-permit processing, employee records, contract
				management, and operational HR workflows out of spreadsheets and into
				one production system serving 100,000+ registered users (10,000+ MAU
				at seasonal peak).
				<br />
				<br />
				Designed a Cloudflare-native serverless architecture using Workers,
				Pages, D1, R2, SvelteKit, tRPC, Zod, DrizzleORM. Adopted D1 in open
				alpha and led the mid-project migration away from CockroachDB +
				Prisma toward D1 + Drizzle, simplifying the stack and improving
				delivery confidence. Team scaled from 8 to 14 developers under that
				architecture.
				<br />
				<br />
				Established a typed end-to-end model across frontend, backend,
				validation, database access, and API boundaries. Introduced
				automated testing across critical functions, endpoints, UI
				components, and core HR flows.
				<br />
				<br />
				Tech: TypeScript, SvelteKit, Cloudflare Workers, D1, R2, tRPC, Zod,
				DrizzleORM.
			</Project>

			<Project
				from="2021"
				to="2022"
				title="Blocheck"
				company="Lead Architect — Rascasone"
			>
				Property-rental platform digitizing the full rental lifecycle:
				tenant onboarding, identity verification, fraud prevention, property
				workflows, real-time communication, and contract management. Grew
				into a live system serving ~5,000 daily active users.
				<br />
				<br />
				Designed the architecture around Directus, React, custom extensions,
				role-based workflows, and API integrations. Extended Directus with
				custom WebSocket functionality for real-time chat between platform
				participants.
				<br />
				<br />
				Integrated Amazon Rekognition and video-based liveness checks for
				biometric identity verification, enforcing one-real-person-one-verified-account
				and materially cutting duplicate / fraud accounts.
				<br />
				<br />
				Tech: TypeScript, React, Directus, WebSockets, Amazon Rekognition,
				AWS.
			</Project>

			<Project
				from="2021"
				to="2022"
				title="Designated Workspace"
				company="Solo Developer & Designer — Rascasone"
			>
				Ergonomic-assessment web app helping users evaluate and improve
				their work environment, doubling as a lead-generation product
				through interactive questionnaires, photo uploads, and automated
				follow-up.
				<br />
				<br />
				Solo developer and designer — owned requirements, UX, UI,
				architecture, frontend, backend CMS, integrations, deployment, and
				direct client communication. Built the frontend in React and the
				backend/content layer in Strapi, with Customer.io for email
				follow-up. Implemented a multi-step questionnaire with conditional
				content and photo upload.
				<br />
				<br />
				Because I owned both design and implementation, there was no gap
				between prototype and production: pragmatic tradeoffs, no
				overbuilding, complete product on a stack the client could maintain
				after handoff.
				<br />
				<br />
				Tech: React, Strapi, Customer.io.
			</Project>

			<Project
				from="2021"
				to="2022"
				title="Flatzone"
				company="Tech Lead — Rascasone"
			>
				Real-estate aggregation platform modernization for a property-search
				product serving 10,000+ users. The client had lost access to the
				original source code from a previous studio, so the project was a
				recovery effort, migration, and product-continuity challenge at the
				same time.
				<br />
				<br />
				Led the migration to Next.js, React, and Strapi, integrating with
				the client's existing search and filtering APIs instead of
				rebuilding domain logic. Used Strapi as a flexible configuration
				and content layer so non-developers could adjust parts of the
				platform without code changes. Mentored a junior developer through
				implementation, review, and delivery.
				<br />
				<br />
				Tech: TypeScript, React, Next.js, Strapi.
			</Project>

			<Project
				from="2020"
				to="2020"
				title="12345ŠESTÁK"
				company="Lead Developer & Designer — Likely × Studio Petrohrad"
			>
				Web presence for a second-generation carpentry workshop. Studio
				Petrohrad provided the logo and trusted me to turn it into a
				complete web experience — typography, colors, layout, photography
				direction, responsive design, and implementation.
				<br />
				<br />
				Built a bilingual CS/EN site on Directus 9 with a clean content
				schema and proper internationalization, plus a lightweight
				StencilJS frontend chosen for tiny bundle size. Created a custom
				Sharp-based image pipeline generating multiple resolutions in
				JPEG/WebP/AVIF, served by container size and previewed with
				~200-byte LQIP blurs while high-resolution assets loaded.
				<br />
				<br />
				Shipped with Lighthouse 100 across the board at launch. Six years
				later the site is still live, the client is still happy, and
				nobody has needed a rebuild.
				<br />
				<br />
				Tech: StencilJS, Directus 9, Sharp, AVIF/WebP/JPEG, LQIP.
			</Project>

			<Project
				from="2020"
				to="2020"
				title="Reality Bouchal"
				company="Lead Developer & Designer — Likely × Studio Petrohrad"
			>
				Web presence and listing platform for a Plzeň-based real-estate
				agency, delivered with Studio Petrohrad. The brief was deliberately
				not "make a normal real-estate website": young, fresh, different,
				while still giving non-technical staff a reliable way to manage
				listings, agents, and content.
				<br />
				<br />
				Started on Strapi, then made the call mid-project to migrate to
				Directus 9 for stronger schema flexibility and i18n. Built the
				React frontend by hand with a Sharp-based image pipeline
				(JPEG/WebP/AVIF, container-sized delivery, LQIP previews) and
				benchmarked end-to-end to ship as few unnecessary bytes as
				possible.
				<br />
				<br />
				The CMS pivot lost a week but prevented months of instability and
				gave the client a content model that matched how they actually
				worked. Six years later, the site is still live and earning.
				<br />
				<br />
				Tech: React, Directus, Sharp, AVIF/WebP/JPEG, multilingual CMS.
			</Project>

			<Project
				from="2019"
				to="2020"
				title="Where To Play"
				company="Frontend Developer — Likely"
			>
				Rebuild of the Traffic Accidents Map, a geospatial analytics tool
				used by Czech government bodies for traffic-safety and
				infrastructure decisions. The legacy app had reached a technical
				ceiling.
				<br />
				<br />
				Owned the redesign and frontend implementation from a blank file
				while a backend developer handled the server side. Rebuilt with
				Sapper, D3, and Mapbox; designed a clean, minimalist interface
				focused on clarity, filtering, and map-based exploration.
				Implemented a flexible filter system over tens of thousands of
				points, lines, and heatmaps while keeping interactions
				responsive — significant time spent profiling and optimizing the
				rendering path.
				<br />
				<br />
				Government users need power but also need confidence. I stripped
				visual noise, kept the control model predictable, and made the
				map the center of decision-making.
				<br />
				<br />
				Tech: Sapper, JavaScript, D3, Mapbox.
			</Project>

			<Project
				from="2024"
				to="2024"
				title="Swietelsky"
				company="Mobile Engineer — Rascasone"
			>
				Mission-critical corporate mobile app for a construction company:
				machine maintenance, warehouse operations, and defect reporting
				across construction workflows. Built for field workers, where bad
				UX becomes operational friction immediately.
				<br />
				<br />
				Contributed as part of a cross-functional Flutter mobile team:
				multiple screens for defect, maintenance, and equipment workflows;
				a photo-documentation system for real-time visual evidence on
				defect reports; iOS and Android delivery; codebase structure and
				maintainability improvements alongside ongoing feature work.
				<br />
				<br />
				Tech: Flutter, Dart, iOS, Android.
			</Project>

			<Project
				from="2022"
				to="2022"
				title="Labormex"
				company="Senior Developer — Rascasone"
			>
				HR and recruitment platform for streamlining worker registration,
				job matching, and operational hiring workflows, serving thousands
				of workers daily.
				<br />
				<br />
				Architected and implemented the worker-facing dynamic form flow
				across multiple pages and conditional states, connecting Vue
				frontend behavior with Ruby on Rails backend expectations so
				submitted data stayed consistent and usable for matching.
				Stabilized the registration flow before deployment and unblocked
				other developers by identifying root causes instead of patching
				symptoms.
				<br />
				<br />
				Tech: Vue.js, Ruby on Rails.
			</Project>

			<Project
				from="2021"
				to="2021"
				title="InnoConnect"
				company="Senior Developer — Rascasone"
			>
				Cloud-based strategy application helping business leaders and
				marketers identify market opportunities, evaluate where to compete,
				and turn qualitative market thinking into structured priorities.
				<br />
				<br />
				Joined during stabilization to strengthen the React/Redux frontend
				and integration with the Strapi backend. Led the TypeScript
				migration of the React/Redux frontend, exposing hidden assumptions
				in the codebase. Stabilized complex UI flows for market-opportunity
				analysis and prioritization, and systematically fixed bugs that were
				slowing delivery.
				<br />
				<br />
				Tech: TypeScript, React, Redux, Strapi, Node.js.
			</Project>

			<Project
				from="2022"
				to="2022"
				title="Viably"
				company="Mobile Engineer — Rascasone"
			>
				Cross-platform mobile banking app focused on digitizing check
				processing and supporting day-to-day financial operations for
				thousands of daily users. Joined an existing React Native team
				during a stabilization-and-delivery phase.
				<br />
				<br />
				Updated core React Native packages and resolved compatibility
				issues affecting application stability. Implemented new screens
				and product features across iOS and Android; contributed to
				flows for check digitization, banking overview, and secure
				verification.
				<br />
				<br />
				Tech: React Native, JavaScript, iOS, Android.
			</Project>

			<Project
				from="2018"
				to="2018"
				title="Econea"
				company="UX/UI & Frontend — Freelance"
			>
				UX/UI and frontend modernization for Czechia's leading
				eco-friendly e-shop. Owned the purchase-flow improvements from
				product page to checkout: research, UX concepts, UI design,
				clickable Sketch prototypes, responsive implementation, QA, and
				PHP template edits.
				<br />
				<br />
				Redesigned and improved the core purchase journey across desktop,
				tablet, and mobile, simplifying the buying path and tightening the
				information hierarchy. Introduced BEM in Sass to bring structure
				to a fragile CSS codebase and reduce styling regressions.
				Improved roughly 17 components across the buying flow; the client
				reported an estimated ~15% conversion lift after the changes.
				<br />
				<br />
				Tech: HTML, CSS/Sass, BEM, JavaScript, PHP templates, Sketch.
			</Project>
		</>
	);
};

const SideProjectsScreen: Component = () => {
	return (
		<>
			<Project
				from="2026"
				to="now"
				title="Keyboard Layout via Evolutionary Search"
			>
				Personalized keyboard layouts via a massively parallel evolutionary
				algorithm with novel mutation strategies, fed by FineWeb / TheStack
				n-grams, individual hand measurements, and physical keyboard
				geometry. The goal is layouts tuned to a specific person's hands
				and corpus rather than averaged across the population.
				<br />
				<br />
				Tech: Zig.
			</Project>

			<Project
				from="2026"
				to="now"
				title="Fused Tokenizer-Parser for Code Intelligence"
			>
				Custom fused tokenizer-parser emitting alias graphs, call graphs,
				and data-dependency graphs in a single pass. Intended as a
				foundation for code-intelligence tooling — semantic search, refactor
				suggestions, and "this code looks wrong for the surrounding
				context" detection — without re-parsing the same source multiple
				times.
				<br />
				<br />
				Tech: Zig.
			</Project>

			<Project
				from="2025"
				to="2025"
				title="Ultra-Fast Cache"
			>
				High-throughput cache with predictable, stable O(1) execution
				backed by a custom TLSF-allocator variant. Designed against
				thermodynamic-style invariants for tail-latency control rather
				than average-case throughput.
				<br />
				<br />
				Tech: Zig.
			</Project>

			<Project
				from="2025"
				to="2025"
				title="Local-First AI Code Search"
			>
				Local-first semantic code search server plus VS Code / Neovim
				plugins. Targets "semantically off code" detection — e.g., a Slack
				birthday call inside a service that otherwise handles
				automotive-parts orders — for editor-time and CI use.
				<br />
				<br />
				Tech: TypeScript.
			</Project>

			<Project
				from="2023"
				to="2025"
				title="JavaScript Benchmarking Harness"
			>
				CI-grade benchmarking harness using advanced statistical methods to
				detect whether code eventually optimizes, never optimizes, or leaks
				memory. Ships profiling output and hardware/OS-level guidance to
				localize regressions instead of just flagging them.
				<br />
				<br />
				Tech: TypeScript.
			</Project>

			<Project
				from="2024"
				to="2024"
				title="Schema-Full Binary Serialization Protocol"
			>
				Schema-full binary serialization protocol — JSON-shaped,
				schema-driven binary format for places where JSON is too big and
				slow but Protobuf JS bundles are too fat to ship.
				<br />
				<br />
				A minimal, modular binary schema for TypeScript at under 1.1 KB,
				with static type inference and flexible data validation.
				Integrates with Validator: define schemas with specific criteria
				(emails, passwords, …), set up state with Uint8Array and DataView,
				and encode data into a compact binary form.
				<br />
				<br />
				Tech: TypeScript.
			</Project>

			<Project
				from="2024"
				to="2024"
				title="Cold-Path-Optimized Schema Validator"
			>
				Cold-path-optimized schema validator — Zod-shaped but engineered
				for serverless and browser environments where the JIT never
				reaches steady-state. Cold execution speed is the primary metric,
				not warm-loop throughput.
				<br />
				<br />
				Sticks to pure data validation (no transformation, no async, no
				eval/compilation). The core is type-safe Assertions: composable,
				tree-shakeable, and very small. 40 Assertions in ~835 bytes,
				outpacing Zod on cold paths.
				<br />
				<br />
				Tech: TypeScript.
			</Project>

			<Project
				from="2024"
				to="2024"
				title="Binary tRPC-Style RPC Framework"
			>
				tRPC-style RPC built around binary transport, explicit error
				contracts, and end-to-end data validation — for environments where
				JSON-over-HTTP is the bottleneck and "just add Protobuf" is not a
				clean fit on the client.
				<br />
				<br />
				Tech: TypeScript.
			</Project>

		</>
	);
};

const SCREENS = [CommercialScreen, SideProjectsScreen];

export const SectionProjects: Component = () => {
	const [active, setActive] = createSignal(0);

	return (
		<Section title={"Projects"} index={2}>
			<Switcher
				items={["Commercial", "Side Projects"]}
				active={active}
				setActive={setActive}
			/>

			<Dynamic component={SCREENS[active()]} />
		</Section>
	);
};
