import { Move } from "./move";
import { Game } from "./game";
import KeyboardController from "./keyboard-controller";
import View from "./view";

export default class GameController {
	private game;
	private view;
	private inputController;

	constructor(game: Game, IOController: KeyboardController, view: View) {
		this.game = game;
		this.view = view;
		this.inputController = IOController;
	}

	start() {
		this.view.render(this.game.state());

		this.inputController.on("move-entered", (move: Move) => {
			this.game.consolidateMove(move);
			this.view.render(this.game.state());

			if (this.game.state().isOver) this.inputController.stop();
		});

		this.inputController.start();
	}
}
