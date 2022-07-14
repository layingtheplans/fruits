import React from 'react';
import { Grid } from '@material-ui/core';
import { useSelector } from 'react-redux';
import Fruit from './Fruit/Fruit';
import useStyles from './styles';

const Fruits = ({ setCurrentId }) => {
  const fruits = useSelector((state) => state.fruits);
  const classes = useStyles();

  return (
    <Grid className={classes.container}>
      {fruits.map((fruit) => (
        <Grid key={fruit._id} item xs={12} sm={12} md={12}>
          <Fruit fruit={fruit} setCurrentId={setCurrentId} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Fruits;
