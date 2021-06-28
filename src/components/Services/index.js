import React from "react";
import Grid from "@material-ui/core/Grid";
import "./styles.css";
import WebIcon from "@material-ui/icons/Web";
import StoreIcon from '@material-ui/icons/Store';
import CodeIcon from '@material-ui/icons/Code';
import DesktopWindowsIcon from '@material-ui/icons/DesktopWindows';
const imagesUrls = [];

export default function Services() {
  return (
    <Grid container id="services-container">
      <Grid item xs={12}>
        <h2 className="text-center">Servicios</h2>
      </Grid>
      <Grid container xs={12} sm={6}>
        <Grid className="service-item service-item-1" item xs={12}>
          <WebIcon />
          <h2>Desarrollo web</h2>
          <span className="details-service">
            ¿Deseas llevar tu negocio o idea a la web? Contactame
          </span>
        </Grid>
        <Grid className="service-item service-item-2" item xs={12}>
            <CodeIcon/>
          <h2>Desarrollo de APIS</h2>
          <span className="details-service">
            Desarrollo de APIS con Django para ser consumidas por el frontend
          </span>
        </Grid>
      </Grid>
      <Grid container xs={12} sm={6}>
        <Grid className="service-item service-item-3" item xs={12}>
            <DesktopWindowsIcon/>
          <h2>Diseño web</h2>
          <span className="details-service">
            ¿Necesitas un catalogo o un rediseño para tu antigua web?
          </span>
        </Grid>
        <Grid className="service-item service-item-4" item xs={12}>
            <StoreIcon/>
          <h2>Ecommerce</h2>
          <span className="details-service">
            Maneja tu negocio y tus ventas con un sistema facíl de usar donde tu
            tienes el control
          </span>
        </Grid>
      </Grid>
    </Grid>
  );
}
