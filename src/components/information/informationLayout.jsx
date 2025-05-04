import styles from './informationLayout.module.css';
import PropTypes from 'prop-types';

export const InformationLayout = ({ title }) => {
	return (
		<>
			<label className={styles.label}>{title}</label>
		</>
	);
};

InformationLayout.propTypes = {
	title: PropTypes.string,
};
