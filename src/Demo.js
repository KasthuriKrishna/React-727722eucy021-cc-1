import React, { Component } from 'react'
import './Demo.css'
export default class Demo extends Component {
    constructor(props){
        super(props)
        this.state={count:0}
    }
    increment=()=>{
        this.setState(prevState=>({count:prevState.count+1}))
    }
    decrement=()=>{
        if(this.state.count>0){
            return(this.setState(prevState=>({count:prevState.count-1})))
        }
        else{
            return(this.setState(prevState=>({count:prevState.count=0})))
            
        }
    }
    cart=()=>{
        alert(this.state.count+" "+this.props.item+" added")
    }
  render() {
    return (
      <body>
      <table>
      <tbody>
      <tr>
      <td className='tdd'><img src={this.props.image} width="10%" height="10%"/></td>
      <td>{this.props.item}</td>
      <p>{this.props.descrp}</p>
      <td className='tdd'>INR {this.props.amt}/-</td>
      <td className='tdd'>
      <button onClick={this.increment}> + </button>
      {this.state.count}
      <button onClick={this.decrement}> - </button>
      </td>
      <td className='tdd'><button onClick={this.cart}>Add to cart</button></td>
      </tr> 
      </tbody>
      </table>
      </body>
    )
  }
}
