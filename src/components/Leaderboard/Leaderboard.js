import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import './Leaderboard.scss';
import Header from '../Header/Header';

const Leaderboard = (props) => {
	const { users } = props;
	const leaderboard = Object.values(users)
		.map((user) => {
			return {
				id: user.id,
				name: user.name,
				avatar: user.avatarURL,
				answers: Object.keys(user.answers).length,
				questions: user.questions.length,
				score: Object.keys(user.answers).length + user.questions.length,
			};
		})
		.sort((a, b) => b.score - a.score);

	return (
		<div>
			<Header />
			<main className='leaderboard'>
				{leaderboard.map((user) => {
					return (
						<div
							className='question question-details leaderboard-card'
							key={user.id}
						>
							<div className='question-details-left leaderboard-left'>
								<h2>{user.name}</h2>
								<img src={user.avatar} alt={user.name} />
							</div>
							<div className='leaderboard-middle'>
								<p>Questions answered: {user.answers}</p>
								<p>Questions created: {user.questions}</p>
							</div>
							<div className='leaderboard-right'>
								<p>Score: {user.score}</p>
							</div>
						</div>
					);
				})}
			</main>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		users: state.users,
	};
};

export default withRouter(connect(mapStateToProps, null)(Leaderboard));
