import type { Component, JSXElement } from "solid-js";
import styles from "./index.module.css";

export const Layout: Component<{ children: JSXElement }> = (props) => {
	return <div class={styles.layout}>{props.children}</div>;
};
