import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import Fruits from './components/Fruits/Fruits';
import Search from './components/SearchForm/SearchForm';
import AddForm from './components/AddForm/AddForm';
import { getFruitByName } from './actions/fruits';
import useStyles from './styles';

const App = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(getFruitByName(''));
  }, [currentId, dispatch]);

  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">Fruit Search</Typography>
      </AppBar>
      <Grow in>
        <Container>
            <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={12}>
              <Search/>
            </Grid>
            <Grid item xs={12} sm={12}>
              <Fruits setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <AddForm currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
