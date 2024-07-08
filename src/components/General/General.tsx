import type { Component } from "solid-js";
import { Link } from "~/components/Link/Link";
import { Portraits } from "~/components/Portraits/Portraits";
import { Text } from "~/components/Text/Text";
import styles from "./styles.module.css";

export const General: Component = () => {
	return (
		<div class={styles.general}>
			<div class={styles.part}>
				<Portraits />
			</div>

			<div class={styles.part}>
				<Text>
					{`{`}
					<br />
					{"  "}name: "Miroslav Vršecký",
					<br />
					{"  "}titles: [
					<br />
					{"    "}"Tech Lead",
					<br />
					{"    "}"Software Architect",
					<br />
					{"    "}"Software Engineer",
					<br />
					{"    "}"Web Designer"
					<br />
					{"  "}]
					<br />
					{`}`}
				</Text>
			</div>

			<div
				classList={{
					[styles.part]: true,
					[styles.links]: true,
				}}
			>
				<Link href="https://x.com/the_yamiteru">Twitter</Link>
				<Link href="https://github.com/yamiteru">Github</Link>
				<Link href="https://www.twitch.tv/the_yamiteru">Twitch</Link>
			</div>

			<div class={styles.part} />
			<div class={styles.part} />
			<div class={styles.part} />
			<div class={styles.part} />
			<div class={styles.part} />
			<div class={styles.part} />
			<div class={styles.part} />
		</div>
	);
};
