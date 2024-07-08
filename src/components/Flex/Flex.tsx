import type { Component } from "solid-js";
import styles from "./styles.module.css";

export const Flex: Component<{
	children: any;
	direction?: "row" | "column";
	justify?: "space-between";
}> = (props) => {
	return (
		<div
			classList={{
				[styles.flex]: true,
				[styles.column]: props.direction === "column",
				[styles.row]: props.direction === "row",
				[styles.justify_content_space_between]:
					props.justify === "space-between",
			}}
		>
			{props.children}
		</div>
	);
};
