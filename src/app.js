import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import * as ROUTES from './constants/routes'

import { Home, Browse, Signin, Signup } from './pages'
import { IsUserRedirect, ProtectedRoute } from './helpers/routes'

export default function App() {
  const user = {};
  return (
      <Router>
        <Routes>
          <Route path={ROUTES.SIGN_IN} element={
            <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE}>
              <Signin />
            </IsUserRedirect>}>
          </Route>
          <Route path={ROUTES.SIGN_UP} element={
            <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE}>
              <Signup />
            </IsUserRedirect>}>
          </Route>
          <Route exact path={ROUTES.HOME} element={<Home />} />
          <Route element={
            <ProtectedRoute user={user}>
              <Browse />
            </ProtectedRoute>
            } path={ROUTES.BROWSE}>
          </Route>
        </Routes>
      </Router>
  );
}
