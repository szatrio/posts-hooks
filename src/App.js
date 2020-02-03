import React from 'react';
import { Switch, Route } from 'react-router-dom'

import UseStateUseEffect from './components/UseStateUseEffect'

const App = () => {

  return (
    <Switch>
      <Route path='/' component={UseStateUseEffect} />
    </Switch>
  )

}

export default App;
