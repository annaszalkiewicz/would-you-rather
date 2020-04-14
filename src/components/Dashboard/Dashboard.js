import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../Header/Header';

class Dashboard extends Component {
  render() {
    return (
      <>
      <Header />
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    authUser: state.auth.authUser,
    users: state.users
  }
}

export default connect(mapStateToProps, null)(Dashboard);