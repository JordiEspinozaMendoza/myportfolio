import AppBar from "@material-ui/core/AppBar";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

import "./styles.css"
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
  return (
    <AppBar position="sticky">
      <Toolbar variant="dense">
        {/* <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton> */}
        <Typography variant="h6" color="inherit" className={classes.title}>
          J.
        </Typography>
        <Link to="/">
          <Button color="inherit">Inicio</Button>
        </Link>
        <Link to="/proyects">
        <Button color="inherit">Proyectos</Button>
        </Link>
        <Button color="inherit">Proyectos</Button>
      </Toolbar>
    </AppBar>
  );
}
