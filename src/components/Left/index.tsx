import type { Component } from "solid-js";
import { Header } from "../Header";
import { Info } from "../Info";
import { Paper } from "../Paper";
import { Terminal } from "../Terminal";
import styles from "./index.module.css";

export const Left: Component = () => {
	return (
		<div class={styles.left}>
			<Paper />
			<Header />
			<Terminal />
			<Info />
		</div>
	);
};
