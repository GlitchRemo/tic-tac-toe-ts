import { GameI } from "./game";
import { InputControllerI } from "./keyboard-controller";
import { Move } from "./move";
import { ViewI } from "./view";

export default class GameController {
	private game;
	private view;
	private inputController;

	constructor(game: GameI, IOController: InputControllerI, view: ViewI) {
		this.game = game;
		this.view = view;
		this.inputController = IOController;
	}

	start() {
		this.view.render(this.game.state());

		this.inputController.on("move-entered", (move: Move) => {
			this.game.consolidateMove(move);
			this.view.render(this.game.state());
			if (this.game.state().isOver) {
				this.inputController.stop();
			}
		});

		this.inputController.start();
	}
}
