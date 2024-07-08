import { type Component, createSignal, onCleanup, onMount } from "solid-js";
import { Text } from "~/components/Text/Text";
import styles from "./styles.module.css";

const PUPIL_MAX = 318;
const INSIDE_MAX = 0.5;

export const Eyes: Component = () => {
	const [pupilX, setPupilX] = createSignal(Math.random() * PUPIL_MAX);
	const [pupilY, setPupilY] = createSignal(Math.random() * PUPIL_MAX);
	const [insideX, setInsideX] = createSignal(
		(Math.random() > 0.5 ? 1 : -1) * Math.random() * INSIDE_MAX,
	);
	const [insideY, setInsideY] = createSignal(
		(Math.random() > 0.5 ? 1 : -1) * Math.random() * INSIDE_MAX,
	);

	const pupilInterval = setInterval(() => {
		setPupilX(Math.random() * PUPIL_MAX);
		setPupilY(Math.random() * PUPIL_MAX);
	}, 5000);

	const insideInterval = setInterval(() => {
		setInsideX((Math.random() > 0.5 ? 1 : -1) * Math.random() * INSIDE_MAX);
		setInsideY((Math.random() > 0.5 ? 1 : -1) * Math.random() * INSIDE_MAX);
	}, 250);

	onMount(() => {
		setPupilX(Math.random() * PUPIL_MAX);
		setPupilY(Math.random() * PUPIL_MAX);
		setInsideX(Math.random() * INSIDE_MAX);
		setInsideY(Math.random() * INSIDE_MAX);
	});

	onCleanup(() => {
		clearInterval(pupilInterval);
		clearInterval(insideInterval);
	});

	return (
		<div class={styles.eyes}>
			<div class={styles.outside}>
				<div class={styles.left}>
					<div class={styles.label}>
						<Text>Breathe in</Text>
					</div>
					<div
						class={styles.inside}
						style={{
							transform: `translate(${insideX()}%, ${insideY()}%)`,
						}}
					>
						<div
							class={styles.pupil}
							style={{
								transform: `translate(${PUPIL_MAX - pupilX()}%, ${PUPIL_MAX - pupilY()}%)`,
							}}
						/>
					</div>
				</div>

				<div class={styles.right}>
					<div class={styles.label}>
						<Text>Breathe out</Text>
					</div>
					<div
						class={styles.inside}
						style={{
							transform: `translate(${insideX()}%, ${insideY()}%)`,
						}}
					>
						<div
							class={styles.pupil}
							style={{
								transform: `translate(${pupilX()}%, ${pupilY()}%)`,
							}}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};
