import "./App.css";
import React, { useEffect } from "react";
import { Link, Switch, Route, Redirect, withRouter } from "react-router";
import Nav from "./components/nav/nav.component";
import TaskList from "./pages/taskPage/taskList.page";
import CreateTaskPage from "./pages/createTask/createTask.page";
import UpdateTaskPage from "./pages/updateTask/updateTask.page";
import SignInSignUpPage from "./pages/signInSignUp/signInSignUp.page";
import { connect } from "react-redux";
import { signInMeStart, checkLogin } from "./store/authUser/authUser.action";

function App({ onIsLogged, onCheckLogin, history, location, token }) {
  useEffect(() => {
    onCheckLogin();
    if (onIsLogged && token !== null) {
      let from;
      if (location.state) {
        from = location.state.from.pathname;
      }
      history.push(from);
    }
    return () => {};
  }, [onIsLogged, token]);
  const PrivateRoute = ({ children, ...rest }) => {
    return (
      <Route
        {...rest}
        render={({ location }) =>
          onIsLogged && token !== null ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/signIn",
                state: { from: location },
              }}
            />
          )
        }
      />
    );
  };

  return (
    <div className="App">
      <Nav />
      <Route path="/signIn">
        <SignInSignUpPage />
      </Route>
      <PrivateRoute path="/task-list">
        <TaskList />
      </PrivateRoute>
      <PrivateRoute path="/create-task">
        <CreateTaskPage />
      </PrivateRoute>
      <PrivateRoute path="/update-task/:id">
        <UpdateTaskPage />
      </PrivateRoute>
    </div>
  );
}
const mapStateToProps = (state) => ({
  onIsLogged: state.auth.isLoggedIn,
  isLoading: state.auth.isLoading,
  token: state.auth.token,
  user: state.auth.user,
});

const mapDispatchToProps = (dispatch) => ({
  onSignInMeStart: () => dispatch(signInMeStart()),
  onCheckLogin: () => dispatch(checkLogin()),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App));
