import type { Component } from "solid-js";
import { Card } from "~/components/Card/Card";
import { Display } from "~/components/Display/Display";
import { Layout } from "~/components/Layout/Layout";
import { Preview } from "~/components/Preview/Preview";
import styles from "./styles.module.css";

export const PreviewWithChinese: Component = () => {
	return (
		<Card>
			<div class={styles.wrapper}>
				<Layout class={styles.layout}>
					<Display class={styles.display}>
						多情却似总无情
						<br />
						维觉罇前笑不成
					</Display>

					<Display class={styles.display}>
						蜡烛有心还惜别
						<br />
						替人垂泪到天明
					</Display>
				</Layout>

				<Preview type="horizontal" image={"hangzhou.png"} alt="Hangzhou" />
			</div>
		</Card>
	);
};
