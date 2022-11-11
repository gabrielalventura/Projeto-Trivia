import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import md5 from 'crypto-js/md5';

class HeaderGame extends React.Component {
  state = {
    endPoint: '',
  };

  componentDidMount() {
    const { email } = this.props;
    const hash = md5(email).toString();
    // console.log(hash);
    this.setState({ endPoint: `https://www.gravatar.com/avatar/${hash}` });
  }

  render() {
    const { userName, score } = this.props;
    const { endPoint } = this.state;
    return (
      <header>
        <img
          data-testid="header-profile-picture"
          alt="user-game"
          src={ endPoint }
        />
        <h2
          data-testid="header-player-name"
        >
          { userName }
        </h2>
        <h2
          data-testid="header-score"
        >
          {score}
        </h2>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  userName: state.userLogin.userName,
  email: state.userLogin.email,
  score: state.player.score,
});

HeaderGame.propTypes = {
  userName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
};

export default connect(mapStateToProps)(HeaderGame);
