import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';

import { fetchAllData } from '../../store/actions/data';
import { setAuthUser } from '../../store/actions/auth';

import HeadingOne from '../ui/HeadingOne/HeadingOne';

import './Home.scss';

class Home extends Component {
	state = {
		value: '',
		isLogin: false,
	};

	componentDidMount = () => {
		this.props.onFetchAllData();
	};

	changeInputHandler = (event) => {
		this.setState({ value: event.target.value });

		event.preventDefault();

		const currentUser = Object.values(this.props.users).filter(
			(user) => user.id === event.target.value
		);
		this.props.onSetAuthUser(currentUser[0]);
		this.setState((prevState) => {
			return {
				...prevState,
				isLogin: true,
			};
		});
	};

	render() {
		const { users } = this.props;
		const { isLogin } = this.state;
		return (
			<>
				<div className='login-container'>
					<header className='login-header'>
						<HeadingOne />
					</header>
					<main>
						<h2>Answer Questions - Create new polls</h2>
						<p>Please log in to continue</p>
						<div className='form-container'>
							<div id='form-login' className='form'>
								<div className='form-row'>
									<select
										name='username'
										id='username main'
										value={this.state.value}
										onChange={this.changeInputHandler}
									>
										<option value='' key='select'>
											Select a user
										</option>
										{Object.keys(users).map((user) => (
											<option value={users[user].id} key={users[user].id}>
												{users[user].name}
											</option>
										))}
									</select>
								</div>
							</div>
						</div>
					</main>
				</div>
				{isLogin && <Redirect to={`/dashboard`} />}
			</>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		users: state.users,
		questions: state.questions,
		authUser: state.auth.authUser,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onSetAuthUser: (user) => dispatch(setAuthUser(user)),
		onFetchAllData: () => dispatch(fetchAllData()),
	};
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));
