import { InformationLayout } from './informationLayout';
import PropTypes from 'prop-types';

export const Information = ({ currentPlayer, isGameEnded, isDraw }) => {
	let title = '';
	if (isDraw) title = 'Ничья';
	else {
		if (isGameEnded) title = `Победа: ${currentPlayer}`;
		else title = `Ходит: ${currentPlayer}`;
	}
	return <InformationLayout title={title}></InformationLayout>;
};

Information.propTypes = {
	currentPlayer: PropTypes.string,
	isGameEnded: PropTypes.string,
	isDraw: PropTypes.string,
};
