import type { Component } from "solid-js";
import styles from "./styles.module.css";

export const Link: Component<{
	children: any;
	href: string;
}> = (props) => {
	return (
		<a href={props.href} target="_blank" class={styles.link} rel="noreferrer">
			↗ {props.children}
		</a>
	);
};
