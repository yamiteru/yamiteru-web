import type { Component } from "solid-js";
import styles from "./styles.module.css";

export const Text: Component<{
	children: any;
	class?: string;
	onClick?: (e: MouseEvent) => void;
	active?: boolean;
}> = (props) => {
	return (
		<p
			classList={{
				[styles.text]: true,
				[props.class]: !!props.class,
				[styles.hover]: props.active !== undefined,
				[styles.active]: props.active,
			}}
			onClick={props.onClick}
		>
			{props.children}
		</p>
	);
};
