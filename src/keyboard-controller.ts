import EventEmitter from "events";
import { Input } from "./input";
import { Keymap } from "./keymap";

type Stdin = NodeJS.ReadStream & { fd: 0 };
const ForceQuitSequences = ["p"];

export default class KeyboardController extends EventEmitter {
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
			if (ForceQuitSequences.includes(data)) return this.stop();

			if (this.keymap[data] === undefined) return;

			this.emit("move-entered", this.keymap[data]);
		});
	}

	stop(): void {
		this.stdin.destroy();
	}
}
