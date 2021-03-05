import React, { Component } from "react";
import "./createTask.style.scss";
import Container from "../../components/container/container.component";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { Toast } from "../../components/toast/toast.component";
import { CustomInput } from "../../components/custom-input/custom-input.component";
import { CustomSelect } from "../../components/custom-select/custom-select.component";
import { CustomTextArea } from "../../components/custom-textarea/custom-textarea.component";
import { CustomButton } from "../../components/custom-button/custom-button.component";

import { createTaskStart } from "../../store/taskList/taskList.actions";

export class CreateTaskPage extends Component {
  state = {
    title: "",
    status: "",
    description: "",
  };
  onChangeValue = (e) => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value,
    });
  };
  submitForm = async (e) => {
    e.preventDefault();
    const { title, status, description } = this.state;
    const requestForm = {
      title,
      status,
      description,
    };
    await this.props.createTaskAction(requestForm);
  };
  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.isCreatedTask !== nextProps.isCreatedTask) {
      this.props.history.push("/task-list");
      return true;
    } else {
      return false;
    }
  }
  render() {
    const status = ["created", "in progress", "closed"];

    return (
      <div>
        <h1 className="title-createTask">Create Task</h1>
        <Container customClassName="taskListContainer">
          <div className="container">
            <form action="/action_page.php">
              <CustomInput
                value={this.state.value}
                label="Title"
                type="text"
                id="title"
                name="title"
                placeholder="Your name..."
                changeValue={this.onChangeValue}
              />
              <CustomSelect
                label="Status"
                id="status"
                name="status"
                stateValue={this.state.status.status}
                values={status}
                changeValue={this.onChangeValue}
              />
              <CustomTextArea
                value={this.state.value}
                label="Description"
                id="description"
                name="description"
                placeholder="Write something.."
                changeValue={this.onChangeValue}
              />
              <CustomButton
                buttonStyle="normal-button"
                children="Submit"
                type="submit"
                onClick={this.submitForm}
              />
            </form>
          </div>

          <Toast showToast={this.props.showToastProp}>
            {/* {successMessage || errorMessage} */}
          </Toast>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isCreatedTask: state.task.isCreatedTask,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    createTaskAction: (value) => dispatch(createTaskStart(value)),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CreateTaskPage)
);
