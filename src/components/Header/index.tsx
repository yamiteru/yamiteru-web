import type { Component } from "solid-js";
import styles from "./index.module.css";
import { Card } from "../Card";
import { Display } from "../Display";
import { Text } from "../Text";

export const Header: Component = (props) => {
	return (
		<Card>
			<div class={styles.header}>
				<Display>Miroslav Vršecký</Display>
				<Text>
					I'm a software engineer with over 10 years of experience and a knack
					for design, who enjoys bouldering—even if it means repeatedly falling
					off the walls!
				</Text>
			</div>
		</Card>
	);
};
