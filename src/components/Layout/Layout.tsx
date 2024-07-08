import type { Component } from "solid-js";
import styles from "./styles.module.css";

export const Layout: Component<{
	children: any;
	class?: string;
}> = (props) => {
	return (
		<div
			classList={{
				[styles.layout]: true,
				[props.class]: !!props.class,
			}}
		>
			{props.children}
		</div>
	);
};
