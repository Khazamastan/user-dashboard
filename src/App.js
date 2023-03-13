import "./styles.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route, Redirect, useHistory } from "react-router-dom";
const Register = React.lazy(() => import('./Pages/Register'));
const UserList = React.lazy(() => import('./Pages/UserList'));
import ErrorBoundary from "./ErrrorBoundary";
import Login from "./Login";
import MainNav from "./Nav";
import { useDispatch, useSelector } from "react-redux";
import { initGetUsers } from "./actions";
import Spinner from "./Components/Spinner";
import { fetchingUsers, errorUsers } from "./selectors";


export const isAuthenticated = () => {
  const isLoggedin  = localStorage.getItem("loggedInUser");
  if(isLoggedin){
    return true;
  }
}

const Logout = () => {
  const history = useHistory();
  useEffect(() => {
    localStorage.clear(); 
    history.push('/login') 
  }, [])
  return null
}
function App() {
  const history = useHistory();
  const dispatch = useDispatch();
  const isFetchingUserData = useSelector(fetchingUsers);
  useEffect(() => {
    dispatch(initGetUsers());
  }, []);

  function PrivateRoute({ component: Component, ...rest }) {
    return (
      <Route
        {...rest}
        render={props =>
          isAuthenticated() ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: "/login",
              }}
            />
          )
        }
      />
    );
  }

  return (
    <div>
      <BrowserRouter>
        <MainNav />
        <div className="app-container">
          <React.Suspense fallback={<div className="spinner-container"><Spinner /></div>}>
            <ErrorBoundary>
              <Switch>
                <Route exact path={"/login"} component={Login}/>
                <Route exact path={"/logout"} component={Logout}/>
                <PrivateRoute exact path={"/register"} component={Register} />
                <PrivateRoute exact path={"/register/:id"} component={Register} />
                <PrivateRoute exact path={"/users"} component={UserList} />
                <PrivateRoute path={""}>
                  Welcome !
                </PrivateRoute>
              </Switch>
            </ErrorBoundary>
          </React.Suspense>
        </div>
        {isFetchingUserData ? <div className="spinner-container"><Spinner /></div> : null}
      </BrowserRouter>
    </div>
  );
}

export default App // HOC