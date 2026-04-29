import type { Component } from "solid-js";
import { For } from "solid-js";
import { SPECTRA, YEAR_END, YEAR_START } from "~/data/spectrum";
import { Spectrum } from "../Spectrum/Spectrum";
import { Text } from "../Text/Text";
import styles from "./styles.module.css";

export const Skills: Component = () => {
	return (
		<div class={styles.dashboard}>
			<div class={styles.years}>
				<Text>20{YEAR_START}</Text>
				<Text>20{YEAR_END}</Text>
			</div>

			<div class={styles.grid}>
				<For each={SPECTRA}>
					{(s) => <Spectrum top={s.top} bottom={s.bottom} data={s.data} />}
				</For>
			</div>
		</div>
	);
};
