export default function Intro({ onStart }) {
  return (
    <div className="intro-container">
      <h1 className="intro-title">Where do you actually sit on the AI curve?</h1>
      <p className="intro-subtitle">
        Ten questions. Find out where you sit on the AI capability spectrum — and what to do next.
      </p>
      <ul className="intro-meta">
        <li>~3 minutes</li>
        <li>10 questions, 4 options each</li>
        <li>Personalised next steps</li>
      </ul>
      <button className="start-btn" onClick={onStart}>
        Start assessment
      </button>
    </div>
  );
}
