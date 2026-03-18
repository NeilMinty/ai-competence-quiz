import { useState } from "react";
import { questions, WEIGHTED_QUESTIONS } from "../data/questions";
import { calculateScore } from "../utils/scoring";
import ProgressBar from "./ProgressBar";

export default function Quiz({ onComplete }) {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [selected, setSelected] = useState(null);

  const question = questions[current];
  const isWeighted = WEIGHTED_QUESTIONS.includes(current);
  const total = questions.length;

  function handleSelect(score) {
    setSelected(score);
  }

  function handleNext() {
    if (selected === null) return;
    const newAnswers = [...answers, selected];
    if (current + 1 === total) {
      onComplete(calculateScore(newAnswers));
    } else {
      setAnswers(newAnswers);
      setCurrent((c) => c + 1);
      setSelected(null);
    }
  }

  return (
    <div className="quiz-container">
      <ProgressBar current={current + 1} total={total} />

      <div className="question-header">
        <span className="question-number">Question {current + 1}</span>
        {isWeighted && <span className="weighted-badge">Key question</span>}
      </div>

      <h2 className="question-text">{question.text}</h2>

      <div className="options-list">
        {question.options.map((opt) => (
          <button
            key={opt.score}
            className={`option-btn${selected === opt.score ? " selected" : ""}`}
            onClick={() => handleSelect(opt.score)}
          >
            <span className="option-label">{opt.label}</span>
            <span className="option-text">{opt.text}</span>
          </button>
        ))}
      </div>

      <button
        className="next-btn"
        onClick={handleNext}
        disabled={selected === null}
      >
        {current + 1 === total ? "See my results" : "Next"}
      </button>
    </div>
  );
}
