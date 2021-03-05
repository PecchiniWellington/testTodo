import React, { Component } from "react";
import "./taskList.style.scss";
import Container from "../../components/container/container.component";
import TaskCard from "../../components/taskCard/taskCard.component";
import { CustomButton } from "../../components/custom-button/custom-button.component";
import { connect } from "react-redux";

import {
  fetchTaskStart,
  hideToastAction,
  removeTaskStart,
} from "../../store/taskList/taskList.actions";
import { Toast } from "../../components/toast/toast.component";
import Pagination from "../../components/pagination/pagination.component";
import { withRouter } from "react-router";

export class TaskList extends Component {
  componentDidMount() {
    if (this.props.tasks) {
      this.props.fetchTasks(this.props.page);
    }
  }
  checkPage = (p) => {
    this.props.fetchTasks(p);
  };
  rend = () => {
    if (this.props.tasks.results) {
      return this.props.tasks.results.map((card, i) => {
        return (
          <TaskCard
            id={card._id}
            key={i}
            title={card.title}
            description={card.description}
            status={card.status}
            date={card.date}
            removeTask={this.props.removeTask}
          />
        );
      });
    } else {
      return [];
    }
  };
  paginazione = () => {
    if (this.props.tasks) {
      return <Pagination callBack={this.checkPage} tasks={this.props.tasks} />;
    }
  };

  // TODO: create due tipi di paginazione 1) quello con previous e next e l'altro con la lista completa
  render() {
    const { successMessage, errorMessage } = this.props;
    return (
      <div>
        <h1 className="title-taskList">Task List</h1>
        <Container customClassName="taskListContainer">
          {this.rend()}
          {this.paginazione()}
          <Toast showToast={this.props.showToastProp}>
            {successMessage || errorMessage}
          </Toast>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  tasks: state.task.tasks,
  page: state.common.page,
  isFetching: state.task.isFetching,
  showToastProp: state.task.showToast,
  successMessage: state.task.successMessage,
  errorMessage: state.task.errorMessage,
});
const mapDispatchToProps = (dispatch) => ({
  fetchTasks: (page) => dispatch(fetchTaskStart(page)),
  removeTask: (id) => dispatch(removeTaskStart(id)),
  hideToast: () => dispatch(hideToastAction()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(TaskList));
