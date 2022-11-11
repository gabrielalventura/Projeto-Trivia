import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import { Redirect } from 'react-router-dom';
import HeaderGame from '../components/HeaderGame';
// import { getQuestions } from '../redux/actions/questions';
// import data from '../servicesapi';

class ScreenGame extends React.Component {
  constructor() {
    super();
    this.state = {
      index: 0,
    };
  }

  /* async componentDidMount() {
    const { history, questions } = this.props;
    if (questions.response_code != 0) {
      localStorage.clear();
      history.push('/');
    }
  } */

  /* getQuestions = async () => {
    const { dispatch } = this.props;
    const token = localStorage.getItem('token');
    const response = await fetch(
      `https://opentdb.com/api.php?amount=5&token=${token}`,
    );
    const questionsApi = await response.json();
    // console.log(questionsApi);
    dispatch(getQuestions(questionsApi));
  }; */

  render() {
    const { questions } = this.props;
    const { index } = this.state;
    // const { results } = data;
    // const { index } = this.state;
    // console.log(questions)
    const arr = [...questions.results[index].incorrect_answers, questions.results[index].correct_answer];

    console.log(questions.response_code);

    return (
      <>
        <HeaderGame />
        <div>
          <p data-testid="question-category">{ questions.results[index].category }</p>
          { questions ? <h1 data-testid="question-text">{ questions.results[0].question}</h1> : <h1>Loading...</h1> }
        </div>
        { arr.map((answer, index) => (
          <button
            type="button"
            key={ index }
            data-testid={ answer === questions.results[index].correct_answer
              ? 'correct_answer'
              : `wrong-answer-${questions.results[index].incorrect_answers.indexOf(answer)}` }
          >
            {answer}
          </button>
        ))}
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
