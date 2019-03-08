import { languageActionTypes } from '../actions/language';

const defaultState = {
  repos: []
};

const language = (state = defaultState, action) => {
  switch (action.type) {
    case languageActionTypes.SET_LANGUAGE:
      return {
        ...state,
        repos: action.repos,
        language: action.action
      };
    default:
      return state;
  }
};

export default language;
