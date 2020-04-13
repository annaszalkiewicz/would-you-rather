import React, { Component } from 'react';
import { connect } from 'react-redux';

// import { isLogin } from '../../store/actions/authActions';

import './Home.scss';

class Home extends Component {
	state = {
		value: 'Sarah Edo',
	};

	changeInputHandler = (event) => {
		this.setState({ value: event.target.value });
	};

	render() {
		const { users } = this.props;
		return (
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
								{Object.keys(users).map((user) => (
									<option value={users[user].name} key={users[user].id}>{users[user].name}</option>
								))}
							</select>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		users: state.users,
	};
};

export default connect(mapStateToProps, null)(Home);
