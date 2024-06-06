import type { Component } from "solid-js";
import styles from "./index.module.css";

export const Display: Component<{
	children: any;
	class?: string;
}> = (props) => {
	return (
		<div class={[styles.display, props.class].join(" ")}>{props.children}</div>
	);
};
