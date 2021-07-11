import React, { useState, useEffect } from "react";

import CircularProgress from "@material-ui/core/CircularProgress";
import { callApi } from "../../api";
import { actions } from "../../constants/proyectConstants";
import { actions as categoriesActions } from "../../constants/categorieConstants";

import { useThunkReducer } from "../../reducers/thunk";
import {
  proyectCreateReducer,
  proyectEditReducer,
  proyectDetailsReducer,
} from "../../reducers/proyectReducers";
import { categoriesListReducer } from "../../reducers/categorieReducers";
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
  name: null,
  description: false,
  categorie: null,
  img: null,
  img2: null,
  linkGithub: null,
  linkDemo: null,
};
const initialStateUpdate = {
  loading: false,
  error: null,
  success: false,
};
const initialStateCategories = {
  loading: false,
  error: null,
  success: false,
  categories: null,
};
export default function ProyectCreateScreen({ match, history, location }) {
  let token = localStorage.getItem("token")
    ? JSON.parse(localStorage.getItem("token"))
    : "";
  let proyectId = location.search
    ? Number(location.search.split("=")[1])
    : null;
  const image =
    "https://images.unsplash.com/photo-1587560699334-cc4ff634909a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80";
  const [state, dispatch] = useThunkReducer(proyectCreateReducer, initialState);

  const [changeImg, setChangeImg] = useState(false);
  const [changeImg2, setChangeImg2] = useState(false);

  const [stateDetails, dispatchDetails] = useThunkReducer(
    proyectDetailsReducer,
    initialState
  );

  const [stateUpdate, dispatchUpdate] = useThunkReducer(
    proyectEditReducer,
    initialStateUpdate
  );

  const [stateCategories, dispatchCategories] = useThunkReducer(
    categoriesListReducer,
    initialStateCategories
  );
  const { categories } = stateCategories;
  const { loading, success, error } = state;

  const [proyect, setProyect] = useState();
  const {
    success: successUpdate,
    error: errorUpdate,
    loading: loadingUpdate,
  } = stateUpdate;

  const {
    loading: loadingDetails,
    error: errorDetails,
    success: successDetails,
    proyect: details,
  } = stateDetails;
  const handleChange = (event) => {
    setProyect({
      ...proyect,
      [event.target.name]: event.target.value,
    });
  };

  const submitHandler = () => {
    const proyectData = new FormData();
    proyectData.append("name", proyect?.name);
    proyectData.append("description", proyect?.description);
    proyectData.append("categorie", proyect?.categorie);
    proyectData.append("linkDemo", proyect?.linkDemo);
    proyectData.append("linkGithub", proyect?.linkGithub);
    proyectData.append("img", proyect?.img);
    proyectData.append("img2", proyect?.img2);
    if (!proyectId) {
      dispatch(
        callApi(
          "/api/proyects/register/",
          "POST",
          proyectData,
          {
            SUCESS: actions.PROYECT_CREATE_SUCCESS,
            REQUEST: actions.PROYECT_CREATE_REQUEST,
            FAIL: actions.PROYECT_CREATE_FAIL,
          },
          true,
          token
        )
      );
    } else {
      proyectData.append("changeImg", changeImg);
      proyectData.append("changeImg2", changeImg2);
      dispatchUpdate(
        callApi(
          `/api/proyects/update/${proyectId}/`,
          "PUT",
          proyectData,
          {
            SUCESS: actions.PROYECT_EDIT_SUCCESS,
            REQUEST: actions.PROYECT_EDIT_REQUEST,
            FAIL: actions.PROYECT_EDIT_FAIL,
          },
          true,
          token
        )
      );
      if (successUpdate) {
        history.push("/proyects/list");
      }
    }
  };
  useEffect(() => {
    if (proyectId) {
      if (!details) {
        dispatchDetails(
          callApi(
            `/api/proyects/getproyect/${proyectId}/`,
            "GET",
            {},
            {
              SUCESS: actions.PROYECT_DETAILS_SUCCESS,
              REQUEST: actions.PROYECT_DETAILS_REQUEST,
              FAIL: actions.PROYECT_DETAILS_FAIL,
            },
            false,
            token
          )
        );
      } else setProyect(details);
    }
    console.log(proyect);
  }, [history, details]);
  useEffect(() => {
    if (!categories) {
      dispatchCategories(
        callApi(
          "/api/categories/getcategories/",
          "GET",
          {},
          {
            SUCESS: categoriesActions.CATEGORIE_LIST_SUCCESS,
            REQUEST: categoriesActions.CATEGORIE_LIST_REQUEST,
            FAIL: categoriesActions.CATEGORIE_LIST_FAIL,
          },
          true,
          token
        )
      );
    }
    console.log(categories);
  }, [history]);
  return (
    <Grid container id="form-container" style={{ marginTop: "0" }}>
      <Grid item xs={12} sm={6} id="form-contact">
        <h2>Registrar proyecto</h2>
        <form className="form">
          <FormControl className="form-control">
            <InputLabel htmlFor="my-input">Nombre</InputLabel>
            <Input
              name="name"
              id="my-input"
              aria-describedby="my-helper-text"
              value={proyect?.name}
              onChange={handleChange}
              required
            />
          </FormControl>
          <FormControl className="form-control">
            <InputLabel htmlFor="my-input">Github</InputLabel>
            <Input
              name="linkGithub"
              id="my-input"
              aria-describedby="my-helper-text"
              value={proyect?.linkGithub}
              onChange={handleChange}
              required
            />
          </FormControl>
          <FormControl className="form-control">
            <InputLabel htmlFor="my-input">Demo link</InputLabel>
            <Input
              name="linkDemo"
              id="my-input"
              aria-describedby="my-helper-text"
              onChange={handleChange}
              value={proyect?.linkDemo}
              required
            />
          </FormControl>
          <FormControl className="form-control">
            <InputLabel htmlFor="my-input">Categoría</InputLabel>
            <Select
              name="categorie"
              native
              value={proyect?.categorie?._id}
              onChange={handleChange}
            >
              {categories?.map((categorie) => (
                <option value={categorie._id}>{categorie.name}</option>
              ))}
            </Select>
          </FormControl>
          <FormControl className="form-control" style={{ marginTop: "2vh" }}>
            <label>Descripción</label>
            <textarea
              name="description"
              onChange={handleChange}
              value={proyect?.description}
              style={{ resize: "none" }}
              as="textarea"
            ></textarea>
          </FormControl>
          <FormControl className="form-control" style={{ marginTop: "2vh" }}>
            <label>Imagen</label>
            <input
              // value={proyectId && proyect?.img}
              type="file"
              onChange={(e) => {
                setChangeImg(true);
                setProyect({
                  ...proyect,
                  ["img"]: e.target.files[0],
                });
              }}
              name="img"
            />
          </FormControl>
          <FormControl className="form-control" style={{ marginTop: "2vh" }}>
            <label>Imagen 2 </label>
            <input
              type="file"
              // value={proyectId && proyect?.img2}
              onChange={(e) => {
                setChangeImg2(true);
                setProyect({
                  ...proyect,
                  ["img2"]: e.target.files[0],
                });
              }}
              name="img2"
            />
          </FormControl>

          {error && (
            <Alert severity="error" style={{ marginTop: "3vh" }}>
              {error}
            </Alert>
          )}

          {success && (
            <Alert severity="success" style={{ marginTop: "3vh" }}>
              Proyecto subido correctamente
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
