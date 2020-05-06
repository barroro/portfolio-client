import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TablePagination from '@material-ui/core/TablePagination';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Chip from '@material-ui/core/Chip';
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

export default function WorksTable(props) {

  const { value } = props;
  const classes = useStyles();

  const { works } = useSelector(state => state.worksReducer);

  //States to manage pagination and other things of table
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [page, setPage] = React.useState(0);
  const [worksFiltered, setWorksFiltered] = React.useState([]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  useEffect(() => {
    setWorksFiltered(works);
  }, [works])

  useEffect(() => {
    let list = works.filter(w => w.title.includes(value) || w.subtitle.includes(value));
    setWorksFiltered(list);
  }, [value])

  return (
    <>
      <TableContainer>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Título</TableCell>
              <TableCell>Subtítulo</TableCell>
              <TableCell>Categoria</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {worksFiltered.length > 0 && worksFiltered
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((w) => (
                <TableRow key={w.id}>
                  <TableCell component="th" scope="row">
                    {w.title}
                  </TableCell>
                  <TableCell>{w.subtitle}</TableCell>
                  <TableCell>
                    {
                      w.category && <Chip variant="outlined" size="small" label={w.category.name} color="secondary" />
                    }
                  </TableCell>
                  <TableCell>
                    <IconButton size="small" aria-label="delete" component={Link} href={{ pathname: '/dashboard/works/work-management', query: { id: w.id } }}>
                      <EditIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={worksFiltered.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </>
  );
}