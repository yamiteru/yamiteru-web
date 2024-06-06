import type { Accessor, Component } from "solid-js";
import { For } from "solid-js";
import { Text } from "../Text";
import styles from "./index.module.css";

export const Switcher: Component<{
	items: string[];
	index: Accessor<number>;
	onClick: (index: number) => void;
	class?: string;
}> = (props) => {
	return (
		<div class={[styles.options, props.class].join(" ")}>
			<For each={props.items}>
				{(item, index) => (
					<Text
						class={[
							styles.option,
							props.index() === index() && styles.active,
						].join(" ")}
						onClick={() => props.onClick(index())}
					>
						[{item[0]}] {item[0]}
						{item.slice(1)}
					</Text>
				)}
			</For>
		</div>
	);
};
