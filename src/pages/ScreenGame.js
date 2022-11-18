import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import { Redirect } from 'react-router-dom';
import md5 from 'crypto-js/md5';
import HeaderGame from '../components/HeaderGame';
import { sumScoreAction } from '../redux/actions/sumScore';
// import { getQuestions } from '../redux/actions/questions';
// import data from '../servicesapi';

class ScreenGame extends React.Component {
  constructor() {
    super();
    this.state = {
      index: 0,
      classGreen: { border: '' },
      classRed: { border: '' },
      seconds: 30,
      validation: 'correct-answer',
      showBtn: false,
    };
  }

  componentDidMount() {
    const { seconds } = this.state;
    const mil = 1000;
    if (seconds !== 0) {
      this.id = setInterval(() => {
        this.setState((prevState) => ({
          seconds: prevState.seconds - 1,
        }));
      }, mil);
    }
  }

  componentDidUpdate() {
    const { seconds } = this.state;
    if (seconds === 0) {
      // this.setState({
      //   disabled: true,
      // });
      clearInterval(this.id);
    }
  }

  changeColor = ({ target: { id } }) => {
    const { dispatch, questions, assertions, score } = this.props;
    const { index, seconds, validation } = this.state;
    const difs = { hard: 3, medium: 2, easy: 1 };
    if (questions.response_code === 0) {
      const dif = questions.results[index].difficulty;
      const difValue = difs[dif];
      if (id === validation) {
        const base = 10;
        const assert = assertions + 1;
        const scor = score + (base + (seconds * difValue));
        dispatch(sumScoreAction(assert, scor));
      }
    }
    this.setState({
      classGreen: { border: '3px solid rgb(6, 240, 15)' },
      classRed: { border: '3px solid red' },
      showBtn: true,
    });
  };

  changeQuestion = () => {
    const { index } = this.state;
    const magic = 4;
    const { history, userName, email, score, assertions } = this.props;
    const hash = md5(email).toString();
    const url = `https://www.gravatar.com/avatar/${hash}`;
    if (index === magic) {
      history.push('/feedback');
      let store = [];
      const ranking = { userName, assertions, email: url, score };
      let newRanking = [];
      if (localStorage.getItem('ranking')) {
        store = JSON.parse(localStorage.getItem('ranking'));
        newRanking = [...store, ranking];
      }
      if (!localStorage.getItem('ranking')) {
        newRanking = [ranking];
      }
      localStorage.setItem('ranking', JSON.stringify(newRanking));
    }
    this.setState((prevState) => ({
      index: prevState.index + 1,
      seconds: 30,
      classGreen: { border: '' },
      classRed: { border: '' },
    }));
  };

  render() {
    const { questions, history } = this.props;
    const { classGreen, classRed, showBtn } = this.state;

    if (questions.response_code !== 0) {
      localStorage.clear();
      history.push('/');
    } else {
      const { index, seconds, validation } = this.state;
      const { answers } = this.props;

      return (
        <>
          <HeaderGame />
          <div>
            <h1>{seconds}</h1>
            <p data-testid="question-category">{questions.results[index].category}</p>
            {questions
              ? <h1 data-testid="question-text">{questions.results[index].question}</h1>
              : <h1>Loading...</h1>}
          </div>
          <div data-testid="answer-options">
            {answers[index].map((answer, i) => (
              <button
                type="button"
                disabled={ seconds === 0 }
                key={ i }
                id={ answer === questions.results[index].correct_answer
                  ? validation
                  : `wrong-answer-${questions.results[index]
                    .incorrect_answers
                    .indexOf(answer)}` }
                style={ answer === questions.results[index].correct_answer
                  ? classGreen : classRed }
                data-testid={ answer === questions.results[index].correct_answer
                  ? validation
                  : `wrong-answer-${questions.results[index]
                    .incorrect_answers
                    .indexOf(answer)}` }
                onClick={ this.changeColor }
              >
                {answer}
              </button>
            ))}
          </div>
          <div>
            {showBtn
              ? (
                <button
                  type="button"
                  data-testid="btn-next"
                  onClick={ this.changeQuestion }
                >
                  Next
                </button>)
              : ' '}

          </div>
        </>
      );
    }
  }
}
ScreenGame.propTypes = {
  dispatch: PropTypes.func.isRequired,
  assertions: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  userName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  answers: PropTypes.arrayOf().isRequired,
  questions: PropTypes.shape({
    response_code: PropTypes.number,
    results: PropTypes.arrayOf(
      PropTypes.shape({
        question: PropTypes.string,
        incorrect_answers: PropTypes.arrayOf(PropTypes.string),
        correct_answer: PropTypes.string,
        category: PropTypes.string,
        difficulty: PropTypes.string,
      }),
    ),
  }).isRequired,
};
const mapStateToProps = (state) => ({
  questions: state.catchQuestions.questions,
  assertions: state.player.assertions,
  score: state.player.score,
  answers: state.answers.answer,
  userName: state.userLogin.userName,
  email: state.userLogin.email,
});

export default connect(mapStateToProps)(ScreenGame);
