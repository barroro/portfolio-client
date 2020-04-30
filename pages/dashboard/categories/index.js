import React, { useEffect, Fragment, useState } from 'react';

import dynamic from "next/dynamic";
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles, TextField, Grid } from '@material-ui/core';

const Typography = dynamic(import("@material-ui/core/Typography"));
const Container = dynamic(import("@material-ui/core/Container"));
const Button = dynamic(import("@material-ui/core/Button"));
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CategoriesTable from '../../../components/categories/categories-table';
import Link from '../../../src/Link';
import { categoryActions } from '../../../redux/store/actions/CategoryActions';
import CategoryDialog from '../../../components/categories/category-dialog';

// const Copyright = dynamic(import("../../src/Copyright"));

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
    width: '80%',
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
  }
}));

export default function Categories() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { categories } = useSelector(state => state.categoryReducer);

  //Get categories
  useEffect(() => {
    dispatch(categoryActions.getCategoriesAction());
    console.log('Categories: ', categories);
  }, [dispatch])

  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(null);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

  const edit = (id) => {
    setOpen(true);
  };

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
              Categorias
            </Typography>
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>Nueva categoria</Button>
            <CategoryDialog open={open} onClose={handleClose} />
          </Grid>
          <CategoriesTable onClickEdit={edit} />
        </CardContent>
      </Card>
    </Container>
  );
}
