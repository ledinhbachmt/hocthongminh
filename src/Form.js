import React from 'react';

export default class Form extends React.Component{
  state={
    namberA:"",
    numberB:"",
    result:""
  };
  render(){
    return (
      <form>
        <input  name="numberA"
                placeholder="number a" 
                value={this.state.numberA}
                onChange={e=>this.setState({numberA:e.target.value})}
        />
        <input  name="numberB"
                placeholder="number b" 
                value={this.state.numberB}
                onChange={e=>this.setState({numberA:e.target.value})}
        />
        <input  name="result"
                placeholder="result" 
                value={this.state.result}
                onChange={e=>this.setState({result:e.target.value})}
        />
      </form>
          );
  }
}