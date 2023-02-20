import "./styles.css";
import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Register from "./Pages/Register";
import UserList from "./Pages/UserList";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path={"/register"}>
            <Register />
          </Route>
          <Route exact path={"/register/:id"} component={Register}/>
          <Route exact path={"/users"} component={UserList}/>
          <Route path={"/"}>
            <h1>Welcome to Register</h1>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

// var studentObject = {
//   name: "Student 1",
//   info: { score: { total : 100}},
//   getName: function () {
//     var list = [1, 2, 3, 4];
//     list.forEach((item) => {
//       console.log("anonymous", this.info.score.total);
//       console.log(item + "- " + this.name);
//     });
//   }
// };

// studentObject.getName();
