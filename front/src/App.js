import "./App.css";
import React from "react";
import { Link, Switch, Route, Router } from "react-router";
import Nav from "./components/nav/nav.component";
import taskList from "./pages/taskPage/taskList.page";
import CreateTaskPage from "./pages/createTask/createTask.page";
import UpdateTaskPage from "./pages/updateTask/updateTask.page";

function App() {
  return (
    <div className='App'>
      <Nav />
      <Switch>
        <Route exactly path='/task-list' component={taskList} />
        <Route exactly path='/create-task' component={CreateTaskPage} />
        <Route exactly path='/update-task/:id' component={UpdateTaskPage} />
      </Switch>
    </div>
  );
}

export default App;
