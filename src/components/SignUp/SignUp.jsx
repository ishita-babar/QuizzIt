import React, { useState } from "react";
import styles from "./SignUp.module.css";
import { getImageUrl } from "../../utils";

const SignUp = ({ onSignUp }) => {
  const [action, setAction] = useState("Sign Up");
  const [email, setEmail] = useState("");
  const [changePasswordMode, setChangePasswordMode] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignUp = () => {
    onSignUp(email);
  };

  const handleChangePasswordClick = () => {
    setChangePasswordMode(true);
  };

  const handleChangePassword = () => {
    // You can add logic here to update the password
    // For the sake of simplicity, we'll just log the new password
    console.log("New Password:", newPassword);
    // After updating the password, you can set changePasswordMode to false
    setChangePasswordMode(false);
  };

  return (
    <section className={styles.container}>
      <div>
        <a className={styles.title} href="/">
          QuizzIt!
        </a>
        <div className={styles.header}>
          <div className={styles.text}>{action}</div>
          <div className={styles.underline}></div>
        </div>
        {action === "Sign Up" && (
          <div className={styles.inputs}>
            <div className={styles.input}>
              <img src={getImageUrl("user.png")} alt="user-icon" />
              <input type="text" placeholder="Username" />
            </div>
          </div>
        )}
        <div className={styles.inputs}>
          <div className={styles.input}>
            <img src={getImageUrl("email.png")} alt="email-icon" />
            <input
              type="email"
              placeholder="Email-ID"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div className={styles.inputs}>
          <div className={styles.input}>
            <img src={getImageUrl("password.png")} alt="password-icon" />
            <input type="password" placeholder="Password" />
          </div>
        </div>
        {action === "Sign Up" ? (
          <div></div>
        ) : (
          <div className={styles["forgot-password"]}>
            Forgot Password?{" "}
            <span onClick={handleChangePasswordClick}>Click Here!</span>
          </div>
        )}
        {changePasswordMode && (
          <div className={styles.changePassword}>
            <input
              type="password"
              placeholder="New Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <button onClick={handleChangePassword}>Change Password</button>
          </div>
        )}
        <div className={styles["submit-container"]}>
          <div
            className={action === "Login" ? styles.gray : styles.submit}
            onClick={() => {
              setAction("Sign Up");
            }}
          >
            Sign Up
          </div>
          <div
            className={action === "Sign Up" ? styles.gray : styles.submit}
            onClick={() => {
              setAction("Login");
            }}
          >
            Login
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
