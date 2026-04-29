import type { Component } from "solid-js";
import { For } from "solid-js";
import { Text } from "../Text/Text";
import styles from "./styles.module.css";

export const Spectrum: Component<{
	top: string;
	bottom: string;
	data: number[];
}> = (props) => {
	const n = props.data.length;
	const step = 100 / n;

	const path = (() => {
		let p = `M 0,100`;
		for (let i = 0; i < n; i++) {
			const y = (1 - props.data[i]) * 100;
			p += ` L ${i * step},${y} L ${(i + 1) * step},${y}`;
		}
		p += ` L 100,100 Z`;
		return p;
	})();

	const ticks = Array.from({ length: n - 1 }, (_, i) => (i + 1) * step);

	return (
		<div class={styles.spectrum}>
			<svg
				class={styles.chart}
				viewBox="0 0 100 100"
				preserveAspectRatio="none"
				role="img"
				aria-label={`${props.top} versus ${props.bottom} over time`}
			>
				<For each={ticks}>
					{(x) => (
						<line x1={x} x2={x} y1={0} y2={100} class={styles.tick} />
					)}
				</For>

				<path d={path} class={styles.fill} />
			</svg>

			<div class={styles.legend}>
				<div class={styles.entry}>
					<div classList={{ [styles.dot]: true, [styles.filled]: true }} />
					<Text>{props.top}</Text>
				</div>

				<div class={styles.entry}>
					<div class={styles.dot} />
					<Text>{props.bottom}</Text>
				</div>
			</div>
		</div>
	);
};
