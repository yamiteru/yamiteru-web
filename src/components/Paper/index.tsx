import type { Component } from "solid-js";
import styles from "./index.module.css";

export const Paper: Component = () => {
	return (
		<div class={styles.wrapper}>
			<div class={styles.paper} />
			<div class={styles.noise} />
		</div>
	);
};
