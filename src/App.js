import React from 'react';
import './App.css';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
function App() {
  return (
    <ToDo />
  );
}
class ToDo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      date: '',
    }
    this.handleToDoMessage = this.handleToDoMessage.bind(this);
    this.handleToDoDate = this.handleToDoDate.bind(this);
  }
  handleToDoMessage(e){
    this.setState({
      message: e.target.value
    })
  }
  handleToDoDate(e){
    this.setState({
      date: e.target.value
    })
  }
  render() {
    return (
      <React.Fragment>
        <div className="addToDo">
          <div className="formGroup">
            <input type="text" placeholder="Think. Update. Execute" onChange={this.handleToDoMessage} />
          </div>
          <div className="formGroup">
          <DayPicker onClick={this.handleToDoDate} />
          </div>
        </div>
        <ul className="ToDoList">
          {}
        </ul>
      </React.Fragment>
    )
  }
}

export default App;
