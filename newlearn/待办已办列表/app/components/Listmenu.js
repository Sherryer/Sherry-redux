import React, {Component} from 'react'
import {connect} from 'react-redux'
import {addTip} from '../actions/index'
import { TodoList, DoneList } from './Lists'


@connect((store) =>({}), ({onClick: addTip}))
export default class List extends Component{
    render(){
        let input;
        return (
            <div>
                <input ref={ z => (input = z )} type="text"/><button onClick={()=>{this.props.onClick(input.value)}}>add</button>
                <h2>todo</h2>
                <TodoList/>
                <h2>done</h2>
                <DoneList/>
            </div>
        )
    }
}


