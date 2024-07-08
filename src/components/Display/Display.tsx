import type { Component } from "solid-js";
import styles from "./styles.module.css";

export const Display: Component<{
	children: any;
	class?: string;
}> = (props) => {
	return (
		<h2
			classList={{
				[styles.display]: true,
				[props.class]: !!props.class,
			}}
		>
			{props.children}
		</h2>
	);
};
