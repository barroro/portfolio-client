import React, { useEffect, Fragment, useState } from 'react';

import dynamic from "next/dynamic";
import DashboardLayout from '../../../components/dashboard-layout';
import { useDispatch, useSelector } from 'react-redux';
import { worksActions } from '../../../redux/store/actions/WorksActions';
import { makeStyles, TextField, Grid, IconButton } from '@material-ui/core';

const Typography = dynamic(import("@material-ui/core/Typography"));
const Container = dynamic(import("@material-ui/core/Container"));
const Button = dynamic(import("@material-ui/core/Button"));
const Paper = dynamic(import("@material-ui/core/Paper"));
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { Form, Formik, Field, FieldArray } from 'formik';
import Dropzone, { useDropzone } from 'react-dropzone';
import Axios from 'axios';
import withAuth from '../../../utils/withAuth';
import { useRouter } from 'next/router';
import * as Yup from 'yup';
import CloseIcon from '@material-ui/icons/Close';

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

  const [files, setFiles] = useState([]);
  const [formValues, setValues] = useState({
    title: 'test',
    subtitle: 'test',
    content: 'test',
    photo: null,
    sections: [{ title: 'title work section', subtitle: 'subtitle work section', content: 'content work section', id: '' + Math.random() }]
  });

  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    onDrop: acceptedFiles => {
      setFiles(acceptedFiles.map(file => Object.assign(file, {
        preview: URL.createObjectURL(file)
      })));
    }
  });

  const thumbs = files.map(file => (
    <div className={classes.imgContainer} key={file.name}>
      <img
        src={file.preview}
        className={classes.img}
      />
    </div>
  ));

  useEffect(() => {
    // console.log('Work: ', work);
    // if (work)
    //   setValues({
    //     title: work.title,
    //     subtitle: work.subtile,
    //     content: work.content,
    //     photo: null
    //   })
  }, [work])

  //Get work by id
  useEffect(() => {
    console.log(id);
    if (id)
      dispatch(worksActions.getWorkAction(id))
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
                <Grid
                  container
                  spacing={2}
                >
                  <Grid item xs={6}>
                    <TextField
                      label="Title"
                      name="title"
                      value={values.title}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      size="small"
                      variant="outlined"
                      margin="dense">
                    </TextField>
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      label="Subtitle"
                      name="subtitle"
                      value={values.subtitle}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      size="small"
                      variant="outlined"
                      margin="dense">
                    </TextField>
                  </Grid>
                </Grid>
                <Grid
                  container
                >
                  <Grid item xs={12}>
                    <TextField
                      multiline
                      rows={4}
                      label="Content"
                      name="content"
                      value={values.content}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      size="small"
                      variant="outlined"
                      margin="dense">
                    </TextField>
                  </Grid>
                </Grid>
                <section className="container">
                  <div {...getRootProps({ className: classes.dropzone })}>
                    <input {...getInputProps()} />
                    <p>Drag 'n' drop some files here, or click to select files</p>
                  </div>
                  <aside className={classes.thumbsContainer}>
                    {thumbs}
                  </aside>
                </section>
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
                            spacing={2}
                            key={section.id}
                            alignItems="center"
                          >
                            <Grid item xs={3}>
                              <TextField
                                label="Title"
                                name={`sections.${index}.title`}
                                value={section.title}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                size="small"
                                variant="outlined"
                                margin="dense">
                              </TextField>
                            </Grid>
                            <Grid item xs={4}>
                              <TextField
                                label="Subtitle"
                                name={`sections.${index}.subtitle`}
                                value={section.subtitle}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                size="small"
                                variant="outlined"
                                margin="dense">
                              </TextField>
                            </Grid>
                            <Grid item xs={4}>
                              <TextField
                                label="Content"
                                name={`sections.${index}.content`}
                                value={section.content}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                size="small"
                                variant="outlined"
                                margin="dense">
                              </TextField>
                            </Grid>
                            <Grid item xs={1}>
                              <IconButton size="small" onClick={() => arrayHelpers.remove(index)}>
                                <CloseIcon />
                              </IconButton>
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

export default WorkManagement;
