import type { Component } from "solid-js";
import { Card } from "../Card/Card";
import { Display } from "../Display/Display";
import { Flex } from "../Flex/Flex";
import { Layout } from "../Layout/Layout";
import { Text } from "../Text/Text";
import styles from "./styles.module.css";

export const Study: Component<{
	children: any;
	from: string;
	to: string;
	school: string;
	title: string;
}> = (props) => {
	return (
		<Card>
			<Layout>
				<Flex direction="column">
					<Text>
						{props.from} - {props.to}
					</Text>
					<Display>{props.title}</Display>
					<Text class={styles.school}>{props.school}</Text>
				</Flex>

				<Text>{props.children}</Text>
			</Layout>
		</Card>
	);
};
