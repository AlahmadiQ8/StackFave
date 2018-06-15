import React from 'react';

const { Provider, Consumer } = React.createContext({
  token: '',
  error: '',
});

export { Provider, Consumer };
