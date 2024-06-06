import type { Component } from "solid-js";
import { Left } from "../Left";
import { Right } from "../Right";
import styles from "./index.module.css";

export const Page: Component = () => {
	return (
		<div class={styles.page}>
			<Left />
			<Right />
		</div>
	);
};
