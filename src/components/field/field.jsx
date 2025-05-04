import { FieldLayout } from './fieldLayout';
import PropTypes from 'prop-types';

export const Field = ({ ...props }) => {
	function playerMoves(ind) {
		if (props.field[ind] || props.isGameEnded || props.isDraw) return;
		//Нанесение хода на поле
		const newField = [...props.field];
		newField[ind] = props.currentPlayer;
		props.setField(newField);
		//Проверка на победу
		props.isGameEnded = WIN_PATTERNS.some((combo) => {
			let count = 0;
			newField.forEach((el, ind) => {
				if (
					el === props.currentPlayer &&
					(ind === combo[0] || ind === combo[1] || ind === combo[2])
				)
					count++;
			});
			if (count === 3) return true;
		});
		if (props.isGameEnded) return props.setIsGameEnded(props.isGameEnded);
		//Проверка на ничью
		props.isDraw = newField.every((el) => el === 'X' || el === 'O');
		if (props.isDraw) return props.setIsDraw(props.isDraw);
		//Смена хода
		props.setCurrentPlayer(props.currentPlayer === 'X' ? 'O' : 'X');
	}

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

	return <FieldLayout field={props.field} playerMoves={playerMoves}></FieldLayout>;
};

Field.propTypes = {
	currentPlayer: PropTypes.string,
	setCurrentPlayer: PropTypes.func,
	isGameEnded: PropTypes.bool,
	setIsGameEnded: PropTypes.func,
	isDraw: PropTypes.bool,
	setIsDraw: PropTypes.func,
	field: PropTypes.arrayOf(PropTypes.string),
	setField: PropTypes.func,
};
