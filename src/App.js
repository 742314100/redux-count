import React,{Component} from 'react'
import PropTypes from 'prop-types'
import {increment,decrement} from "./redux/actions"


export default class App extends Component {
    constructor(props){
        super(props)
        this.countRef=React.createRef()

    }

    static propTypes = {
        store: PropTypes.object.isRequired
    }

    increment=()=>{
        const counter=this.countRef.current.value*1
        this.props.store.dispatch(increment(counter))
    }
    decrement=()=>{
        const counter=this.countRef.current.value*1
        this.props.store.dispatch(decrement(counter))
    }
    incrementOdd=()=>{
        const counter=this.countRef.current.value*1
        if(this.props.store.getState() % 2 ===0){
            this.props.store.dispatch(increment(counter))
        }
    }
    incrementAsync=()=>{
        const counter=this.countRef.current.value*1
        this.timer=setTimeout( ()=>{
            this.props.store.dispatch(increment(counter))
        },1000)
    }

    componentWillUnmount() {
        clearTimeout(this.timer)
    }

    render(){
        const st=this.props.store.getState()
        return(
            <div>
                <h1>
                    {st}
                </h1>

                <p>
                    <select ref={this.countRef}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                </p>
                <p>
                    <button onClick={this.increment}>增加</button>
                </p>
                <p>
                    <button onClick={this.decrement}>减少</button>
                </p>
                <p>
                    <button onClick={this.incrementOdd}>偶数增加</button>
                </p>
                <p>
                    <button onClick={this.incrementAsync}>增加</button>
                </p>
            </div>
        )
    }
}