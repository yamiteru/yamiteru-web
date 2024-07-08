import { type Component, For } from "solid-js";
import { Display } from "../Display/Display";
import { Flex } from "../Flex/Flex";
import { Layout } from "../Layout/Layout";
import { Text } from "../Text/Text";
import styles from "./styles.module.css";

export const Work: Component<{
	titles: string[];
	company: string;
	text: string;
}> = (props) => {
	return (
		<Layout class={styles.work}>
			<Flex direction="column">
				<Text>{props.company}</Text>
				<Display class={styles.display}>
					<For each={props.titles}>
						{(title, i) => (
							<>
								{i() !== 0 && <br />}
								{i() !== 0 ? "+ " : ""}
								{title}
							</>
						)}
					</For>
				</Display>
			</Flex>

			<Text>{props.text}</Text>
		</Layout>
	);
};
