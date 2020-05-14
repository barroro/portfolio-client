import React, { useEffect, Fragment, useState } from 'react';

import dynamic from "next/dynamic";
import DashboardLayout from '../../../components/dashboard-layout';
import { useDispatch, useSelector } from 'react-redux';
import { worksActions } from '../../../redux/store/actions/WorksActions';
import { categoryActions } from '../../../redux/store/actions/CategoryActions';
import { makeStyles, TextField, Grid, IconButton, CardHeader } from '@material-ui/core';

const Typography = dynamic(import("@material-ui/core/Typography"));
const Container = dynamic(import("@material-ui/core/Container"));
const Button = dynamic(import("@material-ui/core/Button"));
const Paper = dynamic(import("@material-ui/core/Paper"));
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import { Form, Formik, Field, FieldArray, useField, FastField } from 'formik';
import Dropzone, { useDropzone } from 'react-dropzone';
import Axios from 'axios';
import withAuth from '../../../utils/withAuth';
import { useRouter } from 'next/router';
import * as Yup from 'yup';
import CloseIcon from '@material-ui/icons/Close';
import { MyTextField, MyTextArea, MyImageSelector } from '../../../utils/customControls';
import { imageActions } from '../../../redux/store/actions/ImageActions';
import PreviewImagesDialog from '../../../components/images/preview-images-dialog';
import PreviewImagesContainer from '../../../components/images/preview-images-container';
import ImageSelect from '../../../components/images/image-select';
import LoadingContainer from '../../../components/ui/loading-container';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
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
  closeButton: {
    position: 'absolute',
    top: '10px',
    right: '10px'
  }
}));

const FormSchema = Yup.object().shape({
  title: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  subtitle: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  content: Yup.string()
    .required('Required'),
});


const WorkManagement = () => {

  const { query: { id } } = useRouter();
  const classes = useStyles();
  const dispatch = useDispatch();
  const { work, workLoading } = useSelector(state => state.worksReducer);
  const { categories, category, categoryLoading } = useSelector(state => state.categoryReducer);

  const [files, setFiles] = useState([]);
  const [formValues, setValues] = useState({
    title: '',
    subtitle: '',
    category: '',
    active: false,
    content: '',
    photo: null,
    workImages: [],
    sections: []
  });

  // const { getRootProps, getInputProps } = useDropzone({
  //   accept: 'image/*',
  //   onDrop: acceptedFiles => {
  //     setFiles(acceptedFiles.map(file => Object.assign(file, {
  //       preview: URL.createObjectURL(file)
  //     })));
  //   }
  // });

  // const thumbs = files.map(file => (
  //   <div className={classes.imgContainer} key={file.name}>
  //     <img
  //       src={file.preview}
  //       className={classes.img}
  //     />
  //   </div>
  // ));

  const onChangeImage = (values) => {
    console.log('images: ', values);
  };

  useEffect(() => {
    if (id && work) {
      console.log('Work: ', work)
      setValues({
        //...formValues,
        title: work.title,
        subtitle: work.subtitle,
        category: work.category_id,
        active: work.active,
        content: work.content,
        photo: null,
        workImages: work.images,
        sections: work.sections
      })
    } else {
      setValues({
        title: '',
        subtitle: '',
        category: '',
        active: false,
        content: '',
        photo: null,
        workImages: [],
        sections: []
      })
    }
  }, [work])

  useEffect(() => {
    if (id)
      dispatch(worksActions.getWorkAction(id))
  }, [id])

  //Get work by id
  useEffect(() => {
    //Get categories to display selector
    dispatch(imageActions.getImagesAction());
    dispatch(categoryActions.getCategoriesAction())
    //If url has id param then dispatch action to get work
    if (id) {
      dispatch(worksActions.getWorkAction(id))
    }
  }, [dispatch])

  useEffect(() => () => {
    files.forEach(file => URL.revokeObjectURL(file.preview));
  }, [files]);

  return (
    <Grid
      container
      spacing={2}
    >
      <Grid item xs={12}>
        <Formik
          enableReinitialize
          initialValues={formValues}
          validationSchema={FormSchema}
          onSubmit={(values, { setSubmitting }) => {
            if (id) {
              let data = Object.assign(values, { id: id });
              dispatch(worksActions.updateWorkAction(data));
            } else {
              //console.log(values);
              dispatch(worksActions.createWorkAction(values));
            }
            setSubmitting(false);
          }}
        >
          {({ values, isSubmitting, handleChange, handleBlur }) => (
            <Form>
              <Grid
                container
                spacing={2}
              >
                <Grid item xs={9}>
                  <Card variant="outlined" className={classes.root}>
                    {workLoading && <LoadingContainer />}
                    <CardContent>
                      <Grid container spacing={2}>
                        <Grid item xs={10}>
                          <Typography gutterBottom variant="h4" component="h2">
                            {id && work ? `Proyecto: ${work.title}` : 'Añadir nuevo proyecto'}
                          </Typography>
                        </Grid>
                      </Grid>
                      <Grid container spacing={2}>
                        <Grid item xs={12}>
                          <MyTextField name="title" placeholder="Título"></MyTextField>
                        </Grid>
                      </Grid>
                      <Grid container spacing={2}>
                        <Grid item xs={12}>
                          <MyTextField name="subtitle" placeholder="Subtítulo"></MyTextField>
                        </Grid>
                      </Grid>
                      <Grid container>
                        <Grid item xs={12}>
                          <MyTextArea rows={8} placeholder="Contenido" name="content"></MyTextArea>
                        </Grid>
                      </Grid>
                      <Grid container>
                        <Grid item xs={12}>
                          <MyImageSelector name="workImages"></MyImageSelector>
                        </Grid>
                      </Grid>
                      {/* <pre>{JSON.stringify(values, null, 2)}</pre> */}
                    </CardContent>
                  </Card>
                  {/* <Grid item xs={12}>
                    <Typography gutterBottom variant="h6" component="h2">
                      Secciones
                    </Typography>
                  </Grid> */}
                  <FieldArray name="sections">
                    {(arrayHelpers) => (
                      <Grid container spacing={3}>
                        <Grid item xs={12}>
                          <Grid container spacing={2}>
                            <Grid item xs={10}>
                              <Typography gutterBottom variant="h6" component="h2">
                                Secciones
                              </Typography>
                            </Grid>
                            <Grid item xs={2}>
                              <Button onClick={() => arrayHelpers.push({
                                title: '',
                                subtitle: '',
                                content: '',
                                images: [],
                                view_type: 1,
                                id: '' + + Math.random()
                              })}>Nueva seccion</Button>
                            </Grid>
                          </Grid>
                        </Grid>
                        {
                          values.sections.map((section, index) => {
                            return (
                              <Grid item xs={12} key={`section.container.${index}`}>
                                <Card variant="outlined" className={classes.root}>
                                  <IconButton size="small" onClick={() => arrayHelpers.remove(index)} className={classes.closeButton}>
                                    <CloseIcon />
                                  </IconButton>
                                  <CardContent>
                                    <Grid item xs={12}>
                                      <Typography gutterBottom variant="h6" component="h2">
                                        {`Seccion ${index + 1}`}
                                      </Typography>
                                    </Grid>
                                    <Grid
                                      container
                                      direction="column"
                                      spacing={2}
                                      key={section.id}
                                    >
                                      <Grid item xs={12}>
                                        <Grid
                                          container
                                          spacing={2}
                                          alignItems="center"
                                        >
                                          <Grid item xs={7}>
                                            <MyTextField name={`sections.${index}.title`} placeholder="Título"></MyTextField>
                                          </Grid>
                                          <Grid item xs={5}>
                                            <FormControl variant="outlined" size="small" margin="dense" fullWidth className={classes.formControl}>
                                              <InputLabel id="demo-simple-select-filled-label">Tipo</InputLabel>
                                              <Field type="select" as={Select} name={`sections.${index}.view_type`}>
                                                <MenuItem value={1}>Sección con galería</MenuItem>
                                                <MenuItem value={2}>Sección con carousel</MenuItem>
                                                <MenuItem value={3}>Sección sin imagenes</MenuItem>
                                              </Field>
                                            </FormControl>
                                          </Grid>
                                        </Grid>
                                      </Grid>
                                      <Grid item xs={12}>
                                        <MyTextField name={`sections.${index}.subtitle`} placeholder="Subtítulo"></MyTextField>
                                      </Grid>
                                      <Grid item xs={12}>
                                        <MyTextArea name={`sections.${index}.content`} placeholder="Contenido" rows={8}></MyTextArea>
                                      </Grid>
                                      <Grid item xs={12}>
                                        <MyImageSelector name={`sections.${index}.images`}></MyImageSelector>
                                      </Grid>
                                    </Grid>
                                  </CardContent>
                                </Card>
                              </Grid>
                            )

                          })}
                      </Grid>
                    )}
                  </FieldArray>
                </Grid>
                <Grid item xs={3}>
                  <Grid container spacing={2} style={{ position: 'sticky', top: '90px' }}>
                    <Grid item xs={12}>
                      <Card variant="outlined" className={classes.root}>
                        {workLoading && <LoadingContainer />}
                        <CardContent>
                          <Grid container spacing={2}>
                            <Grid item xs={10}>
                              <Typography gutterBottom variant="h6" component="h2">
                                Opciones
                              </Typography>
                            </Grid>
                            <Grid item xs={12}>
                              <FormControlLabel
                                control={<Switch onChange={handleChange} name="active" checked={values.active} />}
                                label="Visible"
                              />
                            </Grid>
                            <Grid item xs={12}>
                              <FormControl variant="outlined" size="small" margin="dense" fullWidth className={classes.formControl}>
                                <InputLabel id="demo-simple-select-filled-label">Categoria</InputLabel>
                                <Field type="select" as={Select} name="category">
                                  {
                                    categories.map(c => {
                                      return <MenuItem key={c.id} value={c.id}>{c.name}</MenuItem>
                                    })
                                  }
                                </Field>
                              </FormControl>
                            </Grid>
                          </Grid>
                        </CardContent>
                        <CardActions>
                          <Grid container justify="flex-end">
                            <Button disabled={isSubmitting} type="submit" href="/dashboard/works">
                              cancelar
                            </Button>
                            <Button variant="contained" color="primary" disabled={isSubmitting} type="submit" disableElevation>
                              guardar
                            </Button>
                          </Grid>
                        </CardActions>
                      </Card>
                    </Grid>
                    <Grid item xs={12}>
                      <Card variant="outlined" className={classes.root} style={{ position: 'sticky', top: '95px' }}>
                        <CardContent>
                          Imagen principal
                        </CardContent>
                      </Card>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Form>
          )}
        </Formik>
      </Grid>
    </Grid>
  );
}

// WorkManagement.getInitialProps({store, pathname, query}) {
//   store.dispatch();
//   // pass some custom props to component
//   return {custom: 'custom'}; 
// }

export default WorkManagement;
