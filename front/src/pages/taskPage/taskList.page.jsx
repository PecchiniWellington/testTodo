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

export class TaskList extends Component {
  componentDidMount() {
    const { fetchTasks } = this.props;
    fetchTasks();
  }

  render() {
    const { tasks, successMessage, errorMessage } = this.props;
    return (
      <div>
        <h1 className='title-taskList'>Task List</h1>
        <Container customClassName='taskListContainer'>
          {tasks
            ? tasks.map((card, i) => {
                return (
                  <TaskCard
                    id={card._id}
                    key={i}
                    title={card.title}
                    description={card.description}
                    status={card.statuts}
                    date={card.date}
                    removeTask={this.props.removeTask}
                  />
                );
              })
            : []}
          <Toast showToast={this.props.showToastProp}>
            {successMessage || errorMessage}
          </Toast>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    tasks: state.task.tasks,
    isFetching: state.task.isFetching,
    showToastProp: state.task.showToast,
    successMessage: state.task.successMessage,
    errorMessage: state.task.errorMessage,
  };
};
const mapDispatchToProps = (dispatch) => ({
  fetchTasks: () => dispatch(fetchTaskStart()),
  removeTask: (id) => dispatch(removeTaskStart(id)),
  hideToast: () => dispatch(hideToastAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
