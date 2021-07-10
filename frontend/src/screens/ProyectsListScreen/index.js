import React, { useEffect } from "react";
//components UI
import CircularProgress from "@material-ui/core/CircularProgress";
import Alert from "../../components/Alert";
import Table from "@material-ui/core/Table";
import Button from "@material-ui/core/Button";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
//api
import { callApi } from "../../api";
import { actions } from "../../constants/proyectConstants";
//my thunk reducer
import { useThunkReducer } from "../../reducers/thunk";
//reducer for the page
import {
  proyectsListReducer,
  proyectDeleteReducer,
} from "../../reducers/proyectReducers";

import { Link } from "react-router-dom";

import "./styles.css";

const initialState = {
  loading: false,
  error: null,
  success: false,
  proyects: null,
};
const initialStateDelete = {
  loading: false,
  error: null,
  success: false,
};
const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "name", headerName: "Nombre", width: 100 },
  { field: "categorie", headerName: "Categoria", width: 100 },
];
const rows = [];
export default function ProyectsListScreen({ history }) {
  let token = localStorage.getItem("token")
    ? JSON.parse(localStorage.getItem("token"))
    : "";
  const [state, dispatch] = useThunkReducer(proyectsListReducer, initialState);
  const { loading, success, error, proyects } = state;
  const [stateDelete, dispatchDelete] = useThunkReducer(
    proyectDeleteReducer,
    initialStateDelete
  );
  const { success: successDelete } = stateDelete;

  const deleteHandler = (id) => {
    if (window.confirm("Seguro que deseas eliminar este proyecto?")) {
      dispatchDelete(
        callApi(
          `/api/proyects/delete/${id}/`,
          "DELETE",
          {},
          {
            SUCESS: actions.PROYECT_DELETE_SUCCESS,
            REQUEST: actions.PROYECT_DELETE_REQUEST,
            FAIL: actions.PROYECT_DELETE_FAIL,
          },
          false,
          token
        )
      );
    }
  };
  useEffect(() => {
    if (token) {
      if (!proyects) {
        dispatch(
          callApi(
            "/api/proyects/getproyects/ALL/",
            "GET",
            {},
            {
              SUCESS: actions.PROYECT_LIST_SUCCESS,
              REQUEST: actions.PROYECT_LIST_REQUEST,
              FAIL: actions.PROYECT_LIST_FAIL,
            },
            true,
            token
          )
        );
      }
    } else {
      history.push("/");
    }
  }, [history, proyects, successDelete]);
  return (
    <div className="table-container">
      <Link to="/proyects/edit">
        <Button variant="contained" color="primary">
          Crear proyecto
        </Button>
      </Link>
      <TableContainer component={Paper}>
        <Table aria-label="customized table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="right">Nombre</TableCell>
              <TableCell align="right">Categoría</TableCell>
              <TableCell align="right">Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {proyects?.map((row) => (
              <TableRow key={row._id}>
                <TableCell component="th" scope="row">
                  {row._id}
                </TableCell>
                <TableCell align="right">{row.name}</TableCell>
                <TableCell align="right">{row.categorie?.name}</TableCell>
                <TableCell align="right">
                  <Link to={`/proyects/edit?id=${row._id}`}>
                    <Button variant="contained" color="primary">
                      Editar
                    </Button>
                  </Link>
                  <Button
                    onClick={() => deleteHandler(row._id)}
                    variant="contained"
                    color="danger"
                  >
                    Eliminar
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
