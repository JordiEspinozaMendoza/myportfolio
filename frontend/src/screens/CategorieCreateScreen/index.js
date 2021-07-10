import React, { useState, useEffect } from "react";

import CircularProgress from "@material-ui/core/CircularProgress";
import { callApi } from "../../api";
import { actions } from "../../constants/categorieConstants";

import { useThunkReducer } from "../../reducers/thunk";
import {
  categorieCreateReducer,
  categorieDetailsReducer,
  categorieUpdateReducer,
} from "../../reducers/categorieReducers";
import {
  FormControl,
  Input,
  InputLabel,
  FormHelperText,
  Grid,
  TextField,
  Button,
  Select,
} from "@material-ui/core";
import Alert from "../../components/Alert";

import "./styles.css";

const initialState = {
  _id: null,
  name: null,
};
const initialStateUpdate = {
  loading: false,
  error: null,
  success: false,
};
export default function CategorieCreateScreen({ match, history, location }) {
  let categorieId = location.search
    ? Number(location.search.split("=")[1])
    : null;
  const [categorie, setCategorie] = useState();
  const image =
    "https://images.unsplash.com/photo-1587560699334-cc4ff634909a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80";

  const [state, dispatch] = useThunkReducer(
    categorieCreateReducer,
    initialState
  );
  const [stateDetails, dispatchDetails] = useThunkReducer(
    categorieDetailsReducer,
    initialState
  );

  const [stateUpdate, dispatchUpdate] = useThunkReducer(
    categorieUpdateReducer,
    initialStateUpdate
  );
  const {
    success: successUpdate,
    error: errorUpdate,
    loading: loadingUpdate,
  } = stateUpdate;

  const { loading, success, error } = state;
  const {
    loading: loadingDetails,
    error: errorDetails,
    success: successDetails,
    categorie: details,
  } = stateDetails;

  const handleChange = (event) => {
    setCategorie({
      ...categorie,
      [event.target.name]: event.target.value,
    });
  };

  const submitHandler = () => {
    let token = localStorage.getItem("token")
      ? JSON.parse(localStorage.getItem("token"))
      : "";
    if (!categorieId) {
      dispatch(
        callApi(
          "/api/categories/register/",
          "POST",
          categorie,
          {
            SUCESS: actions.CATEGORIE_CREATE_SUCCESS,
            REQUEST: actions.CATEGORIE_CREATE_REQUEST,
            FAIL: actions.CATEGORIE_CREATE_FAIL,
          },
          false,
          token
        )
      );
    } else {
      dispatchUpdate(
        callApi(
          `/api/categories/update/${categorieId}/`,
          "PUT",
          categorie,
          {
            SUCESS: actions.CATEGORIE_EDIT_SUCCESS,
            REQUEST: actions.CATEGORIE_EDIT_REQUEST,
            FAIL: actions.CATEGORIE_EDIT_FAIL,
          },
          false,
          token
        )
      );
      if (successUpdate) {
        history.push("/categories/list");
      }
    }
  };
  useEffect(() => {
    if (categorieId) {
      if (!details) {
        let token = localStorage.getItem("token")
          ? JSON.parse(localStorage.getItem("token"))
          : "";
        dispatchDetails(
          callApi(
            `/api/categories/getcategorie/${categorieId}/`,
            "GET",
            {},
            {
              SUCESS: actions.CATEGORIE_DETAILS_SUCCESS,
              REQUEST: actions.CATEGORIE_DETAILS_REQUEST,
              FAIL: actions.CATEGORIE_DETAILS_FAIL,
            },
            false,
            token
          )
        );
      } else setCategorie(details);
    }
  }, [history, details]);
  return (
    <Grid container id="form-container" style={{ marginTop: "0" }}>
      <Grid item xs={12} sm={6} id="form-contact">
        {categorieId ? <h2>Editar categoría</h2> : <h2>Registrar categoría</h2>}
        <form className="form">
          <FormControl className="form-control">
            <InputLabel htmlFor="my-input">Nombre</InputLabel>
            <Input
              name="name"
              id="my-input"
              aria-describedby="my-helper-text"
              onChange={handleChange}
              required
              value={categorie?.name}
            />
          </FormControl>

          {error && (
            <Alert severity="error" style={{ marginTop: "3vh" }}>
              {error}
            </Alert>
          )}

          {success && (
            <Alert severity="success" style={{ marginTop: "3vh" }}>
              Categoría creada correctamente
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
