import React from 'react';
import PropTypes from 'prop-types';


export class ToDoItem extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            openForEdit:false,
            text: this.props.toDoText
        }
        this.editedTodoFieldChange = this.editedTodoFieldChange.bind(this);
        this.toDoFieldFocusBlur = this.toDoFieldFocusBlur.bind(this);
        this.text = "";
    }
    toDoFieldFocusBlur (e, isFocus) {
        this.setState({openForEdit: isFocus})
        if (isFocus === false){
            this.props.fieldUpdate(this.props.index, e.target.value)
        }
    }
    
    editedTodoFieldChange(e){
        this.props.fieldUpdate(this.props.index, e.target.value)
    }

    componentDidMount(){
        if (this.props.autoFocus === true){
            this.nameInput.focus();
        }
    }
    
    render(){
        if (this.state.openForEdit === false) {
            return(
                <input
                className="input-text"
                type="text"
                ref={(input) => { this.nameInput = input; }}
                value={this.props.toDoText}
                onFocus={(e) => {this.toDoFieldFocusBlur(e, true) }}
                onBlur={(e) => {this.toDoFieldFocusBlur(e, false) }}
                readOnly
                >
            </input>
            )
        } else {
            return(
                <input
                    className="input-text open-for-edit"
                    type="text"
                    ref={(input) => { this.nameInput = input; }}
                    value={this.props.toDoText}
                    onFocus={(e) => {this.toDoFieldFocusBlur(e, true) }}
                    onBlur={(e) => {this.toDoFieldFocusBlur(e, false) }}
                    onChange={this.editedTodoFieldChange}
                    autoFocus={this.props.autoFocus}
                    onKeyDown={(e) => {this.props.handleKeypress(e, this.props.index)}}
                    >
                </input>
            )
        }
    }
}

ToDoItem.propTypes = {
    fieldUpdate: PropTypes.func.isRequired,
    toDoText: PropTypes.string,
    index: PropTypes.number.isRequired //TODO convert to number
}