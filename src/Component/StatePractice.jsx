import React, { Component } from 'react'

class StatePractice extends Component {
    constructor()
    {
        super();
        this.state={Data:0}
    }
    Increase(){this.setState({Data:this.state.Data+1})}
    Decrease(){this.setState({Data:this.state.Data-1})}

  render() {
    return (
      <div className='container'>
        <h1>State Class Counter</h1>
        <h2>{this.state.Data}</h2>
        <button onClick={()=>this.Increase()}>Increase</button>
        <button onClick={()=>this.Decrease()}>Decrease</button>
      </div>
    )
  }
}

export default StatePractice
