import React from 'react';
import PropTypes from 'prop-types';

class Ranking extends React.Component {
  toStart = () => {
    const { history } = this.props;
    history.push('/');
  };

  render() {
    return (
      <>
        <div>
          <span
            data-testid="ranking-title"
          >
            Ranking
          </span>
        </div>
        <div>
          <button
            type="button"
            data-testid="btn-go-home"
            onClick={ this.toStart }
          >
            Start
          </button>

        </div>
      </>
    );
  }
}

Ranking.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default Ranking;
