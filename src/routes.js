import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/signup" component={SignUp} />
        <Route path="/signin" component={SignIn} />
      </Switch>
    </BrowserRouter>
  )
}
