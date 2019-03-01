import checkPropTypes from 'check-prop-types';
import { createStore, applyMiddleware } from 'redux';

import rootReducer from '../store/reducers';
import { middlewares } from '../store/configStore';

export const storeFactory = (initialState = {}) => {
  const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);

  return createStoreWithMiddleware(rootReducer, initialState);
};

export const findByAttr = (wrapper, name) => {
  return wrapper.find(`[data-test='${name}']`);
};

export const checkTypes = (component, props) => {
  return checkPropTypes(component.propTypes, props, 'prop', component.name);
};
