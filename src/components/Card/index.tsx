import type { Component, JSXElement } from "solid-js";
import styles from "./index.module.css";

export const Card: Component<{
	children: JSXElement;
	class?: string;
	onClick?: (e: MouseEvent) => void;
}> = (props) => {
	return (
		<div class={[styles.card, props.class].join(" ")} onClick={props.onClick}>
			{props.children}
		</div>
	);
};
