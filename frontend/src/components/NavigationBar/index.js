import AppBar from "@material-ui/core/AppBar";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

import MenuAdmin from "./MenuAdmin";

import "./styles.css";
const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));
export default function NavigationBar({ history }) {
  const classes = useStyles();
  const userInfo = localStorage.getItem("userInfo");
  return (
    <AppBar position="sticky" title={<img src="https://res.cloudinary.com/jordiespinoza/image/upload/v1625946847/logo_port_1_crjfvf.png"/>}>
      <Toolbar variant="dense">
        {/* <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton> */}
        {/* <Typography variant="h6" color="inherit" className={classes.title}>
          J.
        </Typography> */}
        <Link to="/">
          <Button color="inherit">Inicio</Button>
        </Link>
        <Link to="/proyects">
          <Button color="inherit">Proyectos</Button>
        </Link>
        {userInfo && <MenuAdmin />}
      </Toolbar>
    </AppBar>
  );
}
