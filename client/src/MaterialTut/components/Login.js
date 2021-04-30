import { Button, makeStyles } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router";
import { auth, provider } from "../lib/firebase.js";

const useStyles = makeStyles({
  root: {
    height: "100vh",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

const Login = () => {
  const classes = useStyles();
  const history = useHistory();

  const handleLogin = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        // var credential = result.credential;
        var user = result.user;
        localStorage.setItem("user", JSON.stringify(user));
        history.push("/");
      })
      .catch((error) => {
        // var errorCode = error.code;
        // var errorMessage = error.message;
        // The email of the user's account used.
        // var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        // var credential = error.credential;

        console.log(error);
      });
  };

  return (
    <div className={classes.root}>
      <Button variant="contained" onClick={handleLogin}>
        Log In with Google
      </Button>
    </div>
  );
};

export default Login;
