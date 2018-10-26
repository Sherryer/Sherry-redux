import React from 'react'
import {connect} from 'react-redux'
import {toggleDone} from '../actions/index'

const doList = ({value, onClick}) => {
    return (
        <ul>
            {value.map((value, index)=>(
                <li onClick={()=>{onClick(value.id)}} key={index}>{value.value}</li>
            ))}
        </ul>
    )};
const togo = {
    onClick: toggleDone
};
export const DoneList = connect((store)=>{
    return ({
        value: store.todolist.filter(value => value.done)
    })
}, togo)(doList);
export const TodoList = connect((store)=>{
    return ({
        value: store.todolist.filter(value => !value.done)
    })
}, togo)(doList);
