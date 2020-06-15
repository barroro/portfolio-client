import React, { useEffect, Fragment, useState } from 'react';
import dynamic from "next/dynamic";

import { useDispatch, useSelector } from 'react-redux';
import { messageActions } from '../../../redux/store/actions/MessageActions';
import { snackBarActions } from '../../../redux/store/actions/SnackBarActions';

const Typography = dynamic(import("@material-ui/core/Typography"));
const Container = dynamic(import("@material-ui/core/Container"));
const Button = dynamic(import("@material-ui/core/Button"));
const Paper = dynamic(import("@material-ui/core/Paper"));
import Toolbar from '@material-ui/core/Toolbar';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import MessagesTable from '../../../components/messages/messages-table';
import Link from '../../../src/Link';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import { withAuthSync } from '../../../utils/auth';

// const Copyright = dynamic(import("../../src/Copyright"));

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
    width: '100%',
    '& .MuiTextField-root': {
      //margin: theme.spacing(1),
      width: '100%',
    },
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  thumbsContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 16
  },
  thumb: {
    display: 'inline-flex',
    borderRadius: 2,
    border: '1px solid #eaeaea',
    marginBottom: 8,
    marginRight: 8,
    width: 100,
    height: 100,
    padding: 4,
    boxSizing: 'border-box'
  },
  thumbInner: {
    display: 'flex',
    minWidth: 0,
    overflow: 'hidden'
  },
  img: {
    display: 'block',
    width: '100%',
    height: 'auto'
  },
  imgContainer: {
    display: 'flex',
    position: 'relative',
  },
  dropzone: {
    position: 'relative',
    height: '100px',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '2px dashed rgba(0,0,0,0.2)',
    borderRadius: '4px',
    padding: '20px',
    cursor: 'pointer'
  },
  toolbar: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.black, 0.1),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.black, 0.2),
    },
    marginLeft: 0,
    marginRight: '5px',
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

function Messages(props) {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [value, setValue] = React.useState('');
  //Get products
  useEffect(() => {
    dispatch(messageActions.getMessagesAction());
  }, [dispatch])

  const showSnackBar = () => {
    dispatch(snackBarActions.showSnackBarAction({ open: true, message: 'Test from work list', closeButton: false }))
  }

  const onSearch = (event) => {
    setValue(event.target.value);
  }

  return (
    <Container>
      <Paper className={classes.root} variant="outlined">
        <Toolbar className={classes.toolbar}>
          <Typography className={classes.title} variant="h6" noWrap>
            Proyectos
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
              onKeyUp={onSearch}
            />
          </div>
        </Toolbar>
        <MessagesTable value={value} />
      </Paper>
    </Container>
  );
}

export default withAuthSync(Messages);
