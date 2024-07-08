import type { Accessor, Component } from "solid-js";
import { For } from "solid-js";
import { Text } from "../Text/Text";
import styles from "./styles.module.css";

export const Switcher: Component<{
	items: string[];
	active: Accessor<number>;
	setActive: (value: number) => void;
}> = (props) => {
	return (
		<div class={styles.switcher}>
			<For each={props.items}>
				{(v, i) => (
					<Text
						active={props.active() === i()}
						onClick={() => props.setActive(i())}
					>
						{v}
					</Text>
				)}
			</For>
		</div>
	);
};
