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
      classGreen: { border: '' },
      classRed: { border: '' },
      seconds: 30,
      // disabled: false,
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

  changeColor = () => {
    this.setState({
      classGreen: { border: '3px solid rgb(6, 240, 15)' },
      classRed: { border: '3px solid red' },
    });
  };

  random = (array) => {
    const shuffledArray = [];
    const usedIndexes = [];

    let i = 0;
    while (i < array.length) {
      const randomNumber = Math.floor(Math.random() * array.length);
      if (!usedIndexes.includes(randomNumber)) {
        shuffledArray.push(array[randomNumber]);
        usedIndexes.push(randomNumber);
        i += 1;
      }
    }
    return shuffledArray;
  };

  // https://openjavascript.info/2022/03/14/how-to-shuffle-an-array-in-javascript/ func abaixo é p construir array

  array = () => {
    const { questions } = this.props;
    const { index } = this.state;
    const arrx = [
      ...questions.results[index].incorrect_answers,
      questions.results[index].correct_answer,
    ];
    return arrx;
  };

  render() {
    const { questions, history } = this.props;
    const { classGreen, classRed } = this.state;

    if (questions.response_code !== 0) {
      localStorage.clear();
      history.push('/');
    } else {
      const { index, seconds } = this.state;
      const array = this.array();
      const randomx = this.random(array);
      // const { results } = data;
      // const { index } = this.state;
      // console.log(questions)
      // const arr = [...questions.results[index].incorrect_answers, questions.results[index].correct_answer];

      // console.log(questions.response_code);

      return (
        <>
          <HeaderGame />
          <div>
            <h1>{ seconds }</h1>
            <p data-testid="question-category">{ questions.results[index].category }</p>
            { questions
              ? <h1 data-testid="question-text">{ questions.results[index].question}</h1>
              : <h1>Loading...</h1>}
          </div>
          <div data-testid="answer-options">
            { randomx.map((answer, i) => (
              <button
                type="button"
                disabled={ seconds === 0 }
                key={ i }
                style={ answer === questions.results[index].correct_answer
                  ? classGreen : classRed }
                data-testid={ answer === questions.results[index].correct_answer
                  ? 'correct-answer'
                  : `wrong-answer-${questions.results[index]
                    .incorrect_answers
                    .indexOf(answer)}` }
                onClick={ this.changeColor }
              >
                {answer}
              </button>
            ))}
          </div>
        </>
      );
    }
  }
}
ScreenGame.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  questions: PropTypes.shape({
    response_code: PropTypes.number,
    results: PropTypes.arrayOf(
      PropTypes.shape({
        question: PropTypes.string,
        incorrect_answers: PropTypes.arrayOf(PropTypes.string),
        correct_answer: PropTypes.string,
        category: PropTypes.string,
      }),
    ),
  }).isRequired,
};
const mapStateToProps = (state) => ({
  questions: state.catchQuestions.questions,
});

export default connect(mapStateToProps)(ScreenGame);
