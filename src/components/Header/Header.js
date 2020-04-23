import React, { Component } from 'react';
import { connect } from 'react-redux';
import Icon from '@mdi/react';
import { mdiChevronDown } from '@mdi/js';
import Modal from 'react-modal';

import Nav from './Nav/Nav';
import HeadingOne from '../ui/HeadingOne/HeadingOne';
import './Header.scss';

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
		const modal = {
			content: {
				width: '90%',
				maxWidth: '15rem',
				position: 'absolute',
				top: '0px',
				right: '0px',
				height: '400px',
				left: 'unset',
			},
		};

		return (
			<header className='header'>
				<div className='header-left'>
					<HeadingOne className='' style={{ textAlign: 'left' }} />
				</div>
				<div className='header-right'>
					<div className='header-avatar'>
						<img src={`${authUser.avatarURL}`} alt={`${authUser.name}`} />
					</div>
					<button className='header-button' onClick={this.handleOpenCloseModal}>
						<Icon path={mdiChevronDown} size='1rem' />
					</button>
					{window.innerWidth < 1024 && (
						<Modal isOpen={this.state.showModal} style={modal}>
						<div
							className='modal-container'
						>
							<button className="modal-close" onClick={this.handleOpenCloseModal}>X</button>
							<h2>Welcome, {authUser.name}</h2>
							<Nav />
						</div>
					</Modal>
					)}
					{window.innerWidth >=1024 && (
						<div className="nav-container">
							<h2>Welcome, {authUser.name}</h2>
							<Nav />
						</div>
					)}
					
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
