import React, { useEffect, Fragment, useState } from 'react';

import dynamic from "next/dynamic";
import DashboardLayout from '../../../components/dashboard-layout';
import { useDispatch, useSelector } from 'react-redux';
import { worksActions } from '../../../redux/store/actions/WorksActions';
import { makeStyles, TextField, Grid } from '@material-ui/core';

const Typography = dynamic(import("@material-ui/core/Typography"));
const Container = dynamic(import("@material-ui/core/Container"));
const Button = dynamic(import("@material-ui/core/Button"));
const Paper = dynamic(import("@material-ui/core/Paper"));
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { Form, Formik, Field } from 'formik';
import Dropzone, { useDropzone } from 'react-dropzone';
import WorksTable from '../../../components/works/works-table';
import Link from '../../../src/Link';

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
  }
}));

export default function Works() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { works } = useSelector(state => state.worksReducer);

  //Get products
  useEffect(() => {
    dispatch(worksActions.getWorksAction());
    console.log('Works: ', works);
  }, [dispatch])

  return (
    <Container>
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            <Typography gutterBottom variant="h6" component="h2">
              Proyectos
            </Typography>
            <Button variant="outlined" color="primary" component={Link} href="/dashboard/works/work-management">Nuevo proyecto</Button>
          </Grid>
          <WorksTable />
        </CardContent>
      </Card>
    </Container>
  );
}
