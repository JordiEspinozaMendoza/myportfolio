import { Grid, Button } from "@material-ui/core";
import "./styles.css";

import ProyectPreview from "../../components/ProyectPreview";
export default function ProyectScreen({ history }) {
  return (
    <Grid container>
      <div className="proyect-container">
        <h2>Name of proyect</h2>
        <span>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </span>
        <Grid container xs={5} className="buttons-container">
          <Grid item xs={12} sm={6}>
            <Button variant="contained">Proyecto</Button>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button variant="contained">Github</Button>
          </Grid>
        </Grid>
        <ProyectPreview />
      </div>
    </Grid>
  );
}
