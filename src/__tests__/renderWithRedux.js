import { cleanup, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import reducer from '@reducers'
import React from 'react'

const renderWithRedux = (
  component,
  { initialState, store = createStore(reducer, initialState) } = {},
) => ({
  ...render(<Provider store={store}>{component}</Provider>),
  store,
});

export default renderWithRedux;
