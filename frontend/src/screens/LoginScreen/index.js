import React, { useState, useEffect } from "react";

import CircularProgress from "@material-ui/core/CircularProgress";
import { callApi } from "../../api";
import { actions } from "../../constants/userContants";

import { useThunkReducer } from "../../reducers/thunk";
import { userLoginReducer } from "../../reducers/userReducers";
import {
  FormControl,
  Input,
  InputLabel,
  FormHelperText,
  Grid,
  TextField,
  Button,
} from "@material-ui/core";

import Alert from "../../components/Alert";
import "./styles.css";

const initialState = {
  error: null,
  loading: false,
  success: false,
  userInfo: null,
};

export default function LoginScreen({ history, location }) {
  const image =
    "https://images.unsplash.com/photo-1587560699334-cc4ff634909a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80";
  const [state, dispatch] = useThunkReducer(userLoginReducer, initialState);

  const { loading, success, error } = state;

  const [user, setUser] = useState(initialState);
  const { email, password } = user;

  const handleChange = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };

  const submitHandler = () => {
    dispatch(
      callApi("/api/users/login/", "POST", user, {
        SUCESS: actions.USER_LOGIN_SUCESS,
        REQUEST: actions.USER_LOGIN_REQUEST,
        FAIL: actions.USER_LOGIN_FAIL,
      })
    );
  };
  useEffect(() => {
    if (success) {
      window.location.reload();
      history.push("/");
    }
  }, [success]);
  return (
    <Grid container id="form-container" style={{ marginTop: "0" }}>
      <Grid item xs={12} sm={6} id="form-contact">
        <h2>Login</h2>
        <form className="form">
          <FormControl className="form-control">
            <InputLabel htmlFor="my-input">Usuario</InputLabel>
            <Input
              name="username"
              id="my-input"
              aria-describedby="my-helper-text"
              onChange={handleChange}
              required
            />
          </FormControl>
          <FormControl className="form-control">
            <InputLabel htmlFor="my-input">Contraseña</InputLabel>
            <Input
              name="password"
              id="my-input"
              type="password"
              onChange={handleChange}
              aria-describedby="my-helper-text"
              required
            />
          </FormControl>
          {error && (
            <Alert severity="error" style={{ marginTop: "3vh" }}>
              {error}
            </Alert>
          )}
          {loading ? (
            <CircularProgress />
          ) : (
            <Button variant="contained" color="primary" onClick={submitHandler}>
              Enviar
            </Button>
          )}
        </form>
      </Grid>
      <Grid className="image-container" item xs={12} sm={6}>
        <img className="image" src={image} />
      </Grid>
    </Grid>
  );
}
