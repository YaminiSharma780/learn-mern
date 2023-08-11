import React, { Component } from 'react'
import Studentscount from './Studentscount'
export default class Demo extends Component {


  constructor(){
    super();
    this.state = {

      numberofstudent : 0

    }
  }

componentDidMount(){
  console.log("our component rendered now");
}

componentWillUnmount(){
  console.log("Component unmounted")
}


increment(){
  this.setState({numberofstudent: this.state.numberofstudent + 1})
}


  render() {
    return (
      <div>
        <h1> Hello GFG Students </h1>

        <Studentscount number={this.state.numberofstudent}/>

        {/* <Studentcount1 number={this.state.numberofstudent}/> */}

        <h2>{this.state.numberofstudent}</h2>

        <button onClick={this.increment.bind(this)}> Show total students</button>

        <br />
        <br />

        <button onClick={

          ()=>{this.increment()}
          
          }> Show total number of students</button>


      </div>
    )
  }
}