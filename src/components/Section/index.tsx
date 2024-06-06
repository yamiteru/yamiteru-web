import type { Component, JSXElement } from "solid-js";
import { section, setSection } from "../../stores/navigation";
import { Paper } from "../Paper";
import { Text } from "../Text";
import styles from "./index.module.css";

export const Section: Component<{
	title: string;
	index: 0 | 1 | 2 | 3;
	children: JSXElement;
}> = (props) => {
	return (
		<div
			class={styles.section}
			data-index={props.index}
			data-active={section() >= props.index}
		>
			<Paper />

			<div class={styles.strip} onClick={() => setSection(props.index)}>
				<Text class={styles.title}>
					<span class={styles.tilde} data-active={section() === props.index}>
						{"~ "}
					</span>
					<span
						class={`${styles.span} ${styles.title_span}`}
						data-active={section() === props.index}
					>
						{props.title}
					</span>
				</Text>

				<Text>
					<span class={styles.span} data-active={section() === props.index}>
						[{props.index}]
					</span>
				</Text>
			</div>

			<div class={styles.content}>{props.children}</div>
		</div>
	);
};
