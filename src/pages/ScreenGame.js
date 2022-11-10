import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import HeaderGame from '../components/HeaderGame';
import { getQuestions } from '../redux/actions/questions';
// import data from '../servicesapi';

class ScreenGame extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     index: ,
  //   };
  // }

  async componentDidMount() {
    await this.getQuestions();
  }

  getQuestions = async () => {
    const { dispatch } = this.props;
    const token = localStorage.getItem('token');
    const response = await fetch(
      `https://opentdb.com/api.php?amount=5&token=${token}`,
    );
    const questionsApi = await response.json();
    // console.log(questionsApi);
    dispatch(getQuestions(questionsApi));
  };

  render() {
    const { questions } = this.props;
    // const { results } = data;
    // const { index } = this.state;
    // console.log(questions);
    return (
      <>
        <HeaderGame />
        <div>
          { questions ? <h1>{ results[0].question}</h1> : '' }

          {/* {results[0].type === 'multiple' ? (
            <>

              <button type="button">{ results[0].correct_answer }</button>
              <button type="button">{ results[0].incorrect_answers[0] }</button>
              <button type="button">{ results[0].incorrect_answers[1] }</button>
              <button type="button">{ results[0].incorrect_answers[2] }</button>

            </>
          ) : (
            <>
              <button type="button">{ results[0].correct_answer }</button>
              <button type="button">{ results[0].incorrect_answers[0] }</button>
            </>
          )} */}
        </div>
      </>
    );
  }
}
ScreenGame.propTypes = {
  dispatch: PropTypes.func.isRequired,
  questions: PropTypes.shape({
    results: PropTypes.arrayOf(
      PropTypes.shape({
        question: PropTypes.string,
      }),
    ),
  }).isRequired,
};
const mapStateToProps = (state) => ({
  questions: state.catchQuestions.questions,
});

export default connect(mapStateToProps)(ScreenGame);
