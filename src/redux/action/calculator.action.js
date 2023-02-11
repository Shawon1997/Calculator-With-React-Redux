import {ANS,LOAD_BUTTONS,BACKSPACE,CLEAR} from './calculator.actionType'

export const loadButtons=(number)=>{
    // console.log('shawon',number)
    return{
       type:LOAD_BUTTONS,
       payload:number
    }
}
export const ans=(number)=>{
    return{
       type:ANS,
       payload:number
    }
}
export const backSpace=(number)=>{
    return{
       type:BACKSPACE,
       payload:number
    }
}
export const clear=(number)=>{
    return{
       type:CLEAR,
       payload:number
    }
}