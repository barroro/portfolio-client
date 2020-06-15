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

export default function MessagesTable(props) {

  const { value } = props;
  const classes = useStyles();

  const { messages } = useSelector(state => state.messageReducer);

  //States to manage pagination and other things of table
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [page, setPage] = React.useState(0);
  const [messagesFiltered, setMessagesFiltered] = React.useState([]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  useEffect(() => {
    setMessagesFiltered(messages);
  }, [messages])

  useEffect(() => {
    let list = messages.filter(m => m.email.includes(value) || m.subject.includes(value) || m.body.includes(value));
    setMessagesFiltered(list);
  }, [value])

  return (
    <>
      <TableContainer>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Correo</TableCell>
              <TableCell>Asunto</TableCell>
              <TableCell>Mensaje</TableCell>
              <TableCell>Estado</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {messagesFiltered.length > 0 && messagesFiltered
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((m) => (
                <TableRow key={m.id}>
                  <TableCell component="th" scope="row">
                    {m.email}
                  </TableCell>
                  <TableCell>{m.subject}</TableCell>
                  <TableCell>{m.body}</TableCell>
                  <TableCell>
                    {/* <Chip size="small" label={w.active ? 'Activo' : 'Inactivo'} color="secondary" disabled={!w.active} /> */}
                  </TableCell>
                  <TableCell>
                    <IconButton size="small" aria-label="delete" component={Link} href={{ pathname: '/dashboard/works/work-management', query: { id: m.id } }}>
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
        count={messagesFiltered.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </>
  );
}