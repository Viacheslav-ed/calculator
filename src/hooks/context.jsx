import React, { useReducer, useContext, createContext } from 'react';
import PropTypes from 'prop-types';
import { initialState } from '../utils/config';
import reducer from './reducer';

const localInputValues = JSON.parse(localStorage.getItem('inputValues'));
if (localInputValues) initialState.inputValues = localInputValues;

const StateContext = createContext(initialState);

const StateContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <StateContext.Provider value={{ state, dispatch }}>{children}</StateContext.Provider>;
};

StateContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

const useStateContext = () => {
  const { state, dispatch } = useContext(StateContext);
  return { state, dispatch };
};

export { StateContextProvider, useStateContext };
