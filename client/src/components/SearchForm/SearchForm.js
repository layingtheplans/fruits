import React from 'react';
import { TextField, Typography, Paper } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import useStyles from './styles';
import { getFruitByName } from '../../actions/fruits';

const Search = ({ currentId, setCurrentId }) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const onSearchChange = e => {
    dispatch(getFruitByName(e.target.value));
  }

  const handleSearch = async (e) => {
    e.preventDefault();
  };
  
  return (
    <Paper className={classes.paper}> 
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.search}`} onSubmit={handleSearch}>
        <TextField name="search" variant="outlined" label="What is the fruit name?" fullWidth onChange={onSearchChange} />
      </form>
    </Paper>
  );
};

export default Search;
