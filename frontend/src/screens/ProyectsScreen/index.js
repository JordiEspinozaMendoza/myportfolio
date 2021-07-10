import { React, useEffect } from "react";

import { Grid, Button } from "@material-ui/core";
import "./styles.css";
import { Link } from "react-router-dom";
//Components
import ProyectPreview from "../../components/ProyectPreview";
//my thunk reducer
import { useThunkReducer } from "../../reducers/thunk";
import { proyectsListReducer } from "../../reducers/proyectReducers";
//api
import { callApi } from "../../api";
import { actions } from "../../constants/proyectConstants";
const initialState = {
  loading: false,
  error: null,
  success: false,
  proyects: null,
};
export default function ProyectsScreen({ history }) {
  const [state, dispatch] = useThunkReducer(proyectsListReducer, initialState);
  const { loading, success, error, proyects } = state;
  useEffect(() => {
    if (!proyects) {
      dispatch(
        callApi(
          "/api/proyects/getproyects/ALL/",
          "GET",
          {},
          {
            SUCESS: actions.PROYECT_LIST_SUCCESS,
            REQUEST: actions.PROYECT_LIST_REQUEST,
            FAIL: actions.PROYECT_LIST_FAIL,
          }
        )
      );
    }
  }, [history, proyects]);
  return (
    <Grid container className="proyects-container">
      <h2>Proyectos</h2>
      {proyects?.map((proyect) => (
        <>
          <br />
          <ProyectPreview
            proyect={proyect}
            children={
              <>
                <h3>{proyect.name}</h3>
                <span className="proy-description">{proyect.description}</span>
                <Link to={`/proyect/?id=${proyect._id}`}>
                  <Button variant="contained" color="primary">
                    Ver más
                  </Button>
                </Link>
              </>
            }
          />
          <br />
        </>
      ))}
    </Grid>
  );
}
