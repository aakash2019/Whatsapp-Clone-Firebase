import React, { createContext, setContext, useContext, useReducer } from 'react';

export const StateContext = createContext();

// BUILD A PROVIDER
export const StateProvider = ({ reducer, initialState, children }) => (
	<StateContext.Provider value={useReducer(reducer, initialState)}>
		{children}
	</StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);