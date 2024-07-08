import type { Component } from "solid-js";
import styles from "./styles.module.css";

export const Preview: Component<{
	image: string;
	alt: string;
	type: "horizontal" | "vertical";
}> = (props) => {
	return (
		<img
			classList={{
				[styles.preview]: true,
				[styles.horizontal]: props.type === "horizontal",
				[styles.vertical]: props.type === "vertical",
			}}
			src={`/preview/${props.image}`}
			alt={props.alt}
		/>
	);
};
