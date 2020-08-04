import React from "react";
import "./App.css";
import Todos from "./components/Todos";
import Header from "./components/layout/Header";
import AddTodo from "./components/AddTodo";

class App extends React.Component {
  state = {
    todos: [
      {
        id: 1,
        title: "take out trash",
        completed: true,
      },
      {
        id: 2,
        title: "take out dinner",
        completed: false,
      },
      {
        id: 3,
        title: "take out haha",
        completed: true,
      },
    ],
  };
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id == id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  };

// delete 
  delTodo = (id) => {
    console.log(id);

    this.setState(
      {
        todos: [...this.state.todos.filter(todo=> todo.id!=id )]
      }
    )
  };

  addTodo = (title) => {
    console.log(title);
  }
  render() {
    return (
      <div className="App">
        <div className="container">

        
        <Header/>
        <AddTodo addTodo={this.addTodo}/>

        <Todos todos={this.state.todos} markComplete={this.markComplete}  delTodo={this.delTodo}  />
        </div>
      </div>
    );
  }
}

export default App;
