import type { Component } from "solid-js";
import { Card } from "../Card";
import { Display } from "../Display";
import { Layout } from "../Layout";
import { Link } from "../Link";
import { Text } from "../Text/index";
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
