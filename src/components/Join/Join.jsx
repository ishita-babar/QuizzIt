import React, { useState } from "react";
import styles from "./Join.module.css";

const JoinQuiz = () => {
  const [quizLink, setQuizLink] = useState("");

  const handleJoinQuiz = () => {
    window.location.href = quizLink;
  };

  return (
    <div>
      <a className={styles.title} href="/">
        QuizzIt!
      </a>
      <div className={styles["join-quiz-container"]}>
        <h2>Join Quiz</h2>
        <input
          type="text"
          placeholder="Enter quiz link"
          value={quizLink}
          onChange={(e) => setQuizLink(e.target.value)}
        />
        <button onClick={handleJoinQuiz}>Join Quiz</button>
      </div>
    </div>
  );
};

export default JoinQuiz;
