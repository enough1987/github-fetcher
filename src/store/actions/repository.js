import axios from 'axios';

export const repositoryActionTypes = {
  SET_REPOSITORY: 'SET_REPOSITORY',
  FAILED_REQUEST: 'FAILED_REQUEST'
};

export const getRepository = (repository) => (dispatch) => {
  axios.get(`https://api.github.com/search/repositories?q=stars:>1+language:${repository}&sort=stars&order=desc&type=Repositories$page=1&per_page=100`)
    .then((data) => { // eslint-disable-line promise/always-return
      const repos = data.data.items;
      console.log(' data : ', data.data); // eslint-disable-line no-console

      dispatch(_getRepository(repository, repos));
    })
    .catch(() => {
      dispatch(failedRequest({
        failRequest: true
      }));
    });
};

export const _getRepository = (repository, repos) => ({
  type: repositoryActionTypes.SET_REPOSITORY,
  repository,
  repos
});

export const failedRequest = () => ({
  type: repositoryActionTypes.FAILED_REQUEST
});
