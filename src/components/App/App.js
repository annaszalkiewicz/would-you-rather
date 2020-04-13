import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Home from '../Home/Home';
import { fetchAllData } from '../../store/actions/data';

import './App.scss';

class App extends Component {
	componentDidMount = () => {
		this.props.onFetchAllData();
	};

	render() {
		return (
			<div className='App'>
				<Router>
					<Route exact path='/' component={Home} />
				</Router>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		users: state.users,
		questions: state.questions,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onFetchAllData: () => dispatch(fetchAllData()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
