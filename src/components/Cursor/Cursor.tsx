import type { Component } from "solid-js";
import { createSignal, onCleanup, onMount } from "solid-js";
import styles from "./styles.module.css";

export const Cursor: Component = () => {
	const [x, setX] = createSignal(0);
	const [y, setY] = createSignal(0);

	const handleMouseMove = (e: MouseEvent) => {
		setX(e.screenX);
		setY(e.screenY);
	};

	onMount(() => {
		if (typeof window !== "undefined") {
			window.addEventListener("mousemove", handleMouseMove);
		}
	});

	onCleanup(() => {
		if (typeof window !== "undefined") {
			window.removeEventListener("mousemove", handleMouseMove);
		}
	});

	return (
		<div class={styles.cursor}>
			<div class={styles.x} style={{ top: `${y()}px`, left: `${x()}px` }} />
			<div class={styles.y} style={{ top: `${y()}px`, left: `${x()}px` }} />
		</div>
	);
};
