import { onCleanup, onMount } from "solid-js";
import { terminal } from "../stores/navigation";

export const useKeypress = (handler: (key: string) => void) => {
  if (typeof window !== 'undefined') {
    const _ = (e: KeyboardEvent) => {
      if(terminal() === false) {
        handler(e.code);
      }
    };

    onMount(() => window.addEventListener("keypress", _));
    onCleanup(() => window.removeEventListener("keypress", _));
  }
};
