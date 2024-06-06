import type { Component } from "solid-js";
import { Card } from "../Card";
import { Layout } from "../Layout";
import { Text } from "../Text/index";
import { Display } from "../Display";
import { Link } from "../Link";
import styles from "./index.module.css";

export const Library: Component<{
	org: string;
	title: string;
	link: string;
	children: any;
}> = (props) => {
	return (
		<Card>
			<Layout>
				<div class={styles.left}>
					<Text class={styles.org}>{props.org}</Text>
					<Link href={props.link}>
						<Display>{props.title}</Display>
					</Link>
				</div>
				<Text>{props.children}</Text>
			</Layout>
		</Card>
	);
};
