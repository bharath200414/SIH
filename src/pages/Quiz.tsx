import React, { useState } from "react";
import "./QuizPage.css"; // optional custom styles

type Question = {
  question: string;
  options: string[];
  correctAnswer: string;
};

const quizData: Question[] = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "Madrid", "Berlin", "Rome"],
    correctAnswer: "Paris",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Venus", "Mars", "Jupiter", "Saturn"],
    correctAnswer: "Mars",
  },
  {
    question: "Which language runs in a web browser?",
    options: ["Java", "Python", "C", "JavaScript"],
    correctAnswer: "JavaScript",
  },
];

const QuizPage: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
  };

  const handleNext = () => {
    if (selectedOption === quizData[currentQuestion].correctAnswer) {
      setScore((prev) => prev + 1);
    }

    if (currentQuestion + 1 < quizData.length) {
      setCurrentQuestion((prev) => prev + 1);
      setSelectedOption(null);
    } else {
      setShowResult(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedOption(null);
    setScore(0);
    setShowResult(false);
  };

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4 display-5">📝 Take a Quiz</h2>
      {!showResult ? (
        <div className="card shadow p-4 mb-3">
          <h4 className="mb-3">{quizData[currentQuestion].question}</h4>
          <div className="list-group">
            {quizData[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                className={`list-group-item list-group-item-action ${
                  selectedOption === option ? "active" : ""
                }`}
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </button>
            ))}
          </div>
          <button
            className="btn btn-primary mt-3"
            onClick={handleNext}
            disabled={!selectedOption}
          >
            {currentQuestion + 1 === quizData.length ? "Finish" : "Next"}
          </button>
        </div>
      ) : (
        <div className="card shadow p-4 text-center">
          <h3>Your Score: {score} / {quizData.length}</h3>
          <p className="lead">{score === quizData.length ? "🎉 Perfect!" : "Good try!"}</p>
          <button className="btn btn-success mt-3" onClick={handleRestart}>
            Try Again
          </button>
        </div>
      )}
    </div>
  );
};

export default QuizPage;
