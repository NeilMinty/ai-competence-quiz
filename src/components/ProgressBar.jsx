export default function ProgressBar({ current, total }) {
  const pct = Math.round((current / total) * 100);
  return (
    <div className="progress-track" role="progressbar" aria-valuenow={current} aria-valuemax={total}>
      <div className="progress-fill" style={{ width: `${pct}%` }} />
      <span className="progress-label">{current} / {total}</span>
    </div>
  );
}
