import React, { useEffect, Fragment, useState } from 'react';

import dynamic from "next/dynamic";
import DashboardLayout from '../../../components/dashboard-layout';
import { useDispatch, useSelector } from 'react-redux';
import { worksActions } from '../../../redux/store/actions/WorksActions';
import { categoryActions } from '../../../redux/store/actions/CategoryActions';
import { makeStyles, TextField, Grid, IconButton } from '@material-ui/core';

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
import { Form, Formik, Field, FieldArray, useField } from 'formik';
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
  const { work } = useSelector(state => state.worksReducer);
  const { categories, category } = useSelector(state => state.categoryReducer);

  const [files, setFiles] = useState([]);
  const [formValues, setValues] = useState({
    title: '',
    subtitle: '',
    category: '',
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
        content: work.content,
        photo: null,
        workImages: [],
        sections: []
      })
    } else {
      setValues({
        title: '',
        subtitle: '',
        category: '',
        content: '',
        photo: null,
        workImages: [],
        sections: []
      })
    }
  }, [work])

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
    <Container>
      <Card className={classes.root} variant="outlined">
        <Formik
          enableReinitialize
          initialValues={formValues}
          validationSchema={FormSchema}
          onSubmit={(values, { setSubmitting }) => {
            let settings = { headers: { 'content-type': 'multipart/form-data' } }
            const data = new FormData();
            data.append('title', values.title);
            data.append('subtitle', values.subtitle);
            data.append('content', values.content);
            data.append('photo', files[0]);
            // console.log(data);
            // Axios.post('http://localhost:8000/api/works', data, settings)
            //   .then(res => {
            //     console.log(res);
            //   })
            //   .catch(err => console.error(err));
            setSubmitting(false);
          }}
        >
          {({ values, isSubmitting, handleChange, handleBlur }) => (
            <Form>
              <CardContent>
                <Typography gutterBottom variant="h6" component="h2">
                  Añadir nuevo proyecto
                </Typography>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <MyTextField name="title" placeholder="Título"></MyTextField>
                  </Grid>
                </Grid>
                <Grid container spacing={2}>
                  <Grid item xs={8}>
                    <MyTextField name="subtitle" placeholder="Subtítulo"></MyTextField>
                  </Grid>
                  <Grid item xs={4}>
                    {/* <FormControl variant="outlined" size="small" margin="dense" fullWidth className={classes.formControl}>
                      <InputLabel id="demo-simple-select-filled-label">Categoria</InputLabel>
                      <Select
                        labelId="demo-simple-select-filled-label"
                        id="demo-simple-select-filled"
                        value={values.category}
                        onChange={handleChange}
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        {
                          categories.map(c => {
                            return <MenuItem key={c.id} value={c.id}>{c.name}</MenuItem>
                          })
                        }
                      </Select>
                    </FormControl> */}
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
                <Grid container>
                  <Grid item xs={12}>
                    <MyTextArea rows={4} placeholder="Contenido" name="content"></MyTextArea>
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid item xs={12}>
                    {/* <ImageSelect onChange={onChangeImage}></ImageSelect> */}
                    <MyImageSelector name="workImages"></MyImageSelector>
                  </Grid>
                </Grid>
                {/* <section className="container">
                  <div {...getRootProps({ className: classes.dropzone })}>
                    <input {...getInputProps()} />
                    <p>Drag 'n' drop some files here, or click to select files</p>
                  </div>
                  <aside className={classes.thumbsContainer}>
                    {thumbs}
                  </aside>
                </section> */}
                <Typography gutterBottom variant="h6" component="h2">
                  Secciones
                </Typography>
                <FieldArray name="sections">
                  {(arrayHelpers) => (
                    <div>
                      <Button onClick={() => arrayHelpers.push({
                        title: '',
                        subtitle: '',
                        content: '',
                        id: '' + + Math.random()
                      })}>Nueva seccion</Button>
                      {values.sections.map((section, index) => {
                        return (
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
                                <Grid item xs={6}>
                                  <MyTextField name={`sections.${index}.title`} placeholder="Título"></MyTextField>
                                </Grid>
                                <Grid item xs={5}>
                                  <MyTextField name={`sections.${index}.subtitle`} placeholder="Subtítulo"></MyTextField>
                                </Grid>
                                <Grid item xs={1}>
                                  <IconButton size="small" onClick={() => arrayHelpers.remove(index)}>
                                    <CloseIcon />
                                  </IconButton>
                                </Grid>
                              </Grid>
                            </Grid>
                            <Grid item xs={12}>
                              <MyTextArea name={`sections.${index}.content`} placeholder="Contenido" rows={4}></MyTextArea>
                            </Grid>
                          </Grid>
                        )

                      })}
                    </div>
                  )}
                </FieldArray>
                <pre>{JSON.stringify(values, null, 2)}</pre>
              </CardContent>
              <CardActions>
                <Button size="small" disabled={isSubmitting} type="submit">
                  submit
                </Button>
              </CardActions>
            </Form>
          )}
        </Formik>
      </Card>
    </Container>
  );
}

// WorkManagement.getInitialProps({store, pathname, query}) {
//   store.dispatch();
//   // pass some custom props to component
//   return {custom: 'custom'}; 
// }

export default WorkManagement;
