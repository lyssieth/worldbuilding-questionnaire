import { writable } from "svelte/store";
import { type Template } from "./types/template";

export const current = writable(null as Template | null);
export const changed = writable(false);
export const shouldRefresh = writable(false);
export const editMode = writable(false);
export const permissionGranted = writable(
  localStorage.getItem("permissionGranted") === "true"
);

permissionGranted.subscribe((value) => {
  if (value) {
    localStorage.setItem("permissionGranted", value.toString());
  } else {
    localStorage.clear();
  }
});

export const permissionModalOpen = writable(false);
export const importModalOpen = writable(false);
