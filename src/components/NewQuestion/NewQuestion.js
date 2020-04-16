import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './NewQuestion.scss';
import Header from '../Header/Header';

class NewQuestion extends Component {

  state = {
    optionOneText: '',
    optionTwoText: ''
  }

  inputChangeHandler = e => {
    this.setState({[e.target.id]: e.target.value})
  }
  submitForm = e => {
    e.preventDefault();
    console.log('Submitted form');
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
							<input type='text' name='optionOneText' id='optionOneText' value={this.state.optionOneText} onChange={this.inputChangeHandler} />
						</div>
						<div className='newQuestion-form-row'>
							<label htmlFor='optionTwoText'>Enter option two text</label>
							<input type='text' name='optionTwoText' id='optionTwoText' value={this.state.optionTwoText} onChange={this.inputChangeHandler} />
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

export default withRouter(NewQuestion);
