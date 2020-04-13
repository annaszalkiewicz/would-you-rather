import React, { Component } from 'react';
import { connect } from 'react-redux';

import { setAuthUser } from '../../store/actions/auth';

import './Home.scss';

class Home extends Component {
	state = {
		value: '',
	};

	changeInputHandler = (event) => {
		this.setState({ value: event.target.value });
		event.preventDefault();
		this.props.onSetAuthUser(event.target.value);
	};

	render() {
		const { users } = this.props;
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
		onSetAuthUser: (id) => dispatch(setAuthUser(id)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
