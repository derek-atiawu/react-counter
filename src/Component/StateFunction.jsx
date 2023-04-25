import {useState} from 'react'

function StateFunction() {
    const[data,setData]=useState(0)
    function Increase(){
        setData(data+1)
    }

    function Decrease(){
        setData(data-1)
    }
  return (
    
    <div className='function'>
      <h1>State Funct Counter</h1>
      <h2>{data}</h2>
      <button onClick={Increase}>Increase</button>
      <button onClick={Decrease}>Decrease</button>

    </div>
  )
}

export default StateFunction
