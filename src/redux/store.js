import { Rootreducer } from "./rootReducer";

import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { CalculatorReducer, calculatorReducer } from "./reducer/reducer";
console.log('rootreducer',CalculatorReducer)
export const Store = createStore(Rootreducer, applyMiddleware(thunk))

 console.log('store',Store)