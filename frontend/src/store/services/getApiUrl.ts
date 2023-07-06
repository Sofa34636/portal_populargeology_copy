export const getApiUrl = () =>
    window.location.origin
    .split(':')
    .filter((e, i) => i != 2)

    // production
      .join(':') + ':8000/api';

    // deploy
    //   .join(':') + '/api';
