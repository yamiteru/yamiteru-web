import type { Accessor, Component } from "solid-js";
import { For } from "solid-js";
import styles from "./styles.module.css";

export const Timeline: Component<{
	items: {
		from: number;
		to: number;
		[key: string]: any;
	}[];
	active: Accessor<number>;
	setActive: (value: number) => void;
}> = (props) => {
	const min = Math.min(...props.items.map((v) => v.from));
	const max = Math.max(...props.items.map((v) => v.to));
	const years = max - min;

	return (
		<div class={styles.timeline}>
			<div class={styles.content}>
				<For each={props.items}>
					{(v, i) => (
						<div
							classList={{
								[styles.period]: true,
								[styles.active]: i() === props.active(),
							}}
							style={{
								width: `${((v.to - v.from) / years) * 100}%`,
							}}
							onClick={() => props.setActive(i())}
						>
							<div class={styles.year}>
								<div class={styles.title}>{v.from}</div>
								<div class={styles.border} />
							</div>

							<div class={styles.selector} />

							<div class={styles.year}>
								<div class={styles.title}>{v.to}</div>
								<div class={styles.border} />
							</div>
						</div>
					)}
				</For>
			</div>
		</div>
	);
};
