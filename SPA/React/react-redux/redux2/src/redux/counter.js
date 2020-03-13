import {CHANGE_COUNTER, MULTIPLE} from './actionTypes'
const initialState = {
	counter: 0
};

export default function(state = initialState, action){
    const { payload, type } = action;

    switch (type) {
        case CHANGE_COUNTER: {
         
			return {
				...state,
				counter: state.counter+payload
			};
		}
		case MULTIPLE:{
			return{
				...state,
				counter: state.counter*payload
			}
		}
        
		default:
			return state;
	}
}