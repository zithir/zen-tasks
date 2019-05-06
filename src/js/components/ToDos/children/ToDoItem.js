import React from 'react';
import PropTypes from 'prop-types';

export class ToDoItem extends React.Component {

    componentDidMount(){
        if (this.props.autoFocus === true){
            this.nameInput.focus();
        }
    }
    
    render(){
        return(
            <input
                className="input-text"
                type="text"
                ref={(input) => { this.nameInput = input; }}
                value={this.props.toDoText}
                onKeyDown={(e) => {
                    this.props.handleKeypress(e, this.props.index)
                }}
                onChange={(e) => {
                    this.props.fieldUpdate(this.props.index, e.target.value)
                }}
                >
            </input>
        )
    }
}

ToDoItem.propTypes = {
    toDoText: PropTypes.string,
    index: PropTypes.number.isRequired,
    fieldUpdate: PropTypes.func.isRequired,
    handleKeypress: PropTypes.func.isRequired,
    autoFocus: PropTypes.bool
}