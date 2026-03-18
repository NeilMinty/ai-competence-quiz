import { getLevel, MAX_SCORE, levels } from "../data/levels";

function buildLinkedInPost(score, levelName, percentile) {
  return `I just took the AI Competence Assessment and scored ${Math.round(score)}/${MAX_SCORE} — landing at the ${levelName} level (top ${100 - percentile}% of professionals).

Curious where you sit? ${window.location.href}

#AICompetence #FutureOfWork #AI`;
}

export default function Results({ score, onRetake }) {
  const rounded = Math.round(score * 10) / 10;
  const level = getLevel(rounded);
  const fillPct = Math.min(100, Math.round((rounded / MAX_SCORE) * 100));

  // Position indicator on the level scale
  const levelIndex = levels.findIndex((l) => l.name === level.name);

  function handleShare() {
    const text = encodeURIComponent(buildLinkedInPost(rounded, level.name, level.percentile));
    window.open(`https://www.linkedin.com/feed/?shareActive=true&text=${text}`, "_blank", "noopener");
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
        <button className="share-btn" onClick={handleShare}>
          Share on LinkedIn
        </button>
        <button className="retake-btn" onClick={onRetake}>
          Retake quiz
        </button>
      </div>
    </div>
  );
}
