import type { Component } from "solid-js";
import { Card } from "../Card/Card";
import { Layout } from "../Layout/Layout";
import { Text } from "../Text/Text";

export const Item: Component<{
	title: string;
	other?: string;
}> = (props) => {
	return (
		<Card>
			<Layout>
				<Text>{props.title}</Text>
				{props?.other && <Text>{props.other}</Text>}
			</Layout>
		</Card>
	);
};
