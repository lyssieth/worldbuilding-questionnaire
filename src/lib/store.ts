import { writable } from "svelte/store";
import { type Template } from "./template";

export const current = writable(null as Template | null);
export const changed = writable(false);
export const permissionGranted = writable(
  localStorage.getItem("permissionGranted") === "true"
);
