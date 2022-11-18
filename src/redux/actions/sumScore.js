export const SUM_SCORE = 'SUM_SCORE';

export const sumScoreAction = (assertions, score) => ({
  type: SUM_SCORE,
  assertions,
  score,
});

export const RESET = 'RESET';

export const resetScore = () => ({
  type: RESET,
});
