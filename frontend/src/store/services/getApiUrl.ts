export const getApiUrl = () =>
  window.location.origin
    .split(':')
    .filter((e, i) => i != 2)
    .join(':') + '/api';

