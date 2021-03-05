import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import "./pagination.style.scss";
import { fetchTaskStart } from "../../store/taskList/taskList.actions";
const Pagination = ({ tasks, callBack }) => {
  const [page, setPage] = useState(1);
  const sendPage = (page) => {
    if (tasks.next || tasks.previous) {
      setPage(page);
      callBack(page);
    }
  };
  const pag = () => {
    if (tasks.next && tasks.previous) {
      return (
        <>
          <button onClick={() => sendPage(page - 1)} className="normal">
            {tasks.previous.page}
          </button>
          <button disabled={true} className="active">
            {tasks.next.page - 1}
          </button>
          <button onClick={() => sendPage(page + 1)} className="normal">
            {tasks.next.page}
          </button>
        </>
      );
    } else if (tasks.previous) {
      return (
        <>
          <button onClick={() => sendPage(page - 1)} className="normal">
            {tasks.previous.page}
          </button>
          <button disabled={true} className="active">
            {tasks.previous.page + 1}
          </button>
        </>
      );
    } else if (tasks.next) {
      return (
        <>
          <button disabled={true} className="active">
            {tasks.next.page - 1}
          </button>
          <button onClick={() => sendPage(page + 1)} className="normal">
            {tasks.next.page}
          </button>
        </>
      );
    } else {
      return;
    }
  };

  return <div className="pagination">{pag()}</div>;
};

export default connect(null, null)(Pagination);
