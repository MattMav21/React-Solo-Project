import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import LoginFormPage from './components/LoginFormPage';
import SignupFormPage from './components/SignupFormPage';
import * as sessionActions from './store/session';
import Navigation from './components/Navigation';
import MainPage from './components/MainPage';
import Picture from './components/Picture';
import configureStore from './store';
import PictureUploadForm from './components/PictureUploadForm';
import UserPage from './components/UserPage';

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch])

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path="/">
            <MainPage />
          </Route>
          <Route path="/login">
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route exact path="/users/:userId">
            <UserPage />
          </Route>
          <Route exact path="/pictures" >
            <PictureUploadForm />
          </Route>
          <Route exact path="/pictures/:pictureId" >
            <Picture />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
