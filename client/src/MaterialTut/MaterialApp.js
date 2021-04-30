import { useStoreActions } from "easy-peasy";
import React, { useEffect } from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import Create from "./components/Create";
import Layout from "./components/Layout";
import Notes from "./components/Notes";
import PrivateRoute from "./components/PrivateRoute";
import { auth } from "./lib/firebase";

export default function MaterialApp() {
  const setUser = useStoreActions((actions) => actions.setUser);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
      localStorage.setItem('user', JSON.stringify(user))
    });
  }, [setUser]);

  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Switch>
            <PrivateRoute exact path="/create" component={Create} />
            {/* <Route exact path="/create" component={Create} /> */}
            <PrivateRoute path="/" component={Notes} />
            {/* <Route path="/" component={Notes} /> */}
          </Switch>
        </Layout>
      </BrowserRouter>
    </div>
  );
}
