import { repositoryActionTypes } from '../actions/repository';

const defaultState = {
  repos: []
};

const repository = (state = defaultState, action) => {
  switch (action.type) {
    case repositoryActionTypes.SET_REPOSITORY:
      return {
        ...state,
        repos: action.repos,
        repository: action.action
      };
    default:
      return state;
  }
};

export default repository;
