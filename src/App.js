import "./styles.css";
import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Register from "./Pages/Register";
import UserList from "./Pages/UserList";
import MainNav from "./Nav";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <MainNav/>
        <div className="app-container">
          <Switch>
            <Route exact path={"/register"}>
              <Register />
            </Route>
            <Route exact path={"/register/:id"} component={Register}/>
            <Route exact path={"/users"} component={UserList}/>
            <Route path={"/"}>
              <h1>Welcome !</h1>
            </Route>
          </Switch>
        </div>
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
