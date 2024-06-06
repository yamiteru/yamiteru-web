import type { Component } from "solid-js";
import styles from "./index.module.css";
import { Left } from "../Left";
import { Right } from "../Right";

export const Page: Component = () => {
	return (
		<div class={styles.page}>
			<Left />
			<Right />
		</div>
	);
};
