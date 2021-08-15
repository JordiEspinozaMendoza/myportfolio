import { React, useEffect, useState } from "react";
import { Grid, Button } from "@material-ui/core";
import "./styles.css";

//my thunk reducer
import { useThunkReducer } from "../../reducers/thunk";
import { proyectDetailsReducer } from "../../reducers/proyectReducers";
//api
import { callApi } from "../../api";
import { actions } from "../../constants/proyectConstants";
import ProyectPreview from "../../components/ProyectPreview";
const initialState = {
  loading: false,
  error: null,
  success: false,
  proyect: null,
};
export default function ProyectScreen({ match, history, location }) {
  let proyectId = location.search
    ? Number(location.search.split("=")[1])
    : null;
  const [proyect, setProyect] = useState();

  const [state, dispatch] = useThunkReducer(
    proyectDetailsReducer,
    initialState
  );
  const { loading, success, error, proyect: details } = state;
  useEffect(() => {
    if (!details) {
      dispatch(
        callApi(
          `/api/proyects/getproyect/${proyectId}/`,
          "GET",
          {},
          {
            SUCESS: actions.PROYECT_DETAILS_SUCCESS,
            REQUEST: actions.PROYECT_DETAILS_REQUEST,
            FAIL: actions.PROYECT_DETAILS_FAIL,
          }
        )
      );
    } else setProyect(details);
  }, [history, details]);
  return (
    <Grid container>
      <div className="proyect-container">
        <h2>{proyect?.name}</h2>
        <span>{proyect?.description}</span>
        <span style={{ marginTop: "2rem", marginBottom: "1rem" }}>
          Las demos pueden tardar en cargar por el uso de hosting gratuito
        </span>
        <Grid container xs={5} className="buttons-container">
          {proyect?.linkGithub ? (
            <Grid item xs={6} sm={6}>
              <a target="_blank" href={proyect.linkGithub}>
                <Button variant="contained" className="button-github">
                  Gitub
                </Button>
              </a>
            </Grid>
          ) : null}

          {proyect?.linkDemo && (
            <Grid item xs={6} sm={6} className="button-demo">
              <a href={proyect.linkDemo} target="_blank">
                <Button variant="contained" className="button-demo">
                  Demo
                </Button>
              </a>
            </Grid>
          )}
        </Grid>

        <ProyectPreview proyect={proyect} />

        <h2 style={{ marginTop: "-15%" }}>Vista en celular</h2>
        <div className="view-phone">
          <img
            className="img-phone"
            src={`https://res.cloudinary.com/jordiespinoza/${proyect?.img2}`}
          />
        </div>
      </div>
    </Grid>
  );
}
