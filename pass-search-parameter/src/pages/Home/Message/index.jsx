import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import Detail from './Detail'
export default class Message extends Component {
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
                  <Link to={`/home/message/detail/?id=${mesgObj.id}&message=${mesgObj.message}`}>{mesgObj.message}</Link>&nbsp;&nbsp;
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
