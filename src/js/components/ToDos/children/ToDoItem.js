import React from 'react';

import { Icon } from '...../utils/icons'

export class ToDoItem extends React.Component {
render(){

    return(
        <div className="d-flex">
            <div className="p-2">
                {this.state.ToDos[i]}
            </div>
            <div className="ml-auto p-2">
                <button
                    className="btn btn-outline-dark btn-sm"
                    onClick={() => this.handleTodoChange(i)}
                >
                    <Icon shape="checkmark" />
                </button>
            </div>
        </div>

        )
    }
}