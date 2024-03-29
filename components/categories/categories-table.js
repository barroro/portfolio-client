import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Grid, IconButton } from '@material-ui/core';
import { useSelector } from 'react-redux';
import EditIcon from '@material-ui/icons/Edit';
import Link from '../../src/Link';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  }
});

// const noResults = (items) = (
//   <Grid
//     container
//     direction="row"
//     justify="center"
//     alignItems="center"
//   >
//     <span>No se han encontrado resultados</span>
//   </Grid>
// );

function CategoriesTable(props) {

  const { onClickEdit } = props;
  const classes = useStyles();

  const { categories, categoriesLoading } = useSelector(state => state.categoryReducer);

  const edit = (id) => {
    onClickEdit(id);
  }

  const loadingContainer = () => {
    if (categoriesLoading) {
      return (
        <div className="loading-container">
          <span>Cargando...</span>
        </div>
      )
    } else {
      return null;
    }
  }

  return (
    <TableContainer>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Nombre</TableCell>
            <TableCell>Descripción</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {categories.length > 0 && categories.map((c) => (
            <TableRow key={c.id}>
              <TableCell component="th" scope="row">
                {c.name}
              </TableCell>
              <TableCell>{c.description}</TableCell>
              <TableCell align="right">
                <IconButton size="small" aria-label="delete" onClick={() => edit(c.id)}>
                  <EditIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {loadingContainer()}
    </TableContainer>
  );
}

CategoriesTable.propTypes = {
  onClickEdit: PropTypes.func.isRequired
}

export default CategoriesTable;