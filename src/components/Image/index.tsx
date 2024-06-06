import { type Component, createSignal, onMount } from "solid-js";
import styles from "./index.module.css";

const SIZES = [320, 480, 720, 1280, 1920];

export const Image: Component<{ src: string; alt: string }> = (props) => {
	let picture: HTMLDivElement | undefined;

	const [size, setSize] = createSignal<null | number>(null);

	onMount(() => {
		const width = picture?.parentElement?.clientWidth;

		if (width) {
			const size = SIZES.find((size) => width <= size);

			if (size) {
				setSize(size);
			}
		}
	});

	return (
		<div ref={picture} class={styles.image}>
			{size() && (
				<picture class={styles.picture}>
					<source
						srcset={`/about/${props.src}-${size()}.webp`}
						type="image/webp"
					/>
					<source
						srcset={`/about/${props.src}-${size()}.avif`}
						type="image/avif"
					/>
					<img src={`/about/${props.src}-${size()}.jpeg`} alt={props.alt} />
				</picture>
			)}
		</div>
	);
};
