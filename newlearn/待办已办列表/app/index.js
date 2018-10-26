import React from 'react'
import reactDom from 'react-dom'
import List from './components/Listmenu'
import {Provider} from 'react-redux'
import store from './store'

if(module.hot){
    module.hot.accept( function(){
    });
}
reactDom.render( <Provider store={store}><List/></Provider>, document.getElementById("dom"))