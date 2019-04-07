import React from 'react';
import {Icon} from './icons'
export function YXNButtonGroup (props) {
    return (
        <div className="btn-group" role="group">
            <button onClick={(e) => {
                    props.handleYNclick(props.date, props.taskName, true)
                }} className="btn btn-outline-dark btn-sm" type="button">
                <Icon shape="checkmark" />
            </button>
            <button onClick={(e) => {
                    props.handleYNclick(props.date, props.taskName)
                }} className="btn btn-outline-dark btn-sm border-right-0 border-left-0" type="button">
                <Icon shape="clock" />
                </button>
            <button onClick={(e) => {
                    props.handleYNclick(props.date, props.taskName, false)
                }} className="btn btn-outline-dark btn-sm" type="button">
                <Icon shape="close"/>
            </button>
        </div>
    )
}

export function EditButton (props) {
    return(
        <button className="btn btn-link btn-round btn-sm pop-on-hover" onClick={props.handleClickEdit}>
            <Icon shape="edit"/> Edit
        </button>
    )
}
