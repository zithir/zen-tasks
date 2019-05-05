import React from 'react';

import moment from 'moment';
import {constants} from '../../constants'

import {TasksOverview} from './children/TaskOverview'
//import {Debugger} from './chidren/Debugger'

const localstorage = window.localStorage;



export class Tasks extends React.Component {
    constructor(props) {
        super(props);

        // If application is run for the first time (no start date is stored in storage)
        // today's date is set as startDate
        if (!localstorage.getItem('startDate')) {
            let startDate = (moment().startOf('day').format(constants.dateFormat));
            localstorage.setItem('startDate', startDate);
            let tasksObj = {};
            tasksObj[startDate] = {};
            localstorage.setItem('tasks', JSON.stringify({startDate: {}}));
        }
        this.todaysDate = moment().startOf('day');
        this.startDate = moment(localstorage.getItem('startDate'),
            constants.dateFormat)
        this.state = {
            tasks: this.getTasks(), // tasks uploaded from cookies
            todaysDateString: this.todaysDate.format(constants.dateFormat),
            startDateStriing: this.startDate.format(constants.dateFormat)
        };
        this.handleYNclick = this.handleYNclick.bind(this);
        this.changeDate = this.changeDate.bind(this);
        this.uploadTestTasks = this.uploadTestTasks.bind(this)
    }

    /**
     * getTasks - gets the tasks object stored in browsers cookies
     * The cookies are stored as JSON and returned as a JS object. The format of
     * object is the following:
     * {<constants.dateFormat>: {<task_name> : <task_status>, ...}, ...}
     * @return {object} tasks
     */
    getTasks() {
        const tasksFromCookies = JSON.parse(localstorage.getItem('tasks'));
        const tasks = {}; // object that will be returned
        let dateObj = this.startDate.clone();

        // emptyTasks will be assigned to dates, for which no data is found
        const emptyTasks = {}
        for (let taskName of constants.taskNames) {
            emptyTasks[taskName] = undefined;
        };
        let counter = 0;
        while ((dateObj.unix() <= this.todaysDate.unix()) && counter < constants.taskLimit) {
            let dateStr = dateObj.format(constants.dateFormat)
            tasks[dateStr] = tasksFromCookies[dateStr]
            if (tasks[dateStr] === undefined) {
                tasks[dateStr] = {
                    ...emptyTasks
                }
            }
            counter++
            dateObj.date(dateObj.date() + 1);
        }
        return tasks
    }

    // EVENTS

    /**
     * handleYNclick - handles clicks on YES, NO and "Clock" buttons
     * separately updates component's state with new tasks object and uploads
     * the same object to cookies.
     *
     * @param  {string} task   name of the task
     * @param  {bool} status true for YES, false for NO button
     */
    handleYNclick(date, task, status) {
        let newTasks = {
            ...this.state.tasks
        };
        newTasks[date][task] = status;
        this.setState({
            tasks: newTasks
        })
        localstorage.setItem('tasks', JSON.stringify(newTasks));
    }

    // Debug functions
    /**
     * Changes value of start or todays dates and updates tasks object
     * Both moments() object and state are changed.
     * The change is not propagated to local storage, unless status of some task
     * is updated. However, it does not change the starDate cookie.
     * @param {String} date 
     * @param {String} dateType 
     */
    changeDate(date, dateType) {
        let change = window.confirm(
            `Warning! You are about to overwrite the value of ${dateType} 
        to ${date}.\nAre you sure?`
        );
        if (!change) {
            return;
        };
        if (dateType === "start") {
            this.startDate = moment(date, constants.dateFormat);
            this.setState({
                startDateStriing: this.startDate.format(constants.dateFormat)
            });
        } else if (dateType === "today") {
            this.todaysDate = moment(date, constants.dateFormat)
            this.setState({
                todaysDateString: date
            })
        } else {
            console.warn(`Trying to change invalid date: ${dateType}`)
        };
        this.setState({
            tasks: this.getTasks()
        });
    }

    uploadTestTasks() {
        localstorage.setItem('tasks', JSON.stringify(constants.tasksForCookies));
        this.changeDate("10-03-2019", 'start')
        this.changeDate("16-03-2019", 'today')

    }
    ////////////////////////////////////////////////////////////////////////////

    render() {
        return ( 
            <div>
                {/* <Debugger
                    changeDate={this.changeDate}
                    uploadTestTasks={this.uploadTestTasks} 
                    /> */} 
                <TasksOverview 
                    todaysDate = {this.state.todaysDateString}
                    tasks = {this.state.tasks}
                    handleYNclick = {this.handleYNclick}
                    /> 
            </div>
        )
    }
}
