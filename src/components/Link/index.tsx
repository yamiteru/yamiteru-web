import type { Component } from "solid-js";

export const Link: Component<{
	href: string;
	children: any;
}> = (props) => {
	return (
		<a href={props.href} target="_blank" rel="noreferrer">
			{props.children}
		</a>
	);
};
