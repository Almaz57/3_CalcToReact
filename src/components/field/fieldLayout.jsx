import styles from './fieldLayout.module.css';
import PropTypes from 'prop-types';

export const FieldLayout = ({ field, playerMoves }) => {
	return (
		<>
			<div className={styles.field}>
				{field.map((el, ind) => {
					return (
						<button
							key={ind}
							onClick={() => playerMoves(ind)}
							className={styles.cell}
						>
							{el}
						</button>
					);
				})}
			</div>
		</>
	);
};

FieldLayout.propTypes = {
	field: PropTypes.arrayOf(PropTypes.string),
	playerMoves: PropTypes.func,
};
