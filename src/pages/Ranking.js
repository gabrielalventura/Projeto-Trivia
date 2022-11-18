import React from 'react';
import PropTypes from 'prop-types';

class Ranking extends React.Component {
  toStart = () => {
    const { history } = this.props;
    history.push('/');
  };

  render() {
    const ranking = JSON.parse(localStorage.getItem('ranking'));
    const sortRanking = ranking.sort((a, b) => b.score - a.score);
    return (
      <>
        <div>
          <span
            data-testid="ranking-title"
          >
            Ranking
          </span>
        </div>
        <table>
          <thead>
            <tr>
              <th className="th">email</th>
              <th className="th">name</th>
              <th className="th">score</th>
              <th className="th">assertions</th>
            </tr>
          </thead>
          <tbody>
            { sortRanking.map((el, i) => (
              <tr key={ i }>
                <td><img src={ el.email } alt={ el.userName } /></td>
                <td data-testid={ `player-name-${i}` }>{ el.userName }</td>
                <td data-testid={ `player-score-${i}` }>{ el.score }</td>
                <td>{ el.assertions }</td>

              </tr>
            ))}
          </tbody>
        </table>
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
