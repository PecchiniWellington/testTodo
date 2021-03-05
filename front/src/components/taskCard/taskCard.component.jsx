import React from "react";
import "./taskCard.style.scss";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import Moment from "react-moment";

import { CustomButton } from "../custom-button/custom-button.component";

const TaskCard = ({
  title,
  description,
  date,
  status,
  removeTask,
  id,
  history,
}) => {
  const dateToFormat = new Date(date);
  return (
    <div className={`chip ${status}`}>
      <span
        className="closebtn"
        onClick={() => {
          removeTask(id);
        }}
      >
        &times;
      </span>
      {/*  <img
        src='./christopher-campbell-rDEOVtE7vOs-unsplash.jpg'
        alt='Person'
        width='96'
        height='96'
      /> */}
      <span className="card-title">{title.toUpperCase()}</span>
      <span className="card-description">{description}</span>
      <div className={`${status}-card-status-date-container`}>
        <span className="card-status">{status}</span>
        <Moment className="card-date" format="YYYY/MM/DD" date={dateToFormat} />
      </div>
      {/*  <CustomButton
          buttonStyle="modify-button"
          children="modify"
          type="button"
          onClick={() => history.push(`/update-task/${id}`)}
        /> */}
    </div>
  );
};

export default withRouter(TaskCard);
