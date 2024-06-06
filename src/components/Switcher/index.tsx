import type { Component, JSXElement } from "solid-js";
import { For } from "solid-js";
import styles from "./index.module.css";
import { Text } from "../Text";

export const Switcher: Component<{
	items: string[];
	index: number;
	onClick: (index: number) => void;
	children?: JSXElement;
}> = (props) => {
	return (
		<div class={styles.switcher}>
			<div class={styles.options} data-children={!!props.children}>
				<For each={props.items}>
					{(item, index) => (
						<Text
							class={[
								styles.option,
								props.index === index() && styles.active,
							].join(" ")}
							onClick={() => props.onClick(index())}
						>
							[{item[0]}] {item[0]}
							{item.slice(1)}
						</Text>
					)}
				</For>
			</div>

			{props.children}
		</div>
	);
};
