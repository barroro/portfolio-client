import React, { useEffect, Fragment, useState } from 'react';

import dynamic from "next/dynamic";
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles, TextField, Grid } from '@material-ui/core';

const Typography = dynamic(import("@material-ui/core/Typography"));
const Container = dynamic(import("@material-ui/core/Container"));
const Button = dynamic(import("@material-ui/core/Button"));
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CategoriesTable from '../../../components/categories/categories-table';
import { socialNetworkActions } from '../../../redux/store/actions/socialNetworkActions';
import SocialNetworksTable from '../../../components/social-networks/social-networks-table';
import SocialNetworkDialog from '../../../components/social-networks/social-network-dialog';
import { withAuthSync } from '../../../utils/auth';


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

function SocialNetworks() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { socialNetworks } = useSelector(state => state.socialNetworkReducer);

  //Get categories
  useEffect(() => {
    dispatch(socialNetworkActions.getSocialNetworksAction());
    console.log('Social networks: ', socialNetworks);
  }, [dispatch])

  const handleClickOpen = () => {
    dispatch(socialNetworkActions.openSocialNetworkModalAction({ open: true, data: null, editing: false }));
  };

  const edit = (id) => {
    let category = socialNetworks.find(c => c.id == id);
    dispatch(socialNetworkActions.openSocialNetworkModalAction({ open: true, data: category, editing: true }));
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
              Redes sociales
            </Typography>
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>Nueva red social</Button>
            <SocialNetworkDialog />
          </Grid>
          <SocialNetworksTable onClickEdit={edit} />
        </CardContent>
      </Card>
    </Container>
  );
}

export default withAuthSync(SocialNetworks);
