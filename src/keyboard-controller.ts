import EventEmitter from "events";
import { Input } from "./input";
import { Keymap } from "./keymap";
import { Move } from "./move";
type Stdin = NodeJS.ReadStream & { fd: 0 };

export class KeyboardController
	extends EventEmitter
	implements InputControllerI
{
	private stdin;
	private keymap;

	constructor(stdin: Stdin, keymap: Keymap) {
		super();
		this.stdin = stdin;
		this.keymap = keymap;
	}

	start(): void {
		this.stdin.setRawMode(true);
		this.stdin.setEncoding("utf-8");

		this.stdin.on("data", (data: Input) => {
			console.log(data);
			switch (true) {
				default:
					this.emit("move-entered", this.keymap[data]);
			}
		});
	}

	stop(): void {
		this.stdin.destroy();
	}
}

export interface InputControllerI {
	start(): void;
	stop(): void;
	on(event: string, cb: (data: Move) => void): void;
}
