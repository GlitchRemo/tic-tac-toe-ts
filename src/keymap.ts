import { Input } from "./input";
import { Move } from "./move";

export type Keymap = {
	[move in Input]: Move;
};

export const keymap: Keymap = {
	q: 0,
	w: 1,
	e: 2,
	a: 3,
	s: 4,
	d: 5,
	z: 6,
	x: 7,
	c: 8,
};
