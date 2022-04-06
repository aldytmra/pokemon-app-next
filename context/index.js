import { useReducer, createContext, useEffect, useMemo } from 'react';
import { main } from './reducers/main';
import { INIT_DATA } from './types';

// initial state
const initialState = {
	MyPokemon: [],
};

// create context
const Context = createContext({});

// combine reducer function
const combineReducers =
	(...reducers) =>
	(state, action) => {
		for (let i = 0; i < reducers.length; i++)
			state = reducers[i](state, action);
		return state;
	};

// context provider
const Provider = ({ children }) => {
	const [state, dispatch] = useReducer(combineReducers(main), initialState); // pass more reducers combineReducers(user, blogs, products)
	const contextValue = useMemo(() => {
		return { state, dispatch };
	}, [state, dispatch]);
	useEffect(() => {
		if (!localStorage.getItem('pokemon')) {
			localStorage.setItem('pokemon', JSON.stringify(initialState));
		}
		//checking if there already is a state in localstorage
		//if yes, update the current state with the stored one
		dispatch({
			type: INIT_DATA,
			payload: JSON.parse(localStorage.getItem('pokemon')),
		});
	}, []);
	useEffect(() => {
		if (state !== initialState) {
			localStorage.setItem('pokemon', JSON.stringify(state));
			//create and/or set a new localstorage variable called "state"
		}
	}, [state]);

	return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

export { Context, Provider };
