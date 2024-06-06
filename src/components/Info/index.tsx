import type { Component } from "solid-js";
import { createSignal, onCleanup } from "solid-js";
import styles from "./index.module.css";
import { Text } from "../Text";

const getTime = () =>
	new Intl.DateTimeFormat("default", {
		hour12: true,
		hour: "numeric",
		minute: "numeric",
	})
		.format(new Date())
		.toUpperCase();

const getCPU = () => Math.ceil(Math.random() * 4) + 2;

const getRAM = () => Math.ceil(Math.random() * 30) + 10;

export const Info: Component = () => {
	const [time, setTime] = createSignal(getTime());
	const [cpu, setCPU] = createSignal(getCPU());
	const [ram, setRAM] = createSignal(getRAM());

	const interval = setInterval(() => {
		setTime(getTime());
		setCPU(getCPU());
		setRAM(getRAM());
	}, 1000);

	onCleanup(() => {
		clearInterval(interval);
	});

	return (
		<div class={styles.info}>
			<div class={styles.stats}>
				<Text>{cpu()}% CPU</Text>
				<Text>{ram()}M RAM</Text>
			</div>

			<Text>{time()}</Text>
		</div>
	);
};
