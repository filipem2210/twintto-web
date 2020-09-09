import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import Profile from './pages/Profile'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/signup" component={SignUp} />
        <Route path="/signin" component={SignIn} />
        <Route path="/profile" component={Profile} />

        <Route path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  )
}
