import {CHANGE_COUNTER} from './actionTypes';

export const changeCounter = (change) => {
	return {
		type: CHANGE_COUNTER,
		payload: change
	};
};