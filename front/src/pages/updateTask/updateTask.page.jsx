import React, { Component } from "react";
import "./updateTask.style.scss";
import Container from "../../components/container/container.component";
import { connect } from "react-redux";

import { v4 as uuidv4 } from "uuid";

import { Toast } from "../../components/toast/toast.component";
import { CustomInput } from "../../components/custom-input/custom-input.component";
import { CustomSelect } from "../../components/custom-select/custom-select.component";
import { CustomTextArea } from "../../components/custom-textarea/custom-textarea.component";
import { CustomButton } from "../../components/custom-button/custom-button.component";

import {
  getSingleTaskStart,
  updateTaskStart,
  setValueAction,
} from "../../store/taskList/taskList.actions";

class UpdateTaskPage extends Component {
  componentDidMount() {
    if (this.props.match.params.id) {
      this.props.getSingleTask(this.props.match.params.id);
    }
  }

  onChangeValue = (e) => {
    if (this.props.singleTask) {
      this.props.setValue({
        ...this.props.singleTask,
        [e.target.name]: e.target.value,
      });
    }
  };
  submitForm = async (e) => {
    e.preventDefault();
    const { title, status, description } = this.props.singleTask;
    const requestForm = {
      title,
      status,
      description,
    };
    await this.props.updateTaskAction({
      id: this.props.match.params.id,
      request: requestForm,
    });
    //this.props.history.push("/task-list");
  };
  render() {
    const status = ["created", "in progress", "closed"];
    const id = uuidv4();
    return (
      <div>
        <h1 className='title-createTask'>Update Task</h1>
        <Container customClassName='taskListContainer'>
          <div className='container'>
            <form action='/action_page.php'>
              <CustomInput
                changeValue={this.onChangeValue}
                id={uuidv4()}
                label='Title'
                name='title'
                placeholder='Your name...'
                type='text'
                value={this.props.singleTask.title}
              />
              <CustomSelect
                changeValue={this.onChangeValue}
                id={uuidv4()}
                label='Status'
                name='status'
                stateValue={this.props.singleTask?.status}
                values={status}
              />
              <CustomTextArea
                changeValue={this.onChangeValue}
                id={uuidv4()}
                label='Description'
                name='description'
                placeholder='Write something..'
                value={this.props.singleTask?.description}
              />
              <CustomButton
                children='Submit'
                type='submit'
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
    singleTask: state.task.sTask,
    onIsFetching: state.task.isFetching,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    updateTaskAction: (value) => dispatch(updateTaskStart(value)),
    getSingleTask: (value) => dispatch(getSingleTaskStart(value)),
    setValue: (value) => dispatch(setValueAction(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UpdateTaskPage);
