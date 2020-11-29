import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// Components
import TaskList from './components/TaskList';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
//Icons
import {FaPlus} from 'react-icons/fa';


class App extends Component{
  constructor() {
    super();
    
    this.completeTask = this.completeTask.bind(this);
    this.removeTask = this.removeTask.bind(this);

    this.state={
      todo: [
        {
          desc: 'Walk dogs',
          isCompleted: false
        },
        {
          desc: 'Wash dishes',
          isCompleted: false
        }
      ],
      task: ''
    }
  }
  addTask(e){
    e.preventDefault();
    this.setState({todo: this.state.todo.concat({
        desc: this.state.task,
        isCompleted: false
    })});
  }
  completeTask(component){
    let list = this.state.todo;
    let index = list.findIndex(task => {
      return task.desc == component.state.desc && task.isCompleted == component.state.isCompleted;
    });
    if(index > -1){
      let task = list[index];
      task.isCompleted = true;
      list[index] = task;
      this.setState({todo: list});
    }
  }
  removeTask(component){
    let list = this.state.todo;
    let index = list.findIndex(task => {
      return task.desc === component.state.desc && task.isCompleted === component.state.isCompleted;
    });
    if(index > -1){
      list.splice(index, 1);
      this.setState({todo: list});
    }
  }
  render(){
    return (
      <Container className="container">
        <h1>Todo List</h1>
        <form onSubmit={e => this.addTask(e)}>
        <input
          type='text'
          className='input'
          placeholder='Enter Task'
          value={this.state.task}
          onChange={(e) => this.setState({task: e.target.value})}
        />
        <Button variant="primary" type="submit" className="add-button"><FaPlus className="add-icon"/></Button>
        </form>
        <TaskList tasks={this.state.todo} completed={false} completeFunction={this.completeTask} removeFunction={this.removeTask}></TaskList>
        <h1>Completed List</h1>
        <TaskList tasks={this.state.todo} completed={true} completeFunction={this.completeTask} removeFunction={this.removeTask}></TaskList>
      </Container>
    );
  }
}

export default App;
