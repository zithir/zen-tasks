import React from 'react';

import  { Icon } from '../../utils/icons'
import { ToDoItem } from './children/ToDoItem' 


export class ToDos extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            ToDos: this.getToDosFromStorage(),
        }
        this.handleKeypress = this.handleKeypress.bind(this);
        this.toDoFieldUpdate = this.toDoFieldUpdate.bind(this);
    }

    /**
     * Loads ToDos from local storage
     *
     * @returns Array
     * @memberof ToDos
     */
    getToDosFromStorage(){
        let ToDos = localStorage.getItem("ToDos")
        if (!ToDos) {
            return []
        }
        return JSON.parse(ToDos)
    }
    
    /**
     * Handle Enter and Escape keypress on focused component
     * If Enter is pressed on last component, a new one is automatically created
     * 
     * @param {Object} e - DOM Event
     * @param {Number} index - Index of ToDo component
     * @memberof ToDos
     */
    handleKeypress(e, index){
        if (e.key === 'Enter' && index === this.state.ToDos.length - 1) {
                this.toDoFieldUpdate();
        } else if (["Enter", "Escape"].includes(e.key)) {
            document.activeElement.blur()
        }
    } 
    
    /**
     * Updates the ToDos both in state and in localstorage
     *
     * @param {*} newTodos
     * @memberof ToDos
     */
    updateToDos (newTodos){
        localStorage.setItem("ToDos", JSON.stringify(newTodos));      
        this.setState({ ToDos: newTodos })
    }
    
    /**
     * Changes the entry in ToDos array and triggers its update.
     * An index value -1 means that a new entry is being added
     * A text value "<remove>" removes entry from array
     *
     * @param {number} [index=-1] - index of changed entry.
     * @param {string} [text=""] - new text of entry
     * @memberof ToDos
     */
    toDoFieldUpdate (index=-1, text=""){
        let newToDos = this.state.ToDos.slice(0); //a shallow copy is needed
        if (index === -1){  // Add new
            newToDos.push("")
        } else if (text === "<remove>") {   // Remove existing
            newToDos.splice(index,1);
        } else { // Update value
            newToDos[parseInt(index)] = text;
        }
        this.updateToDos(newToDos);
    }
    
    renderAllToDos(){
        let allToDoElements = []
        for(let i in this.state.ToDos) {            
            let autoFocus = false; //if the last element is empty, focus on it            
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
                                index={parseInt(i)}
                                fieldUpdate={this.toDoFieldUpdate}
                                handleKeypress={this.handleKeypress}
                                autoFocus={autoFocus}
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