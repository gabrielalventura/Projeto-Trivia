import React from 'react';
import HeaderGame from '../components/HeaderGame';

class Feedback extends React.Component {
  render() {
    return (
      <div>
        <header>
          <HeaderGame />
        </header>
        <h1 data-testid="feedback-text">
          FEEDBACK
        </h1>
      </div>
    );
  }
}

export default Feedback;
