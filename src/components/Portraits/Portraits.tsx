import type { Component } from "solid-js";
import { Display } from "~/components/Display/Display";
import { Preview } from "~/components/Preview/Preview";
import styles from "./styles.module.css";

export const Portraits: Component = () => {
	return (
		<div class={styles.portraits}>
			<div class={styles.portrait}>
				<Preview type="vertical" image="serious.png" alt="serious" />
			</div>
			<div class={styles.portrait}>
				<Preview type="vertical" image="happy.png" alt="happy" />
			</div>
			<div class={styles.portrait}>
				<Preview type="vertical" image="funny.png" alt="funny" />
			</div>

			<Display class={styles.display}>闇照</Display>
		</div>
	);
};
