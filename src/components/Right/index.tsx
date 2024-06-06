import type { Component } from "solid-js";
import styles from "./index.module.css";
import { SectionAbout } from "../../sections/SectionAbout";
import { SectionWork } from "../../sections/SectionWork";
import { SectionSkills } from "../../sections/SectionSkills";
import { SectionStudy } from "../../sections/SectionStudy";
import { section, setSection } from "../../stores/navigation";
import { useKeypress } from "../../utils/useKeypress";
import { Title } from "@solidjs/meta";

export const Right: Component = () => {
	const sections = ["About", "Work", "Skills", "Study"];

	useKeypress((key) => {
		const index = Number.parseInt(key.slice(5));

		if (!Number.isNaN(index) && index < 4) {
			setSection(index as any);
		}
	});

	return (
		<div class={styles.right}>
			<Title>Yamiteru - {sections[section()]}</Title>
			<SectionAbout />
			<SectionWork />
			<SectionSkills />
			<SectionStudy />
		</div>
	);
};
