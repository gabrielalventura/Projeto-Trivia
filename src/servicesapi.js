const data = {
  response_code: 0,
  results: [
    {
      category: 'History',
      type: 'multiple',
      difficulty: 'hard',
      question:
       'The Hagia Sophia was commissioned by which emperor of the Byzantine Empire?',
      correct_answer: 'Justinian I',
      incorrect_answers: [
        'Constantine IV',
        'Arcadius',
        'Theodosius the Great',
      ],
    },
    {
      category: 'Entertainment: Video Games',
      type: 'boolean',
      difficulty: 'medium',
      question: 'The ADAM collecters in the Bioshock series are known as Little Sisters.',
      correct_answer: 'True',
      incorrect_answers: [
        'False',
      ],
    },
    {
      category: 'General Knowledge',
      type: 'boolean',
      difficulty: 'easy',
      question: `&quot;27 Club&quot; is a term used to refer to a list of famous actors,
       musicians, and artists who died at the age of 27.`,
      correct_answer: 'True',
      incorrect_answers: [
        'False',
      ],
    },
    {
      category: 'Entertainment: Music',
      type: 'multiple',
      difficulty: 'hard',
      question: 'Chino Moreno is the lead singer of which alternative metal band?',
      correct_answer: 'Deftones',
      incorrect_answers: [
        'Tool',
        'Korn',
        'Type O Negative',
      ],
    },
    {
      category: 'Sports',
      type: 'multiple',
      difficulty: 'easy',
      question: 'What is the name of Manchester United&#039;s home stadium?',
      correct_answer: 'Old Trafford',
      incorrect_answers: [
        'Anfield',
        'City of Manchester Stadium',
        'St James Park',
      ],
    },
  ],
};

export default data;
