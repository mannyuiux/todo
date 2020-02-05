import React, { Component } from "react";
import axios from "axios";

export default class EditTodo extends Component {
  constructor(props) {
    super(props);

    this.onChangeTodoDesc = this.onChangeTodoDesc.bind(this);
    this.onChangeTodoAuthor = this.onChangeTodoAuthor.bind(this);
    this.onChangeTodoCategory = this.onChangeTodoCategory.bind(this);
    this.onChangeTodoFlag = this.onChangeTodoFlag.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      todo_desc: "",
      todo_author: "",
      todo_category: "",
      todo_flag: false
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:4000/todos/" + this.props.match.params.id)
      .then(response => {
        this.setState({
          todo_desc: response.data.todo_desc,
          todo_author: response.data.todo_author,
          todo_category: response.data.todo_category,
          todo_flag: response.data.todo_flag
        });
      })
      .catch(function(error) {
        console.log(error);
      });
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

  onChangeTodoFlag(e) {
    this.setState({
      todo_flag: !this.state.todo_flag
    });
  }
  onSubmit(e) {
    e.preventDefault();
    const obj = {
      todo_desc: this.state.todo_desc,
      todo_author: this.state.todo_author,
      todo_category: this.state.todo_category,
      todo_flag: this.state.todo_flag
    };
    console.log(obj);
    axios
      .post(
        "http://localhost:4000/todos/update/" + this.props.match.params.id,
        obj
      )
      .then(res => console.log(res.data));

    this.props.history.push("/");
  }
  render() {
    return (
      <div>
        <h3 align="center">Update Todo</h3>
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
          <div className="form-check">
            <input
              className="form-check-input"
              id="completedCheckbox"
              type="checkbox"
              name="completedCheckbox"
              onChange={this.onChangeTodoFlag}
              checked={this.state.todo_flag}
              value={this.state.todo_flag}
            />
            <label className="form-check-label" htmlFor="completedCheckbox">
              Completed
            </label>
          </div>

          <br />
          <div className="row">
            <div className="col-2 form-group">
              <input
                type="submit"
                value="Update Todo"
                className="btn btn-primary"
              />
            </div>
            <div className="col-2 form-group">
              <input
                type="submit"
                value="Delete Todo"
                className="btn btn-danger"
              />
            </div>
          </div>
        </form>
      </div>
    );
  }
}
