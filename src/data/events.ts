export type AxisKey =
	| "codeVsDesign"
	| "leadVsIC"
	| "lowVsHighLevel"
	| "backendVsFrontend"
	| "researchVsProduct"
	| "teamVsSolo";

export type AxisValues = Partial<Record<AxisKey, number>>;

export type Event = {
	name: string;
	start: number;
	end: number;
	weight?: number;
	axes: AxisValues;
};

export const EVENTS: Event[] = [
	// Education (weight 2; no role/collab axes — school doesn't shape lead/team stance)
	{
		name: "Multimedia diploma",
		start: 13,
		end: 17,
		weight: 2,
		axes: {
			codeVsDesign: -0.6,
			lowVsHighLevel: -0.85,
			backendVsFrontend: -0.7,
			researchVsProduct: -0.4,
		},
	},
	{
		name: "B.Sc. Software Engineering",
		start: 17,
		end: 20,
		weight: 2,
		axes: {
			codeVsDesign: 0.85,
			lowVsHighLevel: 0.4,
			backendVsFrontend: 0.0,
			researchVsProduct: 0.5,
		},
	},
	{
		name: "B.Sc. thesis: signal-based reactive framework",
		start: 19,
		end: 20,
		axes: {
			codeVsDesign: 0.95,
			lowVsHighLevel: 0.5,
			backendVsFrontend: -0.4,
			researchVsProduct: 0.85,
		},
	},
	{
		name: "M.Sc. Software Engineering",
		start: 20,
		end: 22,
		weight: 2,
		axes: {
			codeVsDesign: 0.85,
			lowVsHighLevel: 0.3,
			backendVsFrontend: 0.0,
			researchVsProduct: 0.7,
		},
	},
	{
		name: "M.Sc. thesis: CRDT JSON sync",
		start: 21,
		end: 22,
		axes: {
			codeVsDesign: 0.95,
			lowVsHighLevel: 0.5,
			backendVsFrontend: 0.2,
			researchVsProduct: 0.9,
		},
	},

	// Jobs (weight 4)
	{
		name: "Freelance UX/UI & Frontend",
		start: 13,
		end: 15,
		weight: 4,
		axes: {
			codeVsDesign: -0.3,
			leadVsIC: -1,
			lowVsHighLevel: -0.9,
			backendVsFrontend: -0.6,
			researchVsProduct: -0.9,
			teamVsSolo: -1,
		},
	},
	{
		name: "Agionet UI/UX & Frontend",
		start: 15,
		end: 18,
		weight: 4,
		axes: {
			codeVsDesign: 0.2,
			leadVsIC: -0.4,
			lowVsHighLevel: -0.9,
			backendVsFrontend: -0.5,
			researchVsProduct: -0.9,
			teamVsSolo: 0.5,
		},
	},
	{
		name: "Agionet project leadership",
		start: 16,
		end: 18,
		axes: {
			leadVsIC: 0.3,
			teamVsSolo: 0.7,
		},
	},
	{
		name: "Stealth AI Startup (Founding Engineer)",
		start: 18,
		end: 20,
		weight: 4,
		axes: {
			codeVsDesign: 0.9,
			leadVsIC: 0.0,
			lowVsHighLevel: 0.4,
			backendVsFrontend: 0.6,
			researchVsProduct: 0.85,
			teamVsSolo: -0.3,
		},
	},
	{
		name: "Rascasone Senior Engineer",
		start: 21,
		end: 22,
		weight: 4,
		axes: {
			codeVsDesign: 0.9,
			leadVsIC: 0.1,
			lowVsHighLevel: -0.7,
			backendVsFrontend: 0.2,
			researchVsProduct: -0.8,
			teamVsSolo: 0.7,
		},
	},
	{
		name: "Rascasone Tech Lead",
		start: 23,
		end: 24,
		weight: 4,
		axes: {
			codeVsDesign: 0.85,
			leadVsIC: 0.85,
			lowVsHighLevel: -0.7,
			backendVsFrontend: 0.2,
			researchVsProduct: -0.7,
			teamVsSolo: 0.95,
		},
	},
	{
		name: "Spectoda (Lead Engineer / Tech Lead)",
		start: 25,
		end: 26,
		weight: 4,
		axes: {
			codeVsDesign: 0.9,
			leadVsIC: 0.7,
			lowVsHighLevel: 0.1,
			backendVsFrontend: 0.5,
			researchVsProduct: -0.3,
			teamVsSolo: 0.4,
		},
	},
	{
		name: "Macaly (Senior Full-Stack)",
		start: 26,
		end: 26,
		weight: 4,
		axes: {
			codeVsDesign: 0.9,
			leadVsIC: -0.2,
			lowVsHighLevel: -0.4,
			backendVsFrontend: 0.5,
			researchVsProduct: -0.5,
			teamVsSolo: 0.7,
		},
	},

	// Commercial projects (weight 1 default; reinforce specific years/axes within a job)
	{
		name: "Econea (purchase flow modernization)",
		start: 18,
		end: 18,
		axes: {
			codeVsDesign: -0.1,
			lowVsHighLevel: -0.9,
			backendVsFrontend: -0.6,
			researchVsProduct: -0.9,
		},
	},
	{
		name: "Where To Play (Traffic Accidents Map)",
		start: 19,
		end: 20,
		axes: {
			codeVsDesign: 0.5,
			lowVsHighLevel: -0.5,
			backendVsFrontend: -0.5,
			researchVsProduct: -0.6,
		},
	},
	{
		name: "12345ŠESTÁK",
		start: 20,
		end: 20,
		axes: {
			codeVsDesign: 0.4,
			lowVsHighLevel: -0.7,
			backendVsFrontend: -0.5,
			researchVsProduct: -0.8,
		},
	},
	{
		name: "Reality Bouchal",
		start: 20,
		end: 20,
		axes: {
			codeVsDesign: 0.4,
			lowVsHighLevel: -0.7,
			backendVsFrontend: -0.5,
			researchVsProduct: -0.8,
		},
	},
	{
		name: "InnoConnect (strategy app)",
		start: 21,
		end: 21,
		axes: {
			codeVsDesign: 0.8,
			lowVsHighLevel: -0.7,
			backendVsFrontend: -0.2,
			researchVsProduct: -0.7,
		},
	},
	{
		name: "Blocheck (rental platform)",
		start: 21,
		end: 22,
		axes: {
			codeVsDesign: 0.8,
			lowVsHighLevel: -0.6,
			backendVsFrontend: 0.3,
			researchVsProduct: -0.7,
		},
	},
	{
		name: "Designated Workspace (solo dev+design)",
		start: 21,
		end: 22,
		axes: {
			codeVsDesign: 0.0,
			lowVsHighLevel: -0.8,
			backendVsFrontend: -0.3,
			researchVsProduct: -0.8,
		},
	},
	{
		name: "Flatzone (Next.js + Strapi rebuild)",
		start: 21,
		end: 22,
		axes: {
			codeVsDesign: 0.7,
			lowVsHighLevel: -0.7,
			backendVsFrontend: 0.0,
			researchVsProduct: -0.7,
		},
	},
	{
		name: "Labormex (Vue/Rails)",
		start: 22,
		end: 22,
		axes: {
			codeVsDesign: 0.8,
			lowVsHighLevel: -0.6,
			backendVsFrontend: 0.2,
			researchVsProduct: -0.8,
		},
	},
	{
		name: "Viably (mobile banking)",
		start: 22,
		end: 22,
		axes: {
			codeVsDesign: 0.8,
			lowVsHighLevel: -0.5,
			backendVsFrontend: -0.4,
			researchVsProduct: -0.8,
		},
	},
	{
		name: "H2 Organizer (Cloudflare HR platform)",
		start: 22,
		end: 24,
		weight: 1.5,
		axes: {
			codeVsDesign: 0.85,
			lowVsHighLevel: -0.5,
			backendVsFrontend: 0.4,
			researchVsProduct: -0.6,
		},
	},
	{
		name: "Swietelsky (Flutter mobile)",
		start: 24,
		end: 24,
		axes: {
			codeVsDesign: 0.8,
			lowVsHighLevel: -0.5,
			backendVsFrontend: -0.3,
			researchVsProduct: -0.8,
		},
	},

	// Side projects (weight 1; no role/collab axes — solo hobby work doesn't define stance)
	{
		name: "JS Benchmarking Harness",
		start: 23,
		end: 25,
		axes: {
			codeVsDesign: 0.95,
			lowVsHighLevel: 0.7,
			backendVsFrontend: 0.5,
			researchVsProduct: 0.9,
		},
	},
	{
		name: "Schema-Full Binary Serialization Protocol",
		start: 24,
		end: 24,
		axes: {
			codeVsDesign: 0.95,
			lowVsHighLevel: 0.6,
			backendVsFrontend: 0.6,
			researchVsProduct: 0.85,
		},
	},
	{
		name: "Cold-Path-Optimized Schema Validator",
		start: 24,
		end: 24,
		axes: {
			codeVsDesign: 0.95,
			lowVsHighLevel: 0.4,
			backendVsFrontend: 0.4,
			researchVsProduct: 0.85,
		},
	},
	{
		name: "Binary tRPC-Style RPC Framework",
		start: 24,
		end: 24,
		axes: {
			codeVsDesign: 0.95,
			lowVsHighLevel: 0.5,
			backendVsFrontend: 0.7,
			researchVsProduct: 0.85,
		},
	},
	{
		name: "Local-First AI Code Search",
		start: 25,
		end: 25,
		axes: {
			codeVsDesign: 0.95,
			lowVsHighLevel: 0.4,
			backendVsFrontend: 0.6,
			researchVsProduct: 0.85,
		},
	},
	{
		name: "Ultra-Fast Cache (Zig)",
		start: 25,
		end: 25,
		axes: {
			codeVsDesign: 0.95,
			lowVsHighLevel: 0.95,
			backendVsFrontend: 0.6,
			researchVsProduct: 0.95,
		},
	},
	{
		name: "Fused Tokenizer-Parser (Zig)",
		start: 26,
		end: 26,
		axes: {
			codeVsDesign: 0.95,
			lowVsHighLevel: 0.95,
			backendVsFrontend: 0.5,
			researchVsProduct: 0.95,
		},
	},
	{
		name: "Keyboard Layout Evolutionary Search (Zig)",
		start: 26,
		end: 26,
		axes: {
			codeVsDesign: 0.95,
			lowVsHighLevel: 0.95,
			backendVsFrontend: 0.5,
			researchVsProduct: 0.95,
		},
	},
];
