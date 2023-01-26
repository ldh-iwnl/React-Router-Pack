import React, { Component } from 'react'
import qs from 'qs'

const DetailData=[
    {id:"01", content:"kyle"},
    {id:"02", content:"karen"},
    {id:"03", content:"tenz"}
]

export default class Detail extends Component {

  render() {
    //receiving search parameter
    const{search}=this.props.location
    const {id,message}=qs.parse(search.slice(1))
    const findResult=DetailData.find((dataObj)=>{
        return dataObj.id===id
    })
    console.log(findResult)
    return (
      <ul>
        <li>{id}</li>
        <li>{message}</li>
        <li>{findResult.content}</li>
      </ul>
    )
  }
}
