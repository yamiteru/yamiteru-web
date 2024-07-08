import { createSignal } from "solid-js";

export const [image, setImage] = createSignal<null | string>(null);
