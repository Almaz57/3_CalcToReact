import { Field, Information } from '../index';
import styles from './gameLayout.module.css';
import PropTypes from 'prop-types';

export const GameLayout = ({ ...props }) => {
	return (
		<div className={styles.game}>
			<Information
				currentPlayer={props.currentPlayer}
				isGameEnded={props.isGameEnded}
				isDraw={props.isDraw}
			></Information>
			<Field {...props}></Field>
			<button onClick={props.newGame} className={styles['reset-button']}>
				Новая игра
			</button>
		</div>
	);
};

GameLayout.propTypes = {
	currentPlayer: PropTypes.string,
	isGameEnded: PropTypes.bool,
	isDraw: PropTypes.bool,
	field: PropTypes.arrayOf(PropTypes.string),
	newGame: PropTypes.func,
};
