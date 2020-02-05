import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

//Todo to appear dull if completed
const Todo = props => (
  <tr>
    <td className={props.todo.todo_flag ? "completed" : ""}>
      {props.todo.todo_desc}
    </td>
    <td className={props.todo.todo_flag ? "completed" : ""}>
      {props.todo.todo_author}
    </td>
    <td className={props.todo.todo_flag ? "completed" : ""}>
      {props.todo.todo_category}
    </td>
    <td>
      <Link to={"/edit/" + props.todo._id}>Edit</Link>
    </td>
  </tr>
);
export default class TodosList extends Component {
  constructor(props) {
    super(props);
    this.state = { todos: [] };
  }
  componentDidMount() {
    /* Axios Get method to get data from todos list */
    axios
      .get("http://localhost:4000/todos/")
      .then(response => {
        this.setState({ todos: response.data });
      })
      .catch(function(error) {
        console.log("Error occured while getting Todos:", error);
      });
  }
  todoList() {
    return this.state.todos.map(function(currentTodo, i) {
      return <Todo todo={currentTodo} key={i} />;
    });
  }
  render() {
    return (
      <div>
        <h3>Todos List</h3>
        <table className="table table-striped mt-3">
          <thead>
            <tr>
              <th>Description</th>
              <th>Author</th>
              <th>Category</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{this.todoList()}</tbody>
        </table>
      </div>
    );
  }
}
