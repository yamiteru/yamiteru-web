import { Accessor, type Component } from "solid-js";
import { section, setSection } from "~/stores/section";
import styles from "./styles.module.css";

export const Section: Component<{
	title: string;
	index: number;
	children: any;
}> = (props) => {
	return (
		<div
			class={styles.section}
			data-index={props.index}
			data-active={section() >= props.index}
		>
			<div
				class={styles.head}
				data-active={section() === props.index}
				onClick={() => setSection(props.index)}
			>
				<div>
					<div class={styles.indicator}>
						<div class={styles.state} />
					</div>

					<div class={styles.title}>{props.title}</div>
				</div>

				<div class={styles.bottom} />
			</div>

			<div class={styles.body}>{props.children}</div>
		</div>
	);
};
