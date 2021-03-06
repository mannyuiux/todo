import React, { Component } from "react";
import axios from "axios";

export default class CreateTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo_desc: "",
      todo_author: "",
      todo_category: "",
      todo_flag: false
    };
    this.onChangeTodoDesc = this.onChangeTodoDesc.bind(this);
    this.onChangeTodoAuthor = this.onChangeTodoAuthor.bind(this);
    this.onChangeTodoCategory = this.onChangeTodoCategory.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChangeTodoDesc(e) {
    this.setState({
      todo_desc: e.target.value
    });
  }

  onChangeTodoAuthor(e) {
    this.setState({
      todo_author: e.target.value
    });
  }

  onChangeTodoCategory(e) {
    this.setState({
      todo_category: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();

    /* Creating newTodo object to post */
    const newTodo = {
      todo_desc: this.state.todo_desc,
      todo_author: this.state.todo_author,
      todo_category: this.state.todo_category,
      todo_flag: this.state.todo_flag,
      todo_delete: false,
    };

    /* Axios request to add new Todo */
    axios
      .post("http://localhost:4000/todos/add", newTodo)
      .then(res => console.log(res.data));

    /* Setting states empty after created successfully */
    this.setState({
      todo_desc: "",
      todo_author: "",
      todo_category: "",
      todo_flag: false,
      todo_delete: false,
    });
  }
  render() {
    return (
      <div className="mt-4">
        <h3>Create New Todo</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Task </label>
            <input
              type="text"
              className="form-control"
              value={this.state.todo_desc}
              onChange={this.onChangeTodoDesc}
            />
          </div>
          <div className="form-group">
            <label>Author/Assigned to </label>
            <input
              type="text"
              className="form-control"
              value={this.state.todo_author}
              onChange={this.onChangeTodoAuthor}
            />
          </div>
          <div className="form-group">
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="priorityOptions"
                id="priorityLow"
                value="Low"
                checked={this.state.todo_category === "Low"}
                onChange={this.onChangeTodoCategory}
              />
              <label className="form-check-label">Low</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="priorityOptions"
                id="priorityMedium"
                value="Medium"
                checked={this.state.todo_category === "Medium"}
                onChange={this.onChangeTodoCategory}
              />
              <label className="form-check-label">Medium</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="priorityOptions"
                id="priorityHigh"
                value="High"
                checked={this.state.todo_category === "High"}
                onChange={this.onChangeTodoCategory}
              />
              <label className="form-check-label">High</label>
            </div>
          </div>

          <div className="form-group">
            <input
              type="submit"
              value="Create Todo"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
