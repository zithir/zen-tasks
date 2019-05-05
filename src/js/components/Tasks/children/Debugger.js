import React from 'react';
import moment from 'moment';

import {constants} from '../constants' 


export class Debugger extends React.Component{
    constructor(props){
        super(props)
        this.state = {newDate: ''}
        this.handleStartDateChange = this.handleStartDateChange.bind(this)
    }
    handleStartDateChange(e){
        let date = moment(e.target.value);        
        this.setState({newDate: date.format(constants.dateFormat)})
    }

    render(){
        return (
            <div>
                <input type="date" onChange={this.handleStartDateChange}></input> 
                <button onClick={() => this.props.changeDate(this.state.newDate, "start")}>
                Change Start date
                </button>
                <button onClick={() => this.props.changeDate(this.state.newDate, "today")}>
                Change Today's date
                </button>     
                <button onClick={this.props.uploadTestTasks}>
                Upload Test tasks
                </button>
            </div>
        );
    }
}