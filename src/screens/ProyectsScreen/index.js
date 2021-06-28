import { Grid, Button } from "@material-ui/core";
import "./styles.css";
import { Link } from "react-router-dom";
//Components
import ProyectPreview from "../../components/ProyectPreview";
export default function ProyectsScreen() {
  return (
    <Grid container className="proyects-container">
      <h2>Proyectos</h2>
      <ProyectPreview
        chidren={
          <>
            <h3>Name</h3>
            <Link to="/proyect">
              <Button variant="contained" color="primary">
                Ver más
              </Button>
            </Link>
          </>
        }
      />
    </Grid>
  );
}
