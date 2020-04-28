import React from 'react';
import { withRouter } from 'react-router-dom';
import './Page404.scss';
import PrimaryButton from '../ui/PrimaryButton/PrimaryButton';

const Page404 = (props) => {
	return (
		<div className='not-found'>
			<h2>Page not found</h2>
			<PrimaryButton onClick={() => props.history.push('/')}>
				Go to Home Page
			</PrimaryButton>
		</div>
	);
};

export default withRouter(Page404);
