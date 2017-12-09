import React, {Component} from 'react'
import reactDom from 'react-dom'

if(module.hot){
    module.hot.accept( function(){
        console.log("11111 test update")
    });
}

@ppHOC
class Layout extends Component{
    constructor(z){
        super(z)
    }
    renderLi (){
        var arr = [];
        for (var i = 0; i<this.props.length; i++) {
            arr.push(<li key={i}>{i}</li>)
        }
        return arr
    }
    render(){

        return (
            <div>22
                <ul>
                    {this.renderLi()}
                </ul>
            </div>
        )
    }
}


function ppHOC(WrappedComponent) {

    return class extends React.Component {
        constructor (z){
            super(z)
            this.state = {length: 5}
        }
        componentDidMount (){
            setTimeout(()=>{this.setState ({length:10} )}, 1000)
        }
        render() {
            let props = {...this.props, length: this.state.length};
            return (
                <WrappedComponent {...props}/>
            )
        }
    }
}


// var HH = ppHOC(Layout);


reactDom.render( <Layout length="10"/>, document.getElementById("dom"));