import { useState } from 'react';
import { GameLayout } from './gameLayout';

export const Game = () => {
	const [currentPlayer, setCurrentPlayer] = useState('X');
	const [isGameEnded, setIsGameEnded] = useState(false);
	const [isDraw, setIsDraw] = useState(false);
	const [field, setField] = useState(['', '', '', '', '', '', '', '', '']);
	function newGame() {
		setCurrentPlayer('X');
		setIsGameEnded(false);
		setIsDraw(false);
		setField(['', '', '', '', '', '', '', '', '']);
	}
	return (
		<GameLayout
			currentPlayer={currentPlayer}
			setCurrentPlayer={setCurrentPlayer}
			isGameEnded={isGameEnded}
			setIsGameEnded={setIsGameEnded}
			isDraw={isDraw}
			setIsDraw={setIsDraw}
			field={field}
			setField={setField}
			newGame={newGame}
		></GameLayout>
	);
};

// import PropTypes from 'prop-types';

// // Явно неправильные пропсы для теста
// export const TestComponent = ({ title, count }) => {
// 	return (
// 		<div>
// 			{title} - {count}
// 		</div>
// 	);
// };

// TestComponent.propTypes = {
// 	title: PropTypes.number.isRequired, // Намеренная ошибка
// 	count: PropTypes.string.isRequired, // Намеренная ошибка
// };

// // Использование с неверными типами
// export const Game = () => (
// 	<TestComponent title={42} count="hello" /> // Должны быть ошибки
// );
