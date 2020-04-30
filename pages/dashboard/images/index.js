import React, { useEffect } from 'react';
import dynamic from "next/dynamic";
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { imageActions } from '../../../redux/store/actions/ImageActions';

import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import UploadImageDialog from '../../../components/images/upload-image-dialog';

const Typography = dynamic(import("@material-ui/core/Typography"));

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    //padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: '200px'
  },
  imgContainer: {
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    width: '100%',
    height: '100%'
  }
}));

export default function Images() {

  const classes = useStyles();
  const dispatch = useDispatch();
  const [selectedValue, setSelectedValue] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const { images, modal } = useSelector(state => state.imageReducer);

  useEffect(() => {
    dispatch(imageActions.getImagesAction());
  }, [dispatch])

  const handleClickOpen = () => {
    //setOpen(true);
    dispatch(imageActions.openModalAction());
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
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
              Gestión de imagenes
            </Typography>
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>Añadir imagen</Button>
            <UploadImageDialog open={modal.open} />
          </Grid>
          <Grid container spacing={3}>
            {
              images && images.map(image => {
                return (
                  <Grid item xs={3} key={`container-image-` + Math.random()}>
                    <Paper className={classes.paper}>
                      <div className={classes.imgContainer}>
                        {image.name}
                      </div>
                    </Paper>
                  </Grid>
                )
              })
            }
          </Grid>
        </CardContent>
      </Card>
    </Container>
  );
}

//style={{ backgroundImage: `url(http://localhost:8000/${image.path})` }}