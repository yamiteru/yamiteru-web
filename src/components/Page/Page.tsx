import type { Component } from "solid-js";
import styles from "./styles.module.css";

export const Page: Component<{
	children: any;
}> = (props) => {
	return <div class={styles.page}>{props.children}</div>;
};
