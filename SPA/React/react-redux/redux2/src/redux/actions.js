import {CHANGE_COUNTER, MULTIPLE} from './actionTypes';

export const changeCounter = (change) => {
	return {
		type: CHANGE_COUNTER,
		payload: change
	};
};

export const multiple = (multi)=>{
	return {
		type: MULTIPLE,
		payload: multi
	};
}