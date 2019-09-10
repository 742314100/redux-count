import {INCREMENT,DECREMENT} from "./action-types"

const initState={
    num:1
}

export default function count(state=initState.num,action){

    switch(action.type){
        case INCREMENT:
            return state+action.data
        case DECREMENT:
            return state-action.data
        default:
            return state
    }

}






