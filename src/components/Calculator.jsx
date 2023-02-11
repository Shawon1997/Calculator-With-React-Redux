import React, { useState } from 'react'
import './calculator.css'
import { useDispatch,useSelector } from 'react-redux'
import { ans, backSpace, clear, loadButtons } from '../redux/action/calculator.action'
import { CALCULATOR_KEY } from '../redux/reducer/reducer'

const Calculator = () => {
    const [display,setDisplay]=useState('')
    const dispatch=useDispatch()
    const handleChange=(e)=>{
        setDisplay(e)
    }
    // dispatch(loadButtons(9))
    const viewCalculator=useSelector((state)=>{
      return state[CALCULATOR_KEY]
    })
    // console.log("selector",viewCalculator)
  return (
    <div className='p-2 badge bg-secondary mt-5' style={{border:"1px solid",margin:'auto',height:'365px',width:'290px'}}>
       <div className='form-control p-3 mt-2 ml-2 mr-2' style={{height:'44px'}}>
        {viewCalculator?.ans?.length?<h4>{viewCalculator?.ans}</h4>:<h4>{viewCalculator?.number}</h4>} 
       </div>
       <div className='mt-3 button-div'>
           <div className='badge bg-light text-dark text-center button-box pointer' onClick={()=>dispatch(loadButtons(9))}><h3>9</h3></div>
           <div className='badge bg-light text-dark text-center button-box' onClick={()=>dispatch(loadButtons(8))}><h3>8</h3></div>
           <div className='badge bg-light text-dark text-center button-box' onClick={()=>dispatch(loadButtons(7))}><h3>7</h3></div>
           <div className='badge bg-light text-dark text-center button-box' onClick={()=>dispatch(loadButtons('/'))}><h3>/</h3></div>
           <div className='badge bg-light text-dark text-center button-box' onClick={()=>dispatch(loadButtons(4))}><h3>4</h3></div>
           <div className='badge bg-light text-dark text-center button-box' onClick={()=>dispatch(loadButtons(5))}><h3>5</h3></div>
           <div className='badge bg-light text-dark text-center button-box' onClick={()=>dispatch(loadButtons(6))}><h3>6</h3></div>
           <div className='badge bg-light text-dark text-center button-box' onClick={()=>dispatch(loadButtons('*'))}><h3>*</h3></div>
           <div className='badge bg-light text-dark text-center button-box' onClick={()=>dispatch(loadButtons(1))}><h3>1</h3></div>
           <div className='badge bg-light text-dark text-center button-box' onClick={()=>dispatch(loadButtons(2))}><h3>2</h3></div>
           <div className='badge bg-light text-dark text-center button-box' onClick={()=>dispatch(loadButtons(3))}><h3>3</h3></div>
           <div className='badge bg-light text-dark text-center button-box' onClick={()=>dispatch(loadButtons('+'))}><h3>+</h3></div>
           <div className='badge bg-light text-dark text-center button-box' onClick={()=>dispatch(loadButtons(0))}><h3>0</h3></div>
           <div className='badge bg-light text-dark text-center button-box' onClick={()=>dispatch(clear())}><h3>AC</h3></div>
           <div className='badge bg-light text-dark text-center button-box' onClick={()=>dispatch(ans())}><h3>=</h3></div>
           <div className='badge bg-light text-dark text-center button-box' onClick={()=>dispatch(loadButtons('-'))}><h3>-</h3></div>
           <div className='badge bg-light text-dark text-center ' onClick={()=>dispatch(backSpace())}><h5>Back</h5></div>
       
       </div>
    </div>
  )
}

export default Calculator