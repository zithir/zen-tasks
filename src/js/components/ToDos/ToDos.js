import React from 'react';

import {Icon} from '../../utils/icons'

export class ToDos extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            ToDos: this.uploadToDos(),
            newTodoField: ""
        }
        this.newTodoFieldUpdate = this.newTodoFieldUpdate.bind(this);
        this.handleTodoChange = this.handleTodoChange.bind(this);
        this.newToDoHitEnter = this.newToDoHitEnter.bind(this);
    }

    uploadToDos(){
        let ToDos = localStorage.getItem("ToDos")
        if (!ToDos) {
            return []
        }
        return JSON.parse(ToDos)
    }
    
    newTodoFieldUpdate(e){
        this.setState({newTodoField: e.target.value})
    }

    newToDoHitEnter(e){
        if (e.key === 'Enter') {
            this.handleTodoChange.call()
        }
    }

    handleTodoChange(i){
        let ToDos = this.state.ToDos;
        if (!i){ //in no index is specified, new task is being added
            console.log();            
            ToDos.push(this.state.newTodoField);
            this.setState({newTodoField: ""})
        } else {
            ToDos.splice(i, 1);
        }
        this.updateToDos(ToDos);
    }

    addNewTask(){
        let ToDos = this.state.ToDos;
        ToDos.push("")
        this.updateToDos(ToDos);
    }

    updateToDos (newTodos){
        this.setState({ ToDos: newTodos })
        localStorage.setItem("ToDos", JSON.stringify(newTodos));      

    }
    

    renderAllToDos(){
        let allTodosElements = []
        for(let i in this.state.ToDos) {
            allTodosElements.push(
                <div className="col-4" key={i}>
                    <div className="d-flex">
                        <div className="p-2">
                            <p>
                            {this.state.ToDos[i]}
                            </p>
                        </div>
                        <div className="ml-auto p-2">
                            <button 
                                className="btn btn-outline-dark btn-sm"    
                                onClick={() => this.handleTodoChange(i)}
                            >
                                <Icon shape="checkmark"/>
                            </button>
                        </div>  
                    </div>
                </div>
            );
        }
        return allTodosElements;
    }
    
    render(){
        return(
            <div>
                <div className="row">
                    {this.renderAllToDos()}
                    <div className="col-4">
                        <div className="d-flex">
                            <div
                                className="p-2"
                                style={{width: "100%"}}
                            >
                                <input
                                    className="d-flex p-2 input-text"
                                    style={{
                                        width: "100%",
                                        }}
                                    type="text"
                                    onChange={this.newTodoFieldUpdate}
                                    onKeyPress={this.newToDoHitEnter}
                                    value={this.state.newTodoField}
                                ></input>
                            </div>
                            <div className="ml-auto p-2">
                                <button 
                                    className="btn btn-outline-dark btn-sm" 
                                    type="button" 
                                    onClick={() => this.handleTodoChange()}
                                    >
                                    <Icon shape="plus" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}