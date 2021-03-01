import React from "react";
import "./taskCard.style.scss";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

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
  return (
    <div className='chip'>
      <span
        className='closebtn'
        onClick={() => {
          removeTask(id);
        }}>
        &times;
      </span>
      {/*  <img
        src='./christopher-campbell-rDEOVtE7vOs-unsplash.jpg'
        alt='Person'
        width='96'
        height='96'
      /> */}
      <div>
        <h1>{title}</h1>
        <div>{description}</div>
        <div>{status}</div>
        <div>{date}</div>

        <CustomButton
          children='modify'
          type='button'
          onClick={() => history.push(`/update-task/${id}`)}
        />
      </div>
    </div>
  );
};

export default withRouter(TaskCard);
