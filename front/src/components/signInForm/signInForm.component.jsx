import React from "react";
import { withRouter } from "react-router";

const SignInForm = ({ handleChange, sendSignIn }) => {
  return (
    <form>
      <div className="input-cont">
        <input type="text" name="email" onChange={handleChange} />
        <label>Email</label>
        <div className="border1"></div>
      </div>
      <div className="input-cont">
        <input type="password" name="password" onChange={handleChange} />
        <label>Password</label>
        <div className="border2"></div>
      </div>
      <span className="check">
        <input type="checkbox" />
        <label>Remember Me</label>
      </span>
      <a href="#">Forgot Password</a>
      <div className="clear"></div>
      <button type="button" onClick={sendSignIn}>
        Sign Me In
      </button>
    </form>
  );
};
export default withRouter(SignInForm);
