import type { Component } from "solid-js";
import { Dynamic } from "solid-js/web";
import styles from "./styles.module.css";

export const Card: Component<{
	children: any;
	class?: string;
	href?: string;
}> = (props) => {
	return (
		<Dynamic
			component={props.href === undefined ? "div" : "a"}
			href={props.href}
			target="_blank"
			classList={{
				[styles.card]: true,
				[styles.link]: props.href !== undefined,
				[props.class]: !!props.class,
			}}
		>
			{props.children}
		</Dynamic>
	);
};
