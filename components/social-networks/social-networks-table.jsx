import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Tooltip from '@material-ui/core/Tooltip';
import Paper from '@material-ui/core/Paper';
import { Grid, IconButton } from '@material-ui/core';
import { useSelector } from 'react-redux';
import EditIcon from '@material-ui/icons/Edit';
import Link from '../../src/Link';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  circle: {
    display: 'flex',
    height: '26px',
    width: '25px',
    borderRadius: '50%',
    backgroundColor: 'rgba(0,0,0,0.1)'
  }
});

function SocialNetworksTable(props) {

  const { onClickEdit } = props;
  const classes = useStyles();

  const { socialNetworks, socialNetworksLoading } = useSelector(state => state.socialNetworkReducer);

  const edit = (id) => {
    onClickEdit(id);
  }

  const loadingContainer = () => {
    if (socialNetworksLoading) {
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
            <TableCell>Título</TableCell>
            <TableCell>Url</TableCell>
            <TableCell>Color</TableCell>
            <TableCell>Icono</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {socialNetworks.length > 0 && socialNetworks.map((s) => (
            <TableRow key={s.id}>
              <TableCell component="th" scope="row">
                {s.title}
              </TableCell>
              <TableCell>
                <a href={s.url}>{s.url}</a>
              </TableCell>
              <TableCell>
                <Tooltip title={s.color}>
                  <span className={classes.circle} style={{ backgroundColor: s.color }}></span>
                </Tooltip>
              </TableCell>
              <TableCell>
                <i className={s.icon} style={{ fontSize: '26px' }}></i>
              </TableCell>
              <TableCell align="right">
                <IconButton size="small" aria-label="delete" onClick={() => edit(s.id)}>
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

SocialNetworksTable.propTypes = {
  onClickEdit: PropTypes.func.isRequired
}

export default SocialNetworksTable;