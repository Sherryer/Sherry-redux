import React, {Component} from 'react'
import reactDom from 'react-dom'
import PropTypes from 'prop-types'
import {combineReducers ,createStore} from 'redux';

// 热加载
if(module.hot){
    module.hot.accept( function(){
        console.log("11111 test update")
    });
}


// 组件
class Count extends Component{
    constructor(z){
        super(z);
        this.oddIncrease = this.oddIncrease.bind(this);
        this.asyncIncrease = this.asyncIncrease.bind(this)
    }

    oddIncrease (){
        if( this.props.value %2 ) {
            this.props.increase()
        }
    }

    asyncIncrease (){
        setTimeout(this.props.increase, 1000)
    }

    render (){
        return (
            <p>
                value:{ this.props.value}
                <button onClick={this.props.increase}>+</button>
                <button onClick={this.props.decrease}>-</button>
                <button onClick={this.oddIncrease}>奇数才加</button>
                <button onClick={this.asyncIncrease}>异步增加</button>
            </p>
        )
    }

}
Count.propTypes = {
    value: PropTypes.number.isRequired,
    increase: PropTypes.func.isRequired,
    decrease: PropTypes.func.isRequired
};


// reudcer
const count = (store = {value: 0}, action) => {
    switch (action.type) {
        case "increase":
            store = {...store, value: store.value + 1};
            break;
        case "decrease":
            store = {...store, value: store.value - 1};
            break;
    }
    return store
};

const reducers = combineReducers({
    count: count
});

const store = createStore(reducers);
const render = ()=>{ reactDom.render( <Count increase={() =>store.dispatch({type:"increase"})} decrease={() =>store.dispatch({type:"decrease"})} value={store.getState().count.value}/>, document.getElementById("dom")) };
store.subscribe(render)
render()