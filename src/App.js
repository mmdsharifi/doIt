import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { TodoForm, TodoList } from './component/todo';
import { addTodo, generateId } from './lib/todoHelpers'

class App extends Component {
  state = {
    todos: [
      { id: 1, name: "Learn JSX", isComplete: true },
      { id: 2, name: "Build an asome app", isComplete: false },
      { id: 3, name: "Ship it!", isComplete: false },
    ],
    currentTodo: ''
  }

  handelInputChange = (event) => {
    this.setState({
      currentTodo: event.target.value
    })

  }

  handelSubmit = (event) => {
    event.preventDefault()
    const Id = generateId();
    const todo = { id: Id, name: this.state.currentTodo, isComplete: false }
    const updateTodos = addTodo(this.state.todos, todo);
    this.setState({
      todos: updateTodos,
      currentTodo: '',
      errorMessage: ''
    })
  }

  handelEmpty = (event) => {
    event.preventDefault()
    this.setState({
      errorMessage: 'Please supply a todo name'
    })
  }

  render() {
    const submitHandler = this.state.currentTodo ? this.handelSubmit : this.handelEmpty
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React Todos</h2>
        </div>
        <div className="Todo-App">
          {this.state.errorMessage && <span className="error">{this.state.errorMessage}</span>}
          <TodoForm handelSubmit={submitHandler} handelInputChange={this.handelInputChange} currentTodo={this.state.currentTodo} />
          <TodoList todos={this.state.todos} />
        </div>
      </div>
    );
  }
}

export default App;
