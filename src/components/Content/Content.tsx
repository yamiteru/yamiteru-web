import type { Component } from "solid-js";
import { For } from "solid-js";
import { SectionAbout } from "~/sections/SectionAbout";
import { SectionProjects } from "~/sections/SectionProjects";
import { SectionSkills } from "~/sections/SectionSkills";
import { SectionStudy } from "~/sections/SectionStudy";
import { SectionWork } from "~/sections/SectionWork";
import { section, setSection } from "~/stores/section";
import styles from "./styles.module.css";

const SECTIONS = ["About", "Work", "Projects", "Skills", "Study"];

export const Content: Component = () => {
	const selectSection = (index: number) => {
		setSection(index);

		if (typeof window !== "undefined") {
			window.scrollTo({ top: 0, behavior: "auto" });
		}
	};

	return (
		<div class={styles.content}>
			<SectionAbout />
			<SectionWork />
			<SectionProjects />
			<SectionSkills />
			<SectionStudy />

			<nav class={styles.mobileNav} aria-label="Sections">
				<For each={SECTIONS}>
					{(label, index) => (
						<button
							type="button"
							class={styles.mobileButton}
							data-active={section() === index()}
							aria-current={section() === index() ? "page" : undefined}
							onClick={() => selectSection(index())}
						>
							{label}
						</button>
					)}
				</For>
			</nav>
		</div>
	);
};
