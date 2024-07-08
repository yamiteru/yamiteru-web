import type { Component } from "solid-js";
import { For } from "solid-js";
import { Text } from "../Text/Text";
import styles from "./styles.module.css";

export const Skills: Component<{
	title: string;
	start: number;
	end: number;
	data: {
		title: string;
		start: number;
		end: number;
	}[];
}> = (props) => {
	const columns = [...new Array(props.end - props.start + 1)];
	const sorted = props.data.sort(
		(a, b) => b.end - b.start - (a.end - a.start) + (b.end - a.end),
	);

	return (
		<table class={styles.skills}>
			<thead class={styles.head}>
				<tr class={styles.row}>
					<th scope="col" class={styles.cell}>
						<Text>Technology</Text>
					</th>
					<For each={columns}>
						{(_, i) => (
							<th class={styles.cell}>
								<Text>{props.start + i()}</Text>
							</th>
						)}
					</For>
				</tr>
			</thead>

			<tbody class={styles.body}>
				<For each={sorted}>
					{({ title, start, end }) => (
						<tr class={styles.row}>
							<th scope="row" class={styles.cell}>
								<Text>{title}</Text>
							</th>

							<For each={columns}>
								{(_, i) => {
									const year = props.start + i();

									return (
										<th
											classList={{
												[styles.cell]: true,
												[styles.active]: year >= start && year <= end,
											}}
										/>
									);
								}}
							</For>
						</tr>
					)}
				</For>
			</tbody>
		</table>
	);
};
