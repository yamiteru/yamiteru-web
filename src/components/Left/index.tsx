import type { Component } from "solid-js";
import styles from "./index.module.css";
import { Header } from "../Header";
import { Terminal } from "../Terminal";
import { Info } from "../Info";
import { Paper } from "../Paper";

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
