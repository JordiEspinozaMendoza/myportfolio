import { React } from "react";
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

export default function HomeScreen({ history }) {
  return (
    <>
      <Grid container style={{ overflowX: "hidden" }}>
        <Grid item xs={12} sm={6} className="intro-container">
          <h1>Hola soy Jordi &#9996;</h1>
          <span className="desc">Desarrolador Frontend</span>
          <span style={{ display: "block", padding: "20px 40px" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            pulvinar nunc enim, at porttitor purus pulvinar non. Vestibulum
            aliquet aliquet augue in fermentum.
          </span>
          <IconsBar />
          <Button variant="contained" color="primary">
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

      <Grid container className="proyects-preview">
        <Grid item xs={12} className="text-center">
          <h2>Proyectos</h2>
        </Grid>
        <Grid container xs={12}>
          <Grid className="proyect-item" item xs={12} sm={4}>
            <ProyectPreview />
          </Grid>
          <Grid className="proyect-item" item xs={12} sm={4}>
            <ProyectPreview />
          </Grid>
          <Grid className="proyect-item" item xs={12} sm={4}>
            <ProyectPreview />
          </Grid>
        </Grid>
      </Grid>
      <Grid container xs={12} className="view-all-button">
        <Button variant="contained" color="primary">
          Ver todos los proyectos
        </Button>
      </Grid>
      <Contact />
    </>
  );
}
