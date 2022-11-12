import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

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

  render() {
    return (
      <div>
        <h1 data-testid="feedback-text">
          { this.message() }

        </h1>
      </div>
    );
  }
}

Feedback.propTypes = {
  assertions: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  assertions: state.player.assertions,
});

export default connect(mapStateToProps)(Feedback);
