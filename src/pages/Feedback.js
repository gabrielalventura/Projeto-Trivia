import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import HeaderGame from '../components/HeaderGame';
import { resetScore } from '../redux/actions/sumScore';

class Feedback extends React.Component {
  message = () => {
    const { assertions } = this.props;
    const tres = 3;
    const message1 = 'Could be better...';
    const message2 = 'Well Done!';

    if (assertions < tres) {
      return message1;
    }
    return message2;
  };

  playAgain = () => {
    const { history, dispatch } = this.props;
    dispatch(resetScore());
    history.push('/');
  };

  playAgainR = () => {
    const { history, dispatch } = this.props;
    dispatch(resetScore());
    history.push('/ranking');
  };

  render() {
    const { score, assertions } = this.props;
    return (
      <div>
        <header>
          <HeaderGame />
        </header>
        <h1 data-testid="feedback-text">
          { this.message() }
        </h1>
        <h2 data-testid="feedback-total-score">{ score }</h2>
        <h2 data-testid="feedback-total-question">{ assertions }</h2>
        <button
          type="button"
          data-testid="btn-play-again"
          onClick={ this.playAgain }
        >
          Play Again
        </button>
        <button
          type="button"
          data-testid="btn-ranking"
          onClick={ this.playAgainR }
        >
          Ranking
        </button>
      </div>
    );
  }
}

Feedback.propTypes = {
  assertions: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

const mapStateToProps = (state) => ({
  assertions: state.player.assertions,
  score: state.player.score,
});

export default connect(mapStateToProps)(Feedback);
