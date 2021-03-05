import React, { useState, useEffect } from "react";
import "./signInSignUp.style.scss";
import { connect } from "react-redux";
import { signUpStart, signInStart } from "../../store/authUser/authUser.action";
import { withRouter } from "react-router";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { CustomButton } from "../../components/custom-button/custom-button.component";
import SignInForm from "../../components/signInForm/signInForm.component";
import SignUpForm from "../../components/signUpForm/signUpForm.component";
const SignInSignUpPage = ({
  history,
  onSignUpStart,
  fetchedUser,
  onSignInStart,
  token,
  onIsLogged,
  location,
  match,
}) => {
  const [user, setUser] = useState({});
  const [logged, setLogged] = useState(true);
  const sendSignIn = () => {
    if (logged) {
      onSignInStart({ user, token });
      history.push("/create-task");
    } else {
      onSignUpStart(user);
    }
  };
  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="log">
      <div className="switchLoginSignUp">
        <CustomButton onClick={() => setLogged(true)}>Login</CustomButton>
        <CustomButton onClick={() => setLogged(false)}>Sign Up</CustomButton>
      </div>
      <h2>{logged ? "Sign In" : "Sign Up"}</h2>
      {logged ? (
        <SignInForm sendSignIn={sendSignIn} handleChange={handleChange} />
      ) : (
        <SignUpForm sendSignUp={sendSignIn} handleChange={handleChange} />
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  fetchedUser: state.auth.user,
  onIsLogged: state.auth.isLoggedIn,
  token: state.auth.token,
});

const mapDispatchToProps = (dispatch) => ({
  onSignUpStart: (user) => dispatch(signUpStart(user)),
  onSignInStart: (user) => dispatch(signInStart(user)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(SignInSignUpPage));
