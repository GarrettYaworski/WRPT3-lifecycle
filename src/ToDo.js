import React from 'react';

class Todo extends React.Component{


    componentWillUnmount(){
        console.log(`UNMOUNTING ${this.props.toDo}`)
    }


    render(){
        return(
            <div onClick={this.props.handleRemove}>{this.props.toDo}</div>
        )
    }
}

export default Todo;