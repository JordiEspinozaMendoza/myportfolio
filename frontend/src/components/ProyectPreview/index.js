import { React } from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
//Styles
import "./styles.css";
export default function ProyectPreview({ children, proyect }) {
  let mockUrl =
    "https://www.pngkit.com/png/detail/933-9339671_laptop-mockup-placeholder-selling-global-on-amazon.png";
  return (
    <div className="container-proyect-preview">
      <img
        className="image-proyect-prev"
        src={`https://res.cloudinary.com/jordiespinoza/${proyect?.img}`}
      />

      {children}
      {/* <h4>Test</h4> */}

      {/* <Button color="primary" variant='contained'>Ver proyecto</Button> */}
    </div>
  );
}
