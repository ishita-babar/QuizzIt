import React, { useState } from 'react';
import styles from './FAQ.module.css';

const FAQ = () => {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);

  const toggleOpen1 = () => setIsOpen1(!isOpen1);
  const toggleOpen2 = () => setIsOpen2(!isOpen2);
  const toggleOpen3 = () => setIsOpen3(!isOpen3);
  const toggleOpen4 = () => setIsOpen4(!isOpen4);
  const toggleOpen5 = () => setIsOpen5(!isOpen5);

  return (
    <div className={styles.container}>
      <a className={styles.title} href="/">
        QuizzIt!
      </a>
      <h1 className={styles.faq}>Frequently Asked Questions</h1>
      <div className={styles.faqItem}>
        <div className={styles.questionContainer} onClick={toggleOpen1}>
          <h2 className={styles.question}>What is QuizzIt?</h2>
          <span className={styles.arrow}>{isOpen1 ? '-' : '+'}</span>
        </div>
        {isOpen1 && (
          <p className={styles.answer}>
            QuizzIt is an online platform where you can create, join, and take quizzes on various topics.
          </p>
        )}
      </div>
      <div className={styles.faqItem}>
        <div className={styles.questionContainer} onClick={toggleOpen2}>
          <h2 className={styles.question}>What is Create Quiz option?</h2>
          <span className={styles.arrow}>{isOpen2 ? '-' : '+'}</span>
        </div>
        {isOpen2 && (
          <p className={styles.answer}>
            Create Quiz option enables you to create quizzes. You can choose between different question types such as multiple choice, true/false, and short answer. Additionally, you can set a timer for the quiz and share the quiz link with others.
          </p>
        )}
      </div>
      <div className={styles.faqItem}>
        <div className={styles.questionContainer} onClick={toggleOpen3}>
          <h2 className={styles.question}>What is Join Quiz option?</h2>
          <span className={styles.arrow}>{isOpen3 ? '-' : '+'}</span>
        </div>
        {isOpen3 && (
          <p className={styles.answer}>
            Join Quiz option enables you to join quizzes by clicking on a link provided by the site. You can then attempt the quiz.
          </p>
        )}
      </div>
      <div className={styles.faqItem}>
        <div className={styles.questionContainer} onClick={toggleOpen4}>
          <h2 className={styles.question}>What is Take Quiz option?</h2>
          <span className={styles.arrow}>{isOpen4 ? '-' : '+'}</span>
        </div>
        {isOpen4 && (
          <p className={styles.answer}>
            Take Quiz option enables you to take quizzes with random questions. You can choose the category and type of quiz, and it will show your score, correct answers, and wrong answers at the end.
          </p>
        )}
      </div>
      <div className={styles.faqItem}>
        <div className={styles.questionContainer} onClick={toggleOpen5}>
          <h2 className={styles.question}>What is Rank option?</h2>
          <span className={styles.arrow}>{isOpen5 ? '-' : '+'}</span>
        </div>
        {isOpen5 && (
          <p className={styles.answer}>
            Rank option allows you to see your rank compared to other users on the platform.
          </p>
        )}
      </div>
      <footer className={styles.footer}>
        <div className={styles.footerLeft}>
          <img src="/title-removebg-preview.png" alt="Quiz Icon" />
        </div>
        <div className={styles.footerRight}>
          <div>
            <h3>About Us</h3>
            <p>
              QuizzIt allows you to create dynamic quizzes for free.
            </p>
          </div>
          <div>
            <h3>Contact</h3>
            <p>
              Phone: +1234567890 <br />
              Email: quiz@quizzit.com
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FAQ;
