import { CalculatorReducer,CALCULATOR_KEY } from "./reducer/reducer";
import {combineReducers} from 'redux'

console.log('roort',CalculatorReducer)
const Rootreducer=combineReducers({
    [CALCULATOR_KEY]:CalculatorReducer
})

export {Rootreducer}