import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import LinearProgress from "@material-ui/core/LinearProgress";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import "./styles.css";


export default function Bio() {
  return (
    <>
      <Grid className="bio-info" item xs={12} sm={6}>
        <h2>Sobre mí</h2>
        <span>
          Soy desarrollador frontend en React Js. Las cualidades que me hacen
          efectivo y creativo en mi carrera es la organización que tengo sobre
          el aprender nuevas tecnologías como Django y ReactJs, ser curioso en
          ha sido muy efectivo para el desarrollo.
          <br />
          <br />
          Me apasiona el diseñar sitios web que sean eficientes y agradables a
          la vista. Tengo conocimientos en Django, React Js, Postman, HTML, Css,
          bootstrap, Azure, Heroku.
          <br />
          <br />
          He sido freelancer por 1 año, recientemente he participado en el
          Hacklatam 2021 y eso me permitió haber entrado a Hackademy como
          Padawan.
        </span>
      </Grid>

      <Grid className="bio-pic" item xs={12} sm={6}>
        <img
          className="image"
          src="https://res.cloudinary.com/jordiespinoza/image/upload/v1625946669/IMG_9037_fchol2.jpg"
        />
      </Grid>
    </>
  );
}
