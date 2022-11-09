import React from 'react';
import { connect } from 'react-redux';

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

  render() {
    const { email, userName, disabled } = this.state;
    return (
      <>
        <h1>Xablau</h1>
        <form>
          <input
            type="email"
            name="email"
            value={ email }
            data-testid="input-gravatar-email"
            onChange={ this.onInputChange }
          />
          <input
            type="text"
            name="userName"
            value={ userName }
            data-testid="input-player-name"
            onChange={ this.onInputChange }
          />
          <button
            type="button"
            data-testid="btn-play"
            disabled={ disabled }
          >
            Play
          </button>
        </form>

      </>

    );
  }
}

export default connect()(Login);
