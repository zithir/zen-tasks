import React from 'react';

import  {Icon } from '../../utils/icons'

import { ToDoItem } from './children/ToDoItem' 

export class ToDos extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            ToDos: this.getToDosFromStorage(),
            editedToDoValue: "",
            editedToDoIndex: null
        }
        this.handleKeypress = this.handleKeypress.bind(this);
        this.toDoFieldUpdate = this.toDoFieldUpdate.bind(this);
    }

    getToDosFromStorage(){
        let ToDos = localStorage.getItem("ToDos")
        if (!ToDos) {
            return []
        }
        return JSON.parse(ToDos)
    }
    
    handleKeypress(e, index){
        if (e.key === 'Enter' && index === this.state.ToDos.length - 1) {
                this.toDoFieldUpdate();
                return;
        } else if (["Enter", "Escape"].includes(e.key)) {
            document.activeElement.blur()
            return;
        }
    } 
        
    updateToDos (newTodos){
        localStorage.setItem("ToDos", JSON.stringify(newTodos));      
        this.setState({ ToDos: newTodos })
        
    }
    
    toDoFieldUpdate (index=-1, text=""){
        let newToDos = this.state.ToDos.slice(0); //a shallow copy 
        if (index === -1){
            console.log("Adding new");
            newToDos.push("")
        } else if (text === "<remove>") {
            console.log("Removing");
            newToDos.splice(index,1);
        } else {
            console.log("Updating value");
            newToDos[parseInt(index)] = text;
        }
        this.updateToDos(newToDos);
    }
    

    renderAllToDos(){
        let allToDoElements = []
        for(let i in this.state.ToDos) {            
            let autoFocus = false;            
            if (
                (parseInt(i) === this.state.ToDos.length - 1)
                & (this.state.ToDos[i] === "")
            ) {
                
                autoFocus = true;
            }  

            allToDoElements.push(
                <div className="col-4" key={i}>
                    <div className="d-flex">
                        <div className="p-2">
                            <ToDoItem 
                                toDoText={this.state.ToDos[i]}
                                fieldUpdate={this.toDoFieldUpdate}
                                index={parseInt(i)}
                                autoFocus={autoFocus}
                                handleKeypress={this.handleKeypress}
                                />
                        </div>
                        <div className="p-2">
                            <button 
                                className="btn btn-outline-dark btn-sm"    
                                onClick={() => this.toDoFieldUpdate(i, "<remove>")}
                                >
                                <Icon shape="checkmark"/>
                            </button>
                        </div>  
                    </div>
                </div>
            );
        }
        return allToDoElements;
    }
    
    render(){
        return(
            <div>
                <div className="row">
                    {this.renderAllToDos()}
                    <div className="col-4">
                        <div className="d-flex">
                            </div>
                            <div className="ml-auto p-2">
                                <button 
                                    className="btn btn-outline-dark btn-sm" 
                                    type="button" 
                                    onClick={() => this.toDoFieldUpdate()}
                                    >
                                    <Icon shape="plus" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}