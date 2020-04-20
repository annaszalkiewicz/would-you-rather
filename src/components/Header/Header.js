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
		const nameStyle = {
			display: window.innerWidth >= 1280 ? 'none' : '',
		};
		return (
			<header className='header'>
				<div className='header-left'>
					<HeadingOne className='' style={{ textAlign: 'left' }} />
				</div>
				<div className='header-right'>
					{window.innerWidth >= 1280 && (
						<div className='header-name'>Welcome, {authUser.name}</div>
					)}
					<div className='header-avatar'>
						<img src={`${authUser.avatarURL}`} alt={`${authUser.name}`} />
					</div>
					<button className='header-button' onClick={this.handleOpenCloseModal}>
						<Icon path={mdiChevronDown} size='1rem' />
					</button>
					<Modal isOpen={this.state.showModal} style={modal}>
						<div
							className='modal-container'
							onClick={this.handleOpenCloseModal}
						>
							<h2 style={nameStyle}>Welcome, {authUser.name}</h2>
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
