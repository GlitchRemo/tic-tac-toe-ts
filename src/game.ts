import { Move } from "./move";
import { MovesAndIcon } from "./moves";
import Players from "./players";

export type GameState = {
	moves: MovesAndIcon;
	currentPlayerName: string;
	winner: string;
	isOver: boolean;
};

export class Game {
	private players: Players;
	private isOver: boolean;
	winner: string;

	constructor(players: Players) {
		this.players = players;
		this.isOver = false;
		this.winner = "";
	}

	consolidateMove(move: Move): void {
		if (!this.players.validMove(move)) return;

		this.players.recordMove(move);

		if (this.players.hasWon()) {
			this.isOver = true;
			this.winner = this.players.getCurrentPlayerName();
			return;
		}

		if (this.players.totalMovesMade() === 9) {
			this.isOver = true;
			return;
		}

		this.players.changeTurn();
	}

	state(): GameState {
		return {
			moves: this.players.movesMade(),
			currentPlayerName: this.players.getCurrentPlayerName(),
			winner: this.winner,
			isOver: this.isOver,
		};
	}
}
