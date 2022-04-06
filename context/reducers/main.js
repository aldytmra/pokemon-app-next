import { INIT_DATA, UPDATE_MYPOKEMON } from '../types';

export function main(state, action) {
	switch (action.type) {
		case INIT_DATA:
			return action.payload;
		case UPDATE_MYPOKEMON:
			return {
				...state,
				MyPokemon: action.payload,
			};
		default:
			return state;
	}
}
