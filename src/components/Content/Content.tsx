import type { Component } from "solid-js";
import { SectionAbout } from "~/sections/SectionAbout";
import { SectionSkills } from "~/sections/SectionSkills";
import { SectionStudy } from "~/sections/SectionStudy";
import { SectionWork } from "~/sections/SectionWork";
import styles from "./styles.module.css";

export const Content: Component = () => {
	return (
		<div class={styles.content}>
			<SectionAbout />
			<SectionWork />
			<SectionSkills />
			<SectionStudy />
		</div>
	);
};
