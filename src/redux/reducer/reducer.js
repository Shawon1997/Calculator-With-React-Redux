import { ANS, LOAD_BUTTONS, BACKSPACE, CLEAR } from '../action/calculator.actionType'

export const CALCULATOR_KEY = 'calculator'

const initialState = {
    number: '',
    ans: ''
}

export const CalculatorReducer = (state = initialState, action) => {
    const { type, payload } = action
    // console.log('payload',state.number.concat(payload))
    switch (type) {
        case LOAD_BUTTONS:
            return {
                ...state,
                ...payload,
                number: state.number.concat(payload)
            }
        case ANS:
            try {
                return{
                    ...state,
                    ...payload,
                    ans:eval(state.number).toString()
                }
            } catch (error) {
                return{
                    ...state,
                    ...payload,
                    ans:'Error'
                }
            }
        case CLEAR:
            return{
                ...state,
                ...payload,
                number:'',
                ans:''
            }
        case BACKSPACE:
            return{
                ...state,
                ...payload,
                number:(state.number).slice(0,-1),
                ans:''
            }
        default:return state
    }
}