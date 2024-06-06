import type { Component } from "solid-js";
import { Card } from "../Card";
import { Text } from "../Text";
import { Display } from "../Display";
import styles from "./index.module.css";

export const Resource: Component<{ author?: string; title: string }> = (
	props,
) => {
	return (
		<Card>
			{props.author && <Text class={styles.author}>{props.author}</Text>}
			<Display class={styles.title}>{props.title}</Display>
		</Card>
	);
};
