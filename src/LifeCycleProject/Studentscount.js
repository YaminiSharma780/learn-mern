import React, { Component } from 'react'

export default class Studentscount extends Component {

componentDidUpdate(prevalue, prestate){
      
    if(prevalue.number !== this.props.number)

    {console.log("Updated Component");}
}

  render() {
    return (
      <div>
        <h2>{this.props.number}</h2>
      </div>
    )
  }
}

