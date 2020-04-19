import React, { Component } from 'react';
import { connect } from 'react-redux';
import Icon from '@mdi/react';
import { mdiChevronDown } from '@mdi/js';
import Modal from 'react-modal';

import Nav from './Nav/Nav';

import './Header.scss';
import HeadingOne from '../ui/HeadingOne/HeadingOne';

Modal.setAppElement('#root');

class Header extends Component {
	state = {
		showModal: false,
	};

	handleOpenCloseModal = () => {
		this.setState({ showModal: !this.state.showModal ? true : false });
	};

	render() {
		const { authUser } = this.props;
		return (
			<header className='header'>
				<div className='header-left'>
					<HeadingOne />
				</div>
				<div className='header-right'>
					<div className='header-avatar'>
						<img src={`${authUser.avatarURL}`} alt={`${authUser.name}`} />
					</div>
					<button className='header-button' onClick={this.handleOpenCloseModal}>
						<Icon path={mdiChevronDown} size="1rem" />
					</button>
					<Modal isOpen={this.state.showModal}>
						<div
							className='modal-container'
							onClick={this.handleOpenCloseModal}
						>
							<h2>Welcome, {authUser.name}</h2>
							<Nav />
						</div>
					</Modal>
				</div>
			</header>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		authUser: state.auth.authUser,
		users: state.users,
	};
};

// const mapDispatchToProps = dispatch => {
//   return {
//     onGetCurrentUser: user => dispatch(getCurrentUser(user))
//   }
// }

export default connect(mapStateToProps, null)(Header);
