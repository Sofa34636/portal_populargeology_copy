export const getApiUrl = () =>
    window.location.origin
    .split(':')
    .filter((e, i) => i != 2)
    //.join(':') + ':8000/api';
    .join(':') + '/api';
