import React from "react";
import { Link, NavLink, withRouter } from "react-router-dom";
import "./nav.style.scss";
import { connect } from "react-redux";
import { signOutStart } from "../../store/authUser/authUser.action";

function Nav({ onIsLogged, location, onLogOut }) {
  const token = localStorage.getItem("Authorization");
  return (
    <nav className="Nav">
      <ul>
        <li>
          <NavLink
            activeClassName="selected"
            className="Nav__link"
            to="/create-task"
          >
            Create
          </NavLink>
        </li>
        <li>
          <NavLink
            activeClassName="selected"
            className="Nav__link"
            to="/task-list"
          >
            Task List
          </NavLink>
        </li>
        {location.pathname === "/signIn" ? null : (
          <li className="signIn-SignOut">
            {!onIsLogged ? (
              <Link
                className={`Nav__link  signIn`}
                to={`${!onIsLogged ? "/signIn" : location.pathname}`}
              >
                Sign In
              </Link>
            ) : (
              <button
                className={`Nav__link  signOut`}
                onClick={() => onLogOut(token)}
              >
                Sign Out
              </button>
            )}
          </li>
        )}
      </ul>
    </nav>
  );
}

const mapStateToProps = (state) => ({
  onIsLogged: state.auth.isLoggedIn,
});

const mapDispatchToProps = (dispatch) => ({
  onLogOut: (token) => dispatch(signOutStart(token)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Nav));
