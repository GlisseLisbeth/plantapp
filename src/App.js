import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';

import RouteApp from './routers/RouteApp';

const App = () => {
  return (
    <Provider store = { store }>
      <RouteApp/>
    </Provider>
  )
}

export default App