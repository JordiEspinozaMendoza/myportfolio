import React, { useEffect, useState } from "react";
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
import { actions } from "../../constants/categorieConstants";
//my thunk reducer
import { useThunkReducer } from "../../reducers/thunk";
//reducer for the page
import { categoriesListReducer } from "../../reducers/categorieReducers";

import { Link } from "react-router-dom";

const initialState = {
  loading: false,
  error: null,
  success: false,
  categories: null,
};
const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "name", headerName: "Nombre", width: 100 },
  { field: "categorie", headerName: "Categoria", width: 100 },
];
const rows = [];
export default function CategoriesListScreen({ history }) {
  const [state, dispatch] = useThunkReducer(
    categoriesListReducer,
    initialState
  );
  const { loading, success, error, categories } = state;

  useEffect(() => {
    let token = localStorage.getItem("token")
      ? JSON.parse(localStorage.getItem("token"))
      : "";
    if (token) {
      if (!categories) {
        dispatch(
          callApi(
            "/api/categories/getcategories/",
            "GET",
            {},
            {
              SUCESS: actions.CATEGORIE_LIST_SUCCESS,
              REQUEST: actions.CATEGORIE_LIST_REQUEST,
              FAIL: actions.CATEGORIE_LIST_FAIL,
            },
            true,
            token
          )
        );
      }
    } else {
      history.push("/");
    }
  }, [history, categories]);
  return (
    <div className="table-container">
      <Link to="/categories/edit">
        <Button variant="contained" color="primary">
          Crear categoría
        </Button>
      </Link>

      <TableContainer component={Paper}>
        <Table aria-label="customized table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="right">Nombre</TableCell>
              <TableCell align="right">Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {categories?.map((row) => (
              <TableRow key={row._id}>
                <TableCell component="th" scope="row">
                  {row._id}
                </TableCell>
                <TableCell align="right">{row.name}</TableCell>
                <TableCell align="right">
                  <Link to={`/categories/edit?id=${row._id}`}>
                    <Button variant="contained" color="primary">
                      Editar{" "}
                    </Button>
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
