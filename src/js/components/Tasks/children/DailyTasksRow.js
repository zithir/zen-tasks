import React from 'react';
import PropTypes from 'prop-types';


import {constants} from "../../../constants"
import {YXNButtonGroup, EditButton} from "../../../utils/buttons"
import {Icon} from '../../../utils/icons'


/**
 * DailyTasksRow - a single row in the table
 */
export class DailyTasksRow extends React.Component {
    constructor(props){
        super(props);
        this.state = {openForEdit: false};
        this.handleOpenForEdit = this.handleOpenForEdit.bind(this);
    }

    handleOpenForEdit(){
        this.setState({openForEdit: !this.state.openForEdit});
    }

    /**
     * evaluateTask - returns text and className according to task's status
     * @param task {bool} True, False, Null
     * @return {object}
     */
    evaluateTask(taskStatus) {
        if (taskStatus === true) {
            return {text: <Icon shape="checkmark" />, className:"table-success"};
        } else if (taskStatus === false) {
            return {text: <Icon shape="close" />, className:"table-danger"};
        } else {
            return {text: <Icon shape="clock"/>, className:"table-warning"};
        }
    }

    renderAllTasksCells() {
        let taskCols = []
        for (let task of constants.taskNames) {
            let tasksTextAndClass = this.evaluateTask(this.props.dailyTasks[task])
            let editButtons;
            if (this.state.openForEdit){
                editButtons =
                <div className="pt-2">
                    <YXNButtonGroup
                    handleYNclick={this.props.handleYNclick}
                    taskName={task}
                    date={this.props.date}
                    />
                </div>
            }
            taskCols.push(
                <td
                    key={task}
                    className={tasksTextAndClass.className}>
                    <div>{tasksTextAndClass.text}</div>
                    {editButtons}
                </td>
            );
        }
        return taskCols;
    }

    componentWillMount (){
        if (this.props.date === this.props.todaysDate) {
            this.setState({openForEdit: true})
        }
    }

    render() {
        return (
            <tr>
                <th scope="row">{this.props.date}</th>
                {this.renderAllTasksCells()}
                <td><EditButton handleClickEdit={this.handleOpenForEdit}/></td>
            </tr>
        )
    }
}

DailyTasksRow.propTypes = {
    date: PropTypes.string.isRequired,
    dailyTasks: PropTypes.object.isRequired,
    handleYNclick: PropTypes.func.isRequired,
    todaysDate: PropTypes.string.isRequired
}