import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { saveNewQuestion } from '../../store/actions/questions.js';
import Header from '../Header/Header';
import './NewQuestion.scss';

class NewQuestion extends Component {

  state = {
    optionOneText: '',
    optionTwoText: ''
  }

  inputChangeHandler = e => {
    this.setState({[e.target.id]: e.target.value})
  }
  submitForm = e => {
    const { optionOneText, optionTwoText } = this.state;
    const author = this.props.auth.id;

    e.preventDefault();
    console.log(this.state.optionOneText, this.state.optionTwoText);
    this.props.onSaveNewQuestion(optionOneText, optionTwoText,  author)

    console.log(author)
  }
	render() {
		return (
			<>
				<Header />
				<main className='newQuestion'>
          <h2 className="newQuestion-heading">Create new poll</h2>
          <h3 className="newQuestion-text">Would you rather...</h3>
					<form className='newQuestion-form' onSubmit={this.submitForm}>
						<div className='newQuestion-form-row'>
							<label htmlFor='optionOneText'>Enter option one text</label>
							<input type='text' name='optionOneText' id='optionOneText' value={this.state.optionOneText} minLength={5} onChange={this.inputChangeHandler} />
						</div>
						<div className='newQuestion-form-row'>
							<label htmlFor='optionTwoText'>Enter option two text</label>
							<input type='text' name='optionTwoText' id='optionTwoText' value={this.state.optionTwoText} minLength={5} onChange={this.inputChangeHandler} />
						</div>
						<div className='newQuestion-form-row'>
							<input type='submit' value='Submit' />
						</div>
					</form>
				</main>
			</>
		);
	}
}

const mapStateToProps = state => {
  return {
    auth: state.auth.authUser
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSaveNewQuestion: (optionOne, optionTwo, author) => dispatch(saveNewQuestion(optionOne, optionTwo, author))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NewQuestion));
