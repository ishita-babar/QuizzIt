import React, { useState, useEffect } from "react";
import styles from "./Take.module.css";
import questions from "../Question/Question";

const TakeQuiz = () => {
  const [category, setCategory] = useState("");
  const [questionType, setQuestionType] = useState("");
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [wrongAnswers, setWrongAnswers] = useState(0);
  const [timeLeft, setTimeLeft] = useState(10); // Timer for each question
  const [timerRunning, setTimerRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (timerRunning) {
      interval = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [timerRunning]);

  useEffect(() => {
    if (timeLeft === 0) {
      handleAnswer(""); // Automatically submit blank answer when time is up
    }
  }, [timeLeft]);

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleQuestionTypeChange = (e) => {
    setQuestionType(e.target.value);
  };

  const startQuiz = () => {
    setQuizStarted(true);
    setTimerRunning(true);
  };

  const handleAnswer = (answer) => {
    setTimerRunning(false);
    const currentQuestion = questions[category][questionType][currentQuestionIndex];
    if (answer === currentQuestion.correct_answer) {
      setScore(score + 1);
      setCorrectAnswers(correctAnswers + 1);
    } else {
      setWrongAnswers(wrongAnswers + 1);
    }

    if (currentQuestionIndex === questions[category][questionType].length - 1) {
      setQuizStarted(false);
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setTimeLeft(10);
      setTimerRunning(true); 
    }
  };

  const tryAgain = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setCorrectAnswers(0);
    setWrongAnswers(0);
    setQuizStarted(false);
    setCategory("");
    setQuestionType("");
  };

  return (
    <div>
      <a className={styles.title} href="/">
        QuizzIt!
      </a>
      <div className={styles.quizFormContainer}>
        {!quizStarted && score === 0 ? (
          <div className={styles.quizForm}>
            <h2 className={styles.heading}>Select Quiz Options</h2>
            <div className={styles.formGroup}>
              <label htmlFor="category" className={styles.label}>
                Category:
              </label>
              <select
                id="category"
                value={category}
                onChange={handleCategoryChange}
                className={styles.select}
              >
                <option value="">Select Category</option>
                {Object.keys(questions).map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="questionType" className={styles.label}>
                Question Type:
              </label>
              <select
                id="questionType"
                value={questionType}
                onChange={handleQuestionTypeChange}
                className={styles.select}
              >
                <option value="">Select Question Type</option>
                {category &&
                  Object.keys(questions[category]).map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
              </select>
            </div>
            <button
              onClick={startQuiz}
              disabled={!category || !questionType}
              className={styles.button}
            >
              Start Quiz
            </button>
          </div>
        ) : (
          <div>
            <div className={styles.quizContainer}>
              <h2 className={styles.heading}>Quiz</h2>
              <div className={styles.question}>
                {questions[category][questionType][currentQuestionIndex].question}
              </div>
              <div className={styles.options}>
                {questions[category][questionType][currentQuestionIndex].options.map(
                  (option, index) => (
                    <button
                      key={index}
                      onClick={() => handleAnswer(option)}
                      className={styles.option}
                    >
                      {option}
                    </button>
                  )
                )}
              </div>
              <p className={`${styles.timer} ${timeLeft <= 3 ? styles.red : timeLeft <= 7 ? styles.yellow : styles.green}`}>Time Left: {timeLeft}</p>
            </div>
            {!quizStarted && score !== 0 && (
              <div className={styles.score}>
                <p>Score: {score}</p>
                <p>Correct Answers: {correctAnswers}</p>
                <p>Wrong Answers: {wrongAnswers}</p>
                <button onClick={tryAgain} className={styles.button}>
                  Try Again
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default TakeQuiz;


