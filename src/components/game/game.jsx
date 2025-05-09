import { useState } from 'react';
import { GameLayout } from './gameLayout';

export const Game = () => {
	const [currentPlayer, setCurrentPlayer] = useState('X');
	const [isGameEnded, setIsGameEnded] = useState(false);
	const [isDraw, setIsDraw] = useState(false);
	const [field, setField] = useState(['', '', '', '', '', '', '', '', '']);
	const WIN_PATTERNS = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8], // Варианты побед по горизонтали
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8], // Варианты побед по вертикали
		[0, 4, 8],
		[2, 4, 6], // Варианты побед по диагонали
	];

	function newGame() {
		setCurrentPlayer('X');
		setIsGameEnded(false);
		setIsDraw(false);
		setField(['', '', '', '', '', '', '', '', '']);
	}

	function playerMoves(ind) {
		if (field[ind] || isGameEnded || isDraw) return;
		//Нанесение хода на поле
		const newField = [...field];
		newField[ind] = currentPlayer;
		setField(newField);
		//Проверка на победу
		const isWon = WIN_PATTERNS.some((combo) => {
			let count = 0;
			newField.forEach((el, ind) => {
				if (
					el === currentPlayer &&
					(ind === combo[0] || ind === combo[1] || ind === combo[2])
				)
					count++;
			});
			if (count === 3) return true;
		});
		if (isWon) return setIsGameEnded(true);
		//Проверка на ничью
		const isGameDraw = newField.every((el) => el === 'X' || el === 'O');
		if (isGameDraw) return setIsDraw(true);
		//Смена хода
		setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
	}

	return (
		<GameLayout
			currentPlayer={currentPlayer}
			isGameEnded={isGameEnded}
			isDraw={isDraw}
			field={field}
			newGame={newGame}
			playerMoves={playerMoves}
		></GameLayout>
	);
};
