import React,{Component} from 'react'

export default class Counter extends Component {
    constructor(props){
        super(props)
        this.countRef=React.createRef()
        this.state={
            count:1
        }
    }


    increment=()=>{
        const counter=this.countRef.current.value*1
        this.setState(()=>({count:counter+this.state.count}))
    }
    decrement=()=>{
        const counter=this.countRef.current.value*1
        this.setState(()=>({count:this.state.count-counter}))
    }
    incrementOdd=()=>{
        const counter=this.countRef.current.value*1
        if(this.state.count % 2 ===0){
            this.setState(()=>({count:this.state.count+counter}))
        }
    }
    incrementAsync=()=>{
        const counter=this.countRef.current.value*1
        this.timer=setTimeout( ()=>{
            this.setState(()=>({count:this.state.count+counter}))
        },1000)
    }

    componentWillUnmount() {
        clearTimeout(this.timer)
    }

    render(){
        return(
            <div>
               <p>
                   {this.state.count}
               </p>
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