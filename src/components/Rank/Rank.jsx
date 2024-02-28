import React, { useState } from 'react';
import styles from './Rank.module.css';

const QuizRankCalculator = () => {
  const [score, setScore] = useState('');
  const [rank, setRank] = useState('');

  const handleInputChange = (e) => {
    setScore(e.target.value);
  };

  const calculateRank = () => {
    if (score === '') {
      alert('Please enter your score.');
      return;
    }

    const scoreValue = parseInt(score);

    if (isNaN(scoreValue) || scoreValue < 0 || scoreValue > 100) {
      alert('Please enter a valid score between 0 and 100.');
      return;
    }

    if (scoreValue >= 90) {
      setRank('A+');
    } else if (scoreValue >= 80) {
      setRank('A');
    } else if (scoreValue >= 70) {
      setRank('B');
    } else if (scoreValue >= 60) {
      setRank('C');
    } else if (scoreValue >= 50) {
      setRank('D');
    } else {
      setRank('F');
    }
  };

  return (
    <section id="rank">
      <a className={styles.title} href="/">
        QuizzIt!
      </a>
      <div className={styles.rankCalculator}>
        <h2>Quiz Rank Calculator</h2>
        <div>
          <label htmlFor="score">Enter Your Score (0-100):</label>
          <input
            type="number"
            id="score"
            value={score}
            onChange={handleInputChange}
            min="0"
            max="100"
            required
          />
        </div>
        <button className={styles.calculateButton} onClick={calculateRank}>
          Calculate Rank
        </button>
        {rank && (
          <div className={styles.rankResult}>
            <h3>Your Rank: {rank}</h3>
          </div>
        )}
      </div>
    </section>
  );
};

export default QuizRankCalculator;
