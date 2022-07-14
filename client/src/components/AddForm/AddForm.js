import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper, FormControl, Select, InputLabel, MenuItem } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';
import useStyles from './styles';
import { createFruit } from '../../actions/fruits';

const AddForm = ({ currentId }) => {
  const [fruitData, setFruit] = useState({ name: '', weight: 0, season: '', image: '' });
  const fruit = useSelector((state) => (currentId ? state.fruits.find((message) => message._id === currentId) : null));
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    if (fruit) setFruit(fruit);
  }, [fruit]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(createFruit(fruitData));
  };

  return (
    <Paper className={classes.paper}> 
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography variant="h6">{currentId ? `Updating "${fruit.name}"` : 'Add a Fruit'}</Typography>
        <TextField name="name" variant="outlined" label="Name" fullWidth value={fruitData.name} onChange={(e) => setFruit({ ...fruitData, name: e.target.value })} />
        <TextField name="weight" variant="outlined" label="Weight (oz)" fullWidth value={fruitData.weight} onChange={(e) => setFruit({ ...fruitData, weight: e.target.value })} />
        <FormControl fullWidth>
          <InputLabel>Season</InputLabel>
          <Select
            name="season"
            value={fruitData.season}
            label="Season"
            onChange={(e) => setFruit({ ...fruitData, season: e.target.value })}>
            <MenuItem value={'Spring'}>Spring</MenuItem>
            <MenuItem value={'Summer'}>Summer</MenuItem>
            <MenuItem value={'Fall'}>Fall</MenuItem>
            <MenuItem value={'Winter'}>Winter</MenuItem>
            <MenuItem value={'All Year Round'}>All Year Round</MenuItem>
          </Select>
        </FormControl>
        <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setFruit({ ...fruitData, image: base64 })} /></div>
        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Add</Button>
      </form>
    </Paper>
  );
};

export default AddForm;
