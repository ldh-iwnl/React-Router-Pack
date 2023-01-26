import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import Detail from './Detail'
export default class Message extends Component {
  pushShow=(id,message)=>{
    this.props.history.push("/home/message/detail",{id,message})
  }
  replaceShow=(id,message)=>{
    this.props.history.replace("/home/message/detail",{id,message})
  }
  back=()=>{
    this.props.history.goBack()
  }
  forward=()=>{
    this.props.history.goForward()
  }
  state={
    messageArr:[
      {id:"01", message:"message01"},
      {id:"02", message:"message02"},
      {id:"03", message:"message03"}
    ] 
  } 
  render() {
    const {messageArr}=this.state
    return (
      <div>
        <ul>
            {
              messageArr.map((mesgObj)=>{
                return(
                  <li key={mesgObj.id}>
                    {/* passing search parameter */}
                  <Link to={{pathname:"/home/message/detail",state:{id:mesgObj.id,message:mesgObj.message}}}>{mesgObj.message}</Link>&nbsp;&nbsp;
                  &emsp;<button onClick={()=>this.pushShow(mesgObj.id,mesgObj.message)}>push request</button>
                  &emsp;<button onClick={()=>this.replaceShow(mesgObj.id,mesgObj.message)}>replace request</button>

                  </li>
                )
              })
            }
        </ul>
        <hr/>
        {/* search parameter do not need to pass the value */}
            <Route path="/home/message/detail" component={Detail}/>


      </div>
    )
  }
}
