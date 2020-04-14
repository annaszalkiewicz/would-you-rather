import React, { Component } from 'react';
import { connect } from 'react-redux';
import Icon from '@mdi/react';
import { mdiChevronDown } from '@mdi/js';

import './Header.scss';

class Header extends Component {
  componentDidMount = () => {
    console.log(this.props.authUser.avatarURL);
    
  }

  render() {
    const { authUser } = this.props;
    return (
      <header className="header">
        <div className="header-left">
          <h1>Would You Rather</h1>
        </div>
        <div className="header-right">
          <div className="header-avatar">
            <img src={`${authUser.avatarURL}`} alt={`${authUser.name}`} />
          </div>
          <Icon path={mdiChevronDown} size={1} />
        </div>
      </header>
    );
  }
}

const mapStateToProps = state => {
  return {
    authUser: state.auth.authUser,
    users: state.users
  }
}

// const mapDispatchToProps = dispatch => {
//   return {
//     onGetCurrentUser: user => dispatch(getCurrentUser(user))
//   }
// }

export default connect(mapStateToProps, null)(Header);