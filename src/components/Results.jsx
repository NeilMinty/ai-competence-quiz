import { useState } from "react";
import { getLevel, MAX_SCORE, levels } from "../data/levels";

const QUIZ_URL = "https://ai-competence-quiz.vercel.app";

function buildLinkedInPost(score, levelName, percentile) {
  return `I just took the AI Competence Assessment and scored ${Math.round(score)}/${MAX_SCORE} — landing at the ${levelName} level (top ${100 - percentile}% of professionals).

Curious where you sit? Take the quiz here:
${QUIZ_URL}

#AICompetence #FutureOfWork #AI`;
}

export default function Results({ score, onRetake }) {
  const [copied, setCopied] = useState(false);

  const rounded = Math.round(score * 10) / 10;
  const level = getLevel(rounded);
  const levelIndex = levels.findIndex((l) => l.name === level.name);

  async function handleShare() {
    const post = buildLinkedInPost(rounded, level.name, level.percentile);
    try {
      await navigator.clipboard.writeText(post);
      setCopied(true);
      setTimeout(() => setCopied(false), 4000);
    } catch {
      // clipboard unavailable — open LinkedIn anyway
    }
    window.open(
      `https://www.linkedin.com/feed/?shareActive=true&text=${encodeURIComponent(post)}`,
      "_blank",
      "noopener"
    );
  }

  return (
    <div className="results-container">
      <div className="results-score-block">
        <p className="results-score-label">Your score</p>
        <p className="results-score-value">
          {rounded}<span className="results-score-max">/{MAX_SCORE}</span>
        </p>
      </div>

      <div className="results-level-block">
        <p className="results-level-name">{level.name}</p>
        <p className="results-level-desc">{level.description}</p>
      </div>

      {/* Percentile bar */}
      <div className="percentile-section">
        <div className="percentile-track">
          <div className="percentile-fill" style={{ width: `${level.percentile}%` }} />
          <div className="percentile-marker" style={{ left: `${level.percentile}%` }} />
        </div>
        <p className="percentile-label">
          Above approximately <strong>{level.percentile}%</strong> of professionals
        </p>
      </div>

      {/* Level ladder */}
      <div className="level-ladder">
        {levels.map((l, i) => (
          <div
            key={l.name}
            className={`level-pip${i === levelIndex ? " active" : ""}${i < levelIndex ? " passed" : ""}`}
          >
            <span className="pip-dot" />
            <span className="pip-name">{l.name}</span>
          </div>
        ))}
      </div>

      {/* Next steps */}
      <div className="next-steps-section">
        <h3 className="next-steps-title">Your next steps</h3>
        <ol className="next-steps-list">
          {level.nextSteps.map((step, i) => (
            <li key={i} className="next-steps-item">{step}</li>
          ))}
        </ol>
      </div>

      {/* Actions */}
      <div className="results-actions">
        <div className="share-wrapper">
          <button className="share-btn" onClick={handleShare}>
            Share on LinkedIn
          </button>
          {copied && (
            <p className="share-hint">Post copied to clipboard — paste it into LinkedIn with Cmd+V</p>
          )}
        </div>
        <button className="retake-btn" onClick={onRetake}>
          Retake quiz
        </button>
      </div>
    </div>
  );
}
