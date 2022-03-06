import { writable } from "svelte/store";

export const userId = writable();
export const isLoggedIn = writable(false);