import type { Component } from "solid-js";
import styles from "./index.module.css";

export const Text: Component<{
	children: any;
	onClick?: (e: MouseEvent) => void;
	class?: string;
}> = (props) => {
	return (
		<div class={[styles.text, props.class].join(" ")} onClick={props.onClick}>
			{props.children}
		</div>
	);
};
