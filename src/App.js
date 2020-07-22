import React from 'react';
import './App.css';
import Todos from './components/Todos';


class App extends React.Component{
  state= {
    todos: [
      {
        id:1,
        title:"take out trash",
        completed:true
      },
      {
        id:2,
        title:"take out dinner",
        completed:false
      },
      {
        id:3,
        title:"take out haha",
        completed:true
      }
    ]
  }
  render(){
    console.log(this.state.todos)
    return(
      <div className="App">
        <h1>App</h1>
        <Todos todos={this.state.todos}/>
      </div>
    );
  }
}



export default App;
