import { type AxisKey, EVENTS } from "./events";

export type Spectrum = {
	top: string;
	bottom: string;
	data: number[];
};

export const YEAR_START = 13;
export const YEAR_END = 26;

const AXES: { key: AxisKey; top: string; bottom: string }[] = [
	{ key: "leadVsIC", top: "Lead", bottom: "IC" },
	{ key: "backendVsFrontend", top: "Backend", bottom: "Frontend" },
	{ key: "lowVsHighLevel", top: "Low-level", bottom: "High-level" },
	{ key: "teamVsSolo", top: "Team", bottom: "Solo" },
	{ key: "codeVsDesign", top: "Code", bottom: "Design" },
	{ key: "researchVsProduct", top: "Research", bottom: "Product" },
];

function aggregate(year: number, axis: AxisKey): number {
	let sum = 0;
	let weightSum = 0;
	for (const e of EVENTS) {
		if (year < e.start || year > e.end) continue;
		const v = e.axes[axis];
		if (v === undefined) continue;
		const w = e.weight ?? 1;
		sum += v * w;
		weightSum += w;
	}
	if (weightSum === 0) return 0.5;
	return (sum / weightSum + 1) / 2;
}

export const SPECTRA: Spectrum[] = AXES.map(({ key, top, bottom }) => {
	const data: number[] = [];
	for (let y = YEAR_START; y <= YEAR_END; y++) data.push(aggregate(y, key));
	return { top, bottom, data };
});
