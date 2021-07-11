import { React } from "react";
import { Link } from "react-router-dom";
//Styles
import "./styles.css";
export default function ProyectPreview({ children, proyect }) {
  let mockUrl =
    "https://www.pngkit.com/png/detail/933-9339671_laptop-mockup-placeholder-selling-global-on-amazon.png";
  return (
    <div className="container-proyect-preview">
      <Link to={`/proyect/?id=${proyect?._id}`}>
        <img
          className="image-proyect-prev"
          src={`https://res.cloudinary.com/jordiespinoza/${proyect?.img}`}
        />
      </Link>
      {children}
      {/* <h4>Test</h4> */}

      {/* <Button color="primary" variant='contained'>Ver proyecto</Button> */}
    </div>
  );
}
