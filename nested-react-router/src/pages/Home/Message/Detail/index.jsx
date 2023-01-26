import React, { Component } from 'react'

const DetailData=[
    {id:"01", content:"kyle"},
    {id:"02", content:"karen"},
    {id:"03", content:"tenz"}
]

export default class Detail extends Component {

  render() {
    const{id}=this.props.match.params
    const findResult=DetailData.find((dataObj)=>{
        return dataObj.id===id
    })
    console.log(findResult)
    return (
      <ul>
        <li>{this.props.match.params.id}</li>
        <li>{this.props.match.params.message}</li>
        <li>{findResult.content}</li>
      </ul>
    )
  }
}
