import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import SignUp from './pages/SignUp'

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/signup" component={SignUp} />
      </Switch>
    </BrowserRouter>
  )
}
