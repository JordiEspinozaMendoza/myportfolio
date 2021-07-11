import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { Link, useHistory } from "react-router-dom";

import { useThunkReducer } from "../../reducers/thunk";
import { userLoginReducer } from "../../reducers/userReducers";
import { actions } from "../../constants/userContants";

const initialState = {
  error: null,
  loading: false,
  success: false,
  userInfo: null,
};
export default function MenuAdmin() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [state, dispatch] = useThunkReducer(userLoginReducer, initialState);

  const history = useHistory();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
        color="inherit"
      >
        Admin
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <Link to="/proyects/list">
          <MenuItem onClick={handleClose}>Proyectos</MenuItem>
        </Link>
        <Link to="/categories/list">
          <MenuItem onClick={handleClose}>Categorias</MenuItem>
        </Link>
        <MenuItem
          onClick={() => {
            dispatch({ type: actions.USER_LOGOUT });
            window.location.reload();
            history.push("/")
          }}
        >
          Logout
        </MenuItem>
      </Menu>
    </div>
  );
}
