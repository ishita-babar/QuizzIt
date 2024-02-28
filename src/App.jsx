import styles from "./App.module.css";
import SignUp from "./components/SignUp/SignUp";
import { HashRouter, Route, Routes } from 'react-router-dom';
import Create from "./components/Create/Create";
import Header from "./components/Header/Header";
import Take from "./components/Take/Take";
import Join from "./components/Join/Join";
import React, { useState } from "react";
import Rank from "./components/Rank/Rank";
import FAQ from "./components/FAQ/FAQ";

const App = () => {
  const [email, setEmail] = useState("");

  const handleSignUp = (userEmail) => {
    setEmail(userEmail);
  };

  return (
    <div className={styles.App}> 
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/signup" element={<SignUp onSignUp={handleSignUp} />} />
        <Route path="/createquiz" element={<Create userEmail={email} />} />
        <Route path="/takequiz" element={<Take />} />
        <Route path="/joinquiz" element={<Join />} />
        <Route path="/rank" element={<Rank />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
    </div>
  );
}

export default App;




