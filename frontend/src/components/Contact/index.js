import {
  FormControl,
  Input,
  InputLabel,
  FormHelperText,
  Grid,
  TextField,
  Button
} from "@material-ui/core";

import "./styles.css";
export default function Contact() {
  const image =
    "https://images.unsplash.com/photo-1587560699334-cc4ff634909a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80";
  return (
    <Grid container id="form-container">
      <Grid item xs={12} sm={6} id="form-contact">
        <h2>Contáctame</h2>
        <form className="form">
          <FormControl className="form-control">
            <InputLabel  htmlFor="my-input">Correo</InputLabel>
            <Input name="email" id="my-input" aria-describedby="my-helper-text" />
          </FormControl>
          <FormControl className="form-control">
            <InputLabel  htmlFor="my-input">Nombre</InputLabel>
            <Input name="email" id="my-input" aria-describedby="my-helper-text" />
          </FormControl>
          <FormControl className="form-control">
            <InputLabel  htmlFor="my-input">Asunto</InputLabel>
            <Input name="email" id="my-input" aria-describedby="my-helper-text" />
          </FormControl>
          <Button variant="contained" color="primary">Enviar</Button>
        </form>
      </Grid>
      <Grid className="image-container" item xs={12} sm={6}>
        <img className="image" src={image} />
      </Grid>
    </Grid>
  );
}
