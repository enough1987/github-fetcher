import checkPropTypes from 'check-prop-types';
import { createStore } from 'redux';

import rootReducer from './store/reducers'

export const storeFactory = (initialState) => {
  return createStore(rootReducer, initialState);
}

export const findByAttr = (wrapper, name) => {
    return wrapper.find(`[data-test='${name}']`);
}

export const checkTypes = (component, props) => {
    return checkPropTypes(component.propTypes, props, 'prop', component.name);
}
