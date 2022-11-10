import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { getUser } from '../redux/actions/userLogin';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      userName: '',
      email: '',
      disabled: true,
    };
  }

  onInputChange = ({ target: { value, name } }) => {
    const { email, userName } = this.state;
    this.setState({ [name]: value });
    if (userName && email) {
      this.setState({ disabled: false });
    } else {
      this.setState({ disabled: true });
    }
  };

  getTokens = async () => {
    const { history } = this.props;
    const response = await fetch('https://opentdb.com/api_token.php?command=request');
    const tokensAPI = await response.json();
    // console.log(tokensAPI);
    // return tokensAPI;
    localStorage.setItem('token', tokensAPI.token);
    const { dispatch } = this.props;
    const { userName, email } = this.state;
    dispatch(getUser(userName, email));
    history.push('/game');
  };

  render() {
    const { email, userName, disabled } = this.state;
    return (

      <form>
        <input
          type="email"
          name="email"
          value={ email }
          data-testid="input-gravatar-email"
          onChange={ this.onInputChange }
          placeholder="email"
        />
        <input
          type="text"
          name="userName"
          value={ userName }
          data-testid="input-player-name"
          onChange={ this.onInputChange }
          placeholder="name"
        />
        <button
          type="button"
          data-testid="btn-play"
          disabled={ disabled }
          onClick={ () => this.getTokens() }
        >
          Play
        </button>
      </form>

    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect(null)(Login);
