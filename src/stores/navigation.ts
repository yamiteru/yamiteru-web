import { createSignal } from "solid-js";

export const [terminal, setTerminal] = createSignal(false);
export const [section, setSection] = createSignal<0 | 1 | 2 | 3>(0);
export const [about, setAbout] = createSignal<0 | 1 | 2>(0);
export const [work, setWork] = createSignal<0>(0);
export const [skills, setSkills] = createSignal<0 | 1 | 2>(0);
export const [study, setStudy] = createSignal<0 | 1 | 2>(0);
