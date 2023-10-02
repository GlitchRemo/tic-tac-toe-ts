import { Move } from "./move";
import { MovesAndIcon } from "./moves";
import Player from "./player";
import { WINNING_SEQUENCES } from "./winning-sequences";

export default class Players {
	private players: Player[];

	constructor(players: Player[]) {
		this.players = players;
	}

	getCurrentPlayerName(): string {
		return this.players[0].name;
	}

	changeTurn(): void {
		this.players.reverse();
	}

	recordMove(move: Move): void {
		this.players[0].updateMoves(move);
	}

	validMove(move: Move): boolean {
		const movesMadeSofar = this.players.flatMap((player) => player.moves);

		return !movesMadeSofar.includes(move);
	}

	totalMovesMade(): number {
		return this.players.flatMap((player) => player.moves).length;
	}

	movesMade(): MovesAndIcon {
		return Object.fromEntries(
			this.players.flatMap((player) =>
				player.moves.map((move) => [move, player.icon])
			)
		);
	}

	hasWon(): boolean {
		const currentPlayerMoves = this.players[0].moves;

		return WINNING_SEQUENCES.some((sequence) => {
			return sequence.every((number) => currentPlayerMoves.includes(number));
		});
	}
}
