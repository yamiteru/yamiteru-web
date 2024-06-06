import type { Component } from "solid-js";
import { Card } from "../Card";
import { Display } from "../Display";
import { Layout } from "../Layout";
import { Text } from "../Text";
import styles from "./index.module.css";

export const Experience: Component<{
	date: string;
	title: string;
	company: string;
	children: any;
}> = (props) => {
	return (
		<Card>
			<Layout>
				<div class={styles.left}>
					<Text class={styles.date}>{props.date}</Text>
					<Display>{props.title}</Display>
					<Text class={styles.company}>{props.company}</Text>
				</div>
				<Text>{props.children}</Text>
			</Layout>
		</Card>
	);
};
