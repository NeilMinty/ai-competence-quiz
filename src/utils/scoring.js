import { WEIGHTED_QUESTIONS } from "../data/questions";

export function calculateScore(answers) {
  return answers.reduce((total, score, index) => {
    const weight = WEIGHTED_QUESTIONS.includes(index) ? 1.5 : 1;
    return total + score * weight;
  }, 0);
}
