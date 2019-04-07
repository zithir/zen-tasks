import React from 'react';

import {constants} from '../constants'

/**
 * TaskUpdater - the component which display buttons to update today's tasks
 */
export class TaskUpdater extends React.Component {

/**
 * renderAllTasksButtons - returns array of <TaskWithButtons/> for each task
 * which is defined
 *
 * @return {array}  <TaskWithButtons/> components
 */
renderAllTasksButtons() {
        let allTasksButtons = []
        for (let task of constants.taskNames) {
            allTasksButtons.push(
                <TaskWithButtons
                    key={task}
                    date={this.props.todaysDate}
                    taskName={task}
                    handleYNclick={this.props.handleYNclick}
                />
            );
        }
        return allTasksButtons;
    }

    render() {
        return (<div className="row">
            {this.renderAllTasksButtons()}
        </div>)
    }
}


/**
 * TaskWithButtons - a component for one task with two buttons
 */
class TaskWithButtons extends React.Component {
    render() {
        return (<div className="col">
            {this.props.taskName}:&nbsp;
            <div className="btn-group">
                <button onClick={(e) => {
                        this.props.handleYNclick(this.props.date, this.props.taskName, true)
                    }} className="btn btn-outline-success" type="button">
                    <span className="oi oi-check"></span>
                </button>
                <button onClick={(e) => {
                        this.props.handleYNclick(this.props.date, this.props.taskName)
                    }} className="btn btn-outline-warning" type="button">
                    <span className="oi oi-question-mark"></span>
                </button>
                <button onClick={(e) => {
                        this.props.handleYNclick(this.props.date, this.props.taskName, false)
                    }} className="btn btn-outline-danger" type="button">
                    <span className="oi oi-x"></span>
                </button>
            </div>
        </div>)
    }
}
