import type { Accessor, Component } from "solid-js";
import { For } from "solid-js";
import styles from "./styles.module.css";

type YearMonth = { year: number; month: number };

const startDecimal = (d: YearMonth) => d.year + (d.month - 1) / 12;
const endDecimal = (d: YearMonth) => d.year + d.month / 12;

export const Timeline: Component<{
	items: {
		from: YearMonth;
		to: YearMonth;
		[key: string]: any;
	}[];
	active: Accessor<number>;
	setActive: (value: number) => void;
}> = (props) => {
	const min = Math.floor(
		Math.min(...props.items.map((v) => startDecimal(v.from))),
	);
	const max = Math.max(...props.items.map((v) => endDecimal(v.to)));
	const span = max - min;

	const quarters: number[] = [];
	for (let q = min + 0.25; q < max; q += 0.25) {
		quarters.push((q - min) / span);
	}

	const years: number[] = [];
	for (let y = min; y <= Math.floor(max); y++) years.push(y);

	return (
		<div class={styles.timeline}>
			<div class={styles.content}>
				<div class={styles.frame}>
					<For each={quarters}>
						{(pos) => (
							<div
								class={styles.gridline}
								style={{ left: `${pos * 100}%` }}
							/>
						)}
					</For>

					<For each={years}>
						{(year) => (
							<div
								class={styles.yearLabel}
								style={{ left: `${((year - min) / span) * 100}%` }}
							>
								{year}
							</div>
						)}
					</For>

					<For each={props.items}>
						{(v, i) => {
							const from = startDecimal(v.from);
							const to = endDecimal(v.to);
							const left = ((from - min) / span) * 100;
							const width = ((to - from) / span) * 100;

							return (
								<div
									classList={{
										[styles.period]: true,
										[styles.active]: i() === props.active(),
									}}
									style={{
										left: `${left}%`,
										width: `${width}%`,
									}}
									onClick={() => props.setActive(i())}
								>
									<div class={styles.selector} />
								</div>
							);
						}}
					</For>
				</div>
			</div>
		</div>
	);
};
