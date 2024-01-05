import { writable } from "svelte/store";
import { type Template } from "./template";

export const state = writable({
  current: null
} as {
  current: null | Template;
});
