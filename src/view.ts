import { GameState } from "./game";
import { MovesAndIcon } from "./moves";

export class View {
	#promptPlayerForInput(player: string) {
		console.log(player, "'s turn");
	}

	#congratulateWinner(winnerName: string) {
		console.log(winnerName, " Won!!!");
	}

	#printGameOverMessage() {
		console.log("Game Draw!!!");
	}

	#printHeading(): void {
		console.log("-".repeat(10), "TicTacToe", "-".repeat(10), "\n");
	}

	#renderBoard(moves: MovesAndIcon) {
		console.clear();
		this.#printHeading();
		for (let i = 0; i < 9; i += 3) {
			const row = [i, i + 1, i + 2].map((x) => moves[x] || " ").join("|");
			console.log(row);
		}
	}

	render(gameStatus: GameState): void {
		const { moves, currentPlayerName, winner, isOver } = gameStatus;
		this.#renderBoard(moves);

		switch (true) {
			case winner && isOver:
				this.#congratulateWinner(winner);
				break;

			case isOver:
				this.#printGameOverMessage();
				break;

			default:
				this.#promptPlayerForInput(currentPlayerName);
		}
	}
}

export interface ViewI {
	render(gameStatus: GameState): void;
}
