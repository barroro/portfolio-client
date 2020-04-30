import React, { useEffect } from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import ProTip from '../src/ProTip';
import Link from '../src/Link';
import Copyright from '../src/Copyright';
import { useSelector, useDispatch } from 'react-redux';
import { worksActions } from '../redux/store/actions/WorksActions';

export default function Work() {

  const dispatch = useDispatch();
  const { works } = useSelector(state => state.worksReducer);

  //Get products
  useEffect(() => {
    dispatch(worksActions.getWorksAction());
    console.log('Works: ', works);
  }, [dispatch])

  return (
    <div className="section-100vh">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Work page
        </Typography>
        <Button variant="contained" color="primary" component={Link} naked href="/">
          Go to the main page
        </Button>
        <ProTip />
        <Copyright />
      </Box>
    </div>
  );
}
