import { Move } from "./move";
import { Icon } from "./icon";

export class Player {
	readonly name: string;
	readonly icon: Icon;
	readonly moves: Move[];

	constructor(name: string, icon: Icon) {
		this.moves = [];
		this.name = name;
		this.icon = icon;
	}

	updateMoves(move: Move) {
		this.moves.push(move);
	}
}

export type PlayerT = {
	readonly name: string;
	readonly icon: Icon;
	readonly moves: Move[];
	updateMoves(move: Move): void;
};
