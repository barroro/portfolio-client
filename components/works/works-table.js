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

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const noResults = (
  <Grid
    container
    direction="row"
    justify="center"
    alignItems="center"
  >
    <span>No se han encontrado resultados</span>
  </Grid>
);

export default function WorksTable() {
  const classes = useStyles();
  const rows = [];

  const { works } = useSelector(state => state.worksReducer);

  return (
    <TableContainer>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Título</TableCell>
            <TableCell>Subtítulo</TableCell>
            <TableCell>Contenido</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {works.length > 0 && works.map((w) => (
            <TableRow key={w.id}>
              <TableCell component="th" scope="row">
                {w.title}
              </TableCell>
              <TableCell>{w.subtitle}</TableCell>
              <TableCell>{w.content}</TableCell>
              <TableCell>
                <IconButton aria-label="delete" component={Link} href={{ pathname: '/dashboard/works/work-management', query: { id: w.id } }}>
                  <EditIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}