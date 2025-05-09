import { FieldLayout } from './fieldLayout';
import PropTypes from 'prop-types';

export const Field = ({ field, playerMoves }) => {
	return <FieldLayout field={field} playerMoves={playerMoves}></FieldLayout>;
};

FieldLayout.propTypes = {
	field: PropTypes.arrayOf(PropTypes.string),
	playerMoves: PropTypes.func,
};
