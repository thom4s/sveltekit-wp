import { writable } from "svelte/store";

export const fullscreen = writable(false);
export const fullScreenContent = writable([]);
export const fullScreenType = writable('');

export function resetFullscreen() {
    fullscreen.set(false);
    fullScreenContent.set([]);
    fullScreenType.set('');
}
export function closeFullscreen() {
    fullscreen.set(false);
}