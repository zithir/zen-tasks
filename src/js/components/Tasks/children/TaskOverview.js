import React from 'react';
import PropTypes from 'prop-types';

import {constants} from "../../../constants"
import {DailyTasksRow} from './DailyTasksRow'

/**
 * TasksOverview - table of all tasks
 */

export class TasksOverview extends React.Component {
    renderTableHeads() {
        let taskCols = []
        for (let taskName of constants.taskNames) {
            taskCols.push(
                <th  scope="col" key={taskName}>{taskName}</th>
            );
        }
        return taskCols;
    }

    renderDailyTasksRows() {
        let tasksRows = []
        for (let date of Object.keys(this.props.tasks)) {
            tasksRows.unshift(
                <DailyTasksRow
                    key={date}
                    date={date}
                    dailyTasks={this.props.tasks[date]}
                    handleYNclick={this.props.handleYNclick}
                    todaysDate={this.props.todaysDate}
                    />
            );
        }
        return tasksRows;
    }

    render() {
        let style = {tableLayout: "fixed"}
        return (
            <table
                className="table table-borderless table-my-hover"
                style={style}
            >
            <thead>
                <tr>
                    <th scope="col"> Date</th>
                    {this.renderTableHeads()}
                    <th scope="col" ></th>
                </tr>
            </thead>
            <tbody>
                {this.renderDailyTasksRows()}
            </tbody>
        </table>);
    }
}

TasksOverview.propTypes = {
    todaysDate: PropTypes.string,
    tasks: PropTypes.object.isRequired,
    handleYNclick: PropTypes.func.isRequired
}