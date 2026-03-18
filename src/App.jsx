import { useState } from "react";
import Intro from "./components/Intro";
import Quiz from "./components/Quiz";
import Results from "./components/Results";

const SCREEN = { INTRO: "intro", QUIZ: "quiz", RESULTS: "results" };

export default function App() {
  const [screen, setScreen] = useState(SCREEN.INTRO);
  const [finalScore, setFinalScore] = useState(null);

  function handleStart() {
    setScreen(SCREEN.QUIZ);
  }

  function handleComplete(score) {
    setFinalScore(score);
    setScreen(SCREEN.RESULTS);
  }

  function handleRetake() {
    setFinalScore(null);
    setScreen(SCREEN.INTRO);
  }

  return (
    <div className="app">
      {screen === SCREEN.INTRO && <Intro onStart={handleStart} />}
      {screen === SCREEN.QUIZ && <Quiz onComplete={handleComplete} />}
      {screen === SCREEN.RESULTS && <Results score={finalScore} onRetake={handleRetake} />}
    </div>
  );
}
