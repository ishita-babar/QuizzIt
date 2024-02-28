import React, { useState } from "react";
import styles from "./Create.module.css";

const Create = ({ userEmail }) => {
  const [step, setStep] = useState(1);
  const [numQuestions, setNumQuestions] = useState(0);
  const [questionType, setQuestionType] = useState("");
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [timer, setTimer] = useState(10);
  const [quizLink, setQuizLink] = useState("");

  const handleNext = () => {
    setStep(step + 1);
  };

  const handleFinish = () => {
    const quizLink = "https://quizzit.com/quiz"; 
    window.location.href = `mailto:${userEmail}?subject=Quiz%20Link&body=${quizLink}`;
    setQuizLink(quizLink);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <section id="createquiz" className={styles.section}>
            <div className={styles.content}>
              <h2 className={styles.heading}>Step 1: Enter Number of Questions</h2>
              <input
                type="number"
                value={numQuestions}
                onChange={(e) => setNumQuestions(parseInt(e.target.value))}
                className={styles.input}
              />
              <button onClick={handleNext} className={styles.button}>Next</button>
            </div>
          </section>
        );
      case 2:
        return (
          <div className={styles.content}>
            <h2 className={styles.heading}>Step 2: Choose Question Type</h2>
            <select
              value={questionType}
              onChange={(e) => setQuestionType(e.target.value)}
              className={styles.select}
            >
              <option value="">Select Question Type</option>
              <option value="multiple_choice">Multiple Choice</option>
              <option value="true_false">True/False</option>
              <option value="short_answer">Short Answer</option>
            </select>
            <button onClick={handleNext} disabled={!questionType} className={styles.button}>Next</button>
          </div>
        );
      case 3:
        return (
          <div className={styles.content}>
            <h2 className={styles.heading}>Step 3: Enter Questions and Answers</h2>
            {Array.from({ length: numQuestions }).map((_, index) => (
              <div key={index}>
                <h3 className={styles.questionLabel}>Question {index + 1}</h3> 
                <input
                  type="text"
                  placeholder="Enter question"
                  value={questions[index] || ""}
                  onChange={(e) => {
                    const updatedQuestions = [...questions];
                    updatedQuestions[index] = e.target.value;
                    setQuestions(updatedQuestions);
                  }}
                  className={styles.input}
                />
                {questionType === "multiple_choice" && (
                  <div className={styles.multipleChoiceContainer}>
                    <h4 className={styles.questionLabel}>Options:</h4> 
                    {Array.from({ length: 4 }).map((_, optionIndex) => (
                      <input
                        type="text"
                        key={optionIndex}
                        placeholder={`Option ${optionIndex + 1}`}
                        value={answers[index]?.options[optionIndex] || ""}
                        onChange={(e) => {
                          const updatedAnswers = [...answers];
                          if (!updatedAnswers[index]) {
                            updatedAnswers[index] = { options: [] };
                          }
                          updatedAnswers[index].options[optionIndex] =
                            e.target.value;
                          setAnswers(updatedAnswers);
                        }}
                        className={`${styles.input} ${styles.optionInput}`}
                      />
                    ))}
                  </div>
                )}
                <h4 className={styles.questionLabel}>Correct Answer:</h4> 
                <input
                  type="text"
                  placeholder="Enter correct answer"
                  value={answers[index]?.correctAnswer || ""}
                  onChange={(e) => {
                    const updatedAnswers = [...answers];
                    if (!updatedAnswers[index]) {
                      updatedAnswers[index] = { options: [] };
                    }
                    updatedAnswers[index].correctAnswer = e.target.value;
                    setAnswers(updatedAnswers);
                  }}
                  className={styles.input}
                />
              </div>
            ))}
            <button onClick={handleNext} className={styles.button}>Next</button>
          </div>
        );
      case 4:
        return (
          <div className={styles.content}>
            <h2 className={styles.heading}>Step 4: Set Timer for Each Question (in seconds)</h2>
            <input
              type="number"
              value={timer}
              onChange={(e) => setTimer(parseInt(e.target.value))}
              className={styles.input}
            />
            <button onClick={handleFinish} className={styles.button}>Send Link</button> 
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <a className={styles.title} href="/">QuizzIt!</a>
      <div className={styles.quizCreator}>{renderStep()}</div>
    </div>
  );
};

export default Create;
