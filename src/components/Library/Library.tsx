import type { Component } from "solid-js";
import { Card } from "../Card/Card";
import { Display } from "../Display/Display";
import { Flex } from "../Flex/Flex";
import { Layout } from "../Layout/Layout";
import { Text } from "../Text/Text";

export const Library: Component<{
	org: string;
	title: string;
	children: any;
}> = (props) => {
	return (
		<Card href={`https://github.com/${props.org}/${props.title}`}>
			<Layout>
				<Flex direction="column">
					<Text>@{props.org}</Text>
					<Display>↗ {props.title}</Display>
				</Flex>

				<Text>{props.children}</Text>
			</Layout>
		</Card>
	);
};
