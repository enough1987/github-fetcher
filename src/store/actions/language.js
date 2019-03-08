import axios from 'axios';

export const languageActionTypes = {
   SET_LANGUAGE : 'SET_LANGUAGE',
   FAILED_REQUEST : 'FAILED_REQUEST'
};

export const getLanguage = (language) => (dispatch) => {
  axios.get(`https://api.github.com/search/repositories?q=stars:%3E1+language:${language}&sort=stars&order=desc&type=Repositories`)
    .then((data) => { // eslint-disable-line promise/always-return
      const repos = data.data.items;
      console.log(' data : ', data.data);

      dispatch(_getLanguage(language, repos));
    })
    .catch(() => {
      dispatch(failedRequest({
        failRequest: true
      }));
    });
};

export const _getLanguage = (language, repos) => ({
  type: languageActionTypes.SET_LANGUAGE,
  language,
  repos
});

export const failedRequest = () => ({
  type: languageActionTypes.FAILED_REQUEST
});
