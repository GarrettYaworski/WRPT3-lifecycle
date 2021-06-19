import React from "react";
import ToDo from './ToDo'

class ToDoList extends React.Component{
    constructor(props){
        super(props)

        // console.log('TO DO LIST CONSTRUCTOR')
    }

    // componentDidMount(){
    //     console.log('TO DO LIST did mount')
    // }

    render(){
        console.log('TO DO LIST render')
        return(
            <div>
                {this.props.toDos.map((toDo, i) => <ToDo handleRemove={() => this.props.removeToDo(i)} key={i} toDo={toDo} />)}
            </div>
        )
    }
}

export default ToDoList;