import React, { Component, useEffect } from 'react';
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from './features/userSlice';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,

} from 'react-router-dom';

import Header from './components/Header/Header';
import ViewQuestion from './components/ViewQuestion'
import Auth from './components/Auth';
import StackOverFlow from './components/StackOverFlow';
import Question from './components/Add-Question/Question';


function App() {
  // 
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          login({
            uid: authUser.uid,
            photo: authUser.photoURL,
            displayName: authUser.displayName,
            email: authUser.email,
          }))
      }
      else {
        dispatch(logout())
      }
    })
  }, [dispatch])

  const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => user
      ? (<Component {...props} />)
      : (<Redirect
        to={{
          pathname: '/auth',
          state: {
            from: props.location
          }
        }} />)}
    />
  )

  // 

  return (
    <div className="App">
      <Router>
        <Header />
        <Switch >
          <Route exact path={user ? '/' : "/auth"} component={user ? StackOverFlow : Auth} />
          <PrivateRoute exact path='/add-question' component={Question} />
          <PrivateRoute path='/question' component={ViewQuestion} />
          {/* <PrivateRoute exact path='/' component={StackOverFlow} /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
