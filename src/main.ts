import { Icon } from "./icon";
import { keymap } from "./keymap";

import Players from "./players";
import { Game } from "./game";
import View from "./view";

import GameController from "./game-controller";
import Player from "./player";
import KeyboardController from "./keyboard-controller";

const main = () => {
	const firstPlayerName = process.argv[2];
	const secondPlayerName = process.argv[3];

	const player1 = new Player(firstPlayerName, Icon.CROSS);
	const player2 = new Player(secondPlayerName, Icon.CIRCLE);
	const players = new Players([player1, player2]);

	const game = new Game(players);
	const view = new View();

	const keyboardController = new KeyboardController(process.stdin, keymap);
	const controller = new GameController(game, keyboardController, view);

	console.clear();

	controller.start();
};

main();
