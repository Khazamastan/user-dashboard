import "./styles.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
const Register = React.lazy(() => import('./Pages/Register'));
const UserList = React.lazy(() => import('./Pages/UserList'));
import ErrorBoundary from "./ErrrorBoundary";
import MainNav from "./Nav";
import { useDispatch, useSelector } from "react-redux";
import { initGetUsers } from "./actions";
import Spinner from "./Components/Spinner";
import { fetchingUsers, errorUsers } from "./selectors";

function App() {
  const dispatch = useDispatch();
  const isFetchingUserData = useSelector(fetchingUsers);
  const isErrorFetchingData = useSelector(errorUsers);
  useEffect(() => {
    dispatch(initGetUsers());
  }, []);


  return (
    <div>
      <BrowserRouter>
        <MainNav />
        <div className="app-container">
          <React.Suspense fallback={<div className="spinner-container"><Spinner /></div>}>
            <ErrorBoundary>
              <Switch>
                <Route exact path={"/register"} component={Register} />
                <Route exact path={"/register/:id"} component={Register} />
                <Route exact path={"/users"} component={UserList} />
                <Route path={"/"}>
                  Welcome !
                </Route>
              </Switch>
            </ErrorBoundary>
          </React.Suspense>
        </div>
        {isFetchingUserData ? <div className="spinner-container"><Spinner /></div> : null}
        {isErrorFetchingData ? <h1>Error Fetching User Data</h1> : null}
      </BrowserRouter>
    </div>
  );
}

export default App // HOC