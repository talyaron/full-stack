import React, { createContext, useContext, useReducer } from 'react';

const StateContext = createContext();

export const StateProvider = ({ reducer, appState, children }) => (
    <StateContext.Provider value={useReducer(reducer, appState)}>
        {children}
    </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);