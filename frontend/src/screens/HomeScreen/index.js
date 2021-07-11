import { React, useEffect, useRef, createRef } from "react";
import { Link } from "react-router-dom";

import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
//My styles
import "./styles.css";
//Static img
import headerImg from "../../assets/img/img1.jpg";
//Components
import ProyectPreview from "../../components/ProyectPreview";
import IconsBar from "../../components/IconsBar";
import Bio from "../../components/Bio";
import Services from "../../components/Services";
import Contact from "../../components/Contact";
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
export default function HomeScreen({ history }) {
  const [state, dispatch] = useThunkReducer(proyectsListReducer, initialState);
  const { loading, success, error, proyects } = state;
  const refProyects = createRef(null);

  const scrollTo = (ref) => {
    if (ref /* + other conditions */) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
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
    <>
      <Grid container style={{ overflowX: "hidden" }}>
        <Grid item xs={12} sm={6} className="intro-container">
          <h1>Hola soy Jordi &#9996;</h1>
          <span className="desc">Desarrolador Web</span>
          <span style={{ display: "block", padding: "20px 40px" }}>
            Desarrollador web con experiencia en React Js y Python Django
          </span>
          <IconsBar />
          <Button
            variant="contained"
            color="primary"
            onClick={() => scrollTo(refProyects)}
          >
            <h3>Proyectos &#128187;</h3>
          </Button>
        </Grid>
        <Grid className="image-container" item xs={12} sm={6}>
          <img className="image" src={headerImg} />
        </Grid>
      </Grid>
      <Services />
      <Grid container>
        <Bio />
      </Grid>

      <Grid container className="proyects-preview" ref={refProyects}>
        <Grid item xs={12} className="text-center">
          <h2>Proyectos</h2>
        </Grid>
        <Grid container xs={12}>
          {proyects?.slice(0, 6).map((proyect) => (
            <Grid className="proyect-item" item xs={12} sm={4}>
              <ProyectPreview
                proyect={proyect}
                children={
                  <>
                    <h3>{proyect.name}</h3>
                    <Link to={`/proyect/?id=${proyect?._id}`}>
                      <Button variant="contained" color="primary"  style={{marginBottom: "50px"}}>
                        Ver
                      </Button>
                    </Link>
                  </>
                }
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid container xs={12} className="view-all-button">
        <Button
          variant="contained"
          onClick={() => history.push("/proyects")}
          color="primary"
        >
          Ver todos los proyectos
        </Button>
      </Grid>
      <Contact />
    </>
  );
}
