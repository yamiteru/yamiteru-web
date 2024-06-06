import type { Component, JSXElement } from "solid-js";
import { createSignal, For, onMount } from "solid-js";
import { Card } from "../Card";
import styles from "./index.module.css";
import { Text } from "../Text";
import { setTerminal } from "../../stores/navigation";

const [buffer, setBuffer] = createSignal<JSXElement[]>([], { equals: false });

const push = (element: JSXElement) => {
	setBuffer((v) => {
		v.push(element);
		return v.slice(-100);
	});
};

const files: {
	name: string;
	content: JSXElement;
}[] = [
	{
		name: "test",
		content: <Text class={styles.text}>Hello, World!</Text>,
	},
	{
		name: "links",
		content: (
			<Text class={styles.text}>
				<a href="https://x.com/the_yamiteru" target="_blank" rel="noreferrer">
					Twitter
				</a>
				<br />
				<a href="https://github.com/yamiteru" target="_blank" rel="noreferrer">
					Github
				</a>
			</Text>
		),
	},
];

const commands = {
	clear: () => {
		setBuffer([]);
	},
	ls: () => (
		<For each={files}>
			{(file) => <Text class={styles.text}>{file.name}</Text>}
		</For>
	),
	cat: (parts: string[]) => {
		const file = parts[1] ? files.find((f) => f.name === parts[1]) : null;

		if (file) {
			return file.content;
		}

		return <Text class={styles.text}>No such file</Text>;
	},
	help: () => {
		return (
			<>
				<Text class={styles.text}>clear - Clears terminal</Text>
				<Text class={styles.text}>ls - Lists directory files</Text>
				<Text class={styles.text}>cat [file] - Prints file content</Text>
				<Text class={styles.text}>help - Prints available commands</Text>
			</>
		);
	},
};

export const Terminal: Component = () => {
	let input: HTMLInputElement | undefined;

	const handleClick = () => {
		input?.focus();
	};

	const handleFocus = () => {
		setTerminal(true);
	};

	const handleBlur = () => {
		setTerminal(false);
	};

	const handleCommand = (value: string) => {
		const parts = value.split(" ");
		const first = parts[0];

		push(
			<div class={styles.prompt}>
				<Text class={styles.user}>yamiteru ~ </Text>
				<Text class={`${styles.text} ${styles.input}`}>{value}</Text>
			</div>,
		);

		if (first in commands) {
			const output = (commands as any)[first](parts);

			output && push(output);
		} else {
			push(<Text class={styles.text}>Command not found: {first}</Text>);
		}

		input!.value = "";
	};

	const handleKeypress = (e: KeyboardEvent) => {
		if (e.code === "Enter") {
			handleCommand(input!.value);
		}
	};

	const handleKeyUp = (e: KeyboardEvent) => {
		if (e.code === "Escape") {
			input!.blur();
		}
	};

	onMount(() => {
		handleCommand("help");
		handleCommand("cat links");
	});

	return (
		<Card class={styles.terminal} onClick={handleClick}>
			<For each={buffer()}>{(v) => v}</For>
			<div class={styles.prompt}>
				<Text class={styles.user}>yamiteru ~ </Text>
				<input
					ref={input}
					class={styles.input}
					onFocus={handleFocus}
					onBlur={handleBlur}
					onKeyPress={handleKeypress}
					onKeyUp={handleKeyUp}
				/>
			</div>
		</Card>
	);
};
