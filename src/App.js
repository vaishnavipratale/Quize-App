import React, { useState } from 'react';
import './App.css';

function App() {
  const questions = [
    {
      question: 'What planet is closest to the sun?',
      options: ['Jupiter', 'Mercury', 'Mars', 'Earth'],
      answer: 'Mercury'
    },
    {
      question: 'How many dots appear on a pair of dice? ',
      options: ['36', '42', '52', '62'],
      answer: '42'
    },
    {
      question: 'Who wrote "To Kill a Mockingbird"?',
      options: ['Harper Lee', 'Mark Twain', 'Charles Dickens', 'J.K. Rowling'],
      answer: 'Harper Lee'
    }
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerOptionClick = (selectedAnswer) => {
    if (selectedAnswer === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const handleNextQuestion = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0); // Reset currentQuestion to 0
    setScore(0);
    setShowScore(false);
  };

  return (
    <div className="App">
      {showScore ? (
        <div className="score-section">
          <h2>You scored {score} out of {questions.length}</h2>
          <button onClick={restartQuiz}>Restart Quiz</button>
        </div>
      ) : (
        <>
          <div className="question-section">
            <h2>Question {currentQuestion + 1}/{questions.length}</h2>
            <div className="question-text">{questions[currentQuestion].question}</div>
          </div>
          <div className="answer-section">
            {questions[currentQuestion].options.map((option) => (
              <button key={option} onClick={() => handleAnswerOptionClick(option)}>
                {option}
              </button>
            ))}
          </div>
          <button onClick={handleNextQuestion} className="next-button">
            Next Question
          </button>
        </>
      )}
    </div>
  );
}

export default App;
