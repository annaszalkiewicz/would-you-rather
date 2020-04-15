import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';

import { setAuthUser } from '../../store/actions/auth';

import './Home.scss';

class Home extends Component {
	state = {
		value: '',
		isLogin: false,
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
		const { users, authUser } = this.props;
		const { isLogin } = this.state;
		return (
			<>
				<div className='login-container'>
					<header className='login-header'>
						<h1>Would you rather</h1>
					</header>
					<h2>Answer Questions - Create new polls</h2>
					<p>Please log in to continue</p>
					<div className='form-container'>
						<div id='form-login' className='form'>
							<div className='form-row'>
								<select
									name='username'
									id='username'
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
				</div>
				{isLogin && <Redirect to={`/${authUser.id}`} />}
			</>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		users: state.users,
		authUser: state.auth.authUser,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onSetAuthUser: (user) => dispatch(setAuthUser(user)),
	};
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));
