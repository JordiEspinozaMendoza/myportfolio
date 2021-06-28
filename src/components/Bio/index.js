import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import LinearProgress from "@material-ui/core/LinearProgress";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import "./styles.css";
LinearProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate and buffer variants.
   * Value between 0 and 100.
   */
  value: PropTypes.number.isRequired,
};
function LinearProgressWithLabel(props) {
  return (
    <Box display="flex" alignItems="center">
      <Box width="100%" mr={1}>
        <LinearProgress variant="determinate" color="secondary" {...props} />
      </Box>
      <Box minWidth={35}>
        <Typography variant="body2" color="light">{`${Math.round(
          props.value
        )}%`}</Typography>
      </Box>
    </Box>
  );
}
const languajes = [
  { name: "ReactJs", value: 60, progress: 10 },
  { name: "Javascript", value: 80, progress: 10 },
  { name: "Css", value: 90, progress: 10 },
  { name: "C#", value: 85, progress: 10 },
  { name: "Python", value: 85, progress: 10 },
];
export default function Bio() {
  const [progress, setProgress] = React.useState(10);
  const [techs, setTechs] = React.useState(languajes);
  React.useEffect(() => {
    console.log(techs);
  }, []);

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

        {techs.map((value) => (
          <>
            <h5>{value.name}</h5>
            <LinearProgressWithLabel value={value.value} />
          </>
        ))}
      </Grid>

      <Grid className="bio-pic" item xs={12} sm={6}>
        <img
          className="image"
          src="https://static9.depositphotos.com/1009634/1075/v/950/depositphotos_10757374-stock-illustration-no-user-profile-picture.jpg"
        />
      </Grid>
    </>
  );
}
