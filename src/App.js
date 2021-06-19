// import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import ToDoList from './ToDoList';

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      toDos: ['default state toDo'],
      userInput: '',
    };

    console.log('APP constructor');
    this.handleRemoveToDo = this.handleRemoveToDo.bind(this);
  }

  componentDidMount(){
    //API call that takes 3 secoinds and puts your todo in state
    setTimeout(() => this.setState({ toDos: [...this.state.toDos, "To do fetched from Database"]}), 3000)
  }

  componentDidUpdate(){
    if(!this.state.toDos.includes('another item')){
      this.setState({toDos: [...this.state.toDos, 'another item']})
    }
  }

  handleAdd = () => {
    this.setState({ toDos: [...this.state.toDos, this.state.userInput]})
  }

  handleRemoveToDo(index){
    let toDos = this.state.toDos.slice();
    toDos.splice(index, 1);
    this.setState({toDos});
  }

  render(){
    return (
      <div className="App">
        <input onChange={(e) => this.setState({userInput: e.target.value})}/>
        <button onClick={this.handleAdd}>add todo</button>
        <ToDoList removeToDo={this.handleRemoveToDo} toDos={this.state.toDos}/>
      </div>
    );
  }
}

export default App;
