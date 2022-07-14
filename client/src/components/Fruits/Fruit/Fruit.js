import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';
import DeleteIcon from '@material-ui/icons/Delete';
import { useDispatch } from 'react-redux';
import { deleteFruit } from '../../../actions/fruits';
import useStyles from './styles';

const Fruit = ({ fruit, setCurrentId }) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media} image={fruit.image} title={fruit.name} />
      <CardContent>
        <Typography className={classes.name} gutterBottom variant="h5" component="h2">{fruit.name}</Typography>
        <Typography variant="body1" color="textSecondary" component="p">Weight (oz): {fruit.weight}</Typography>
        <Typography variant="body1" color="textSecondary" component="p">Season: {fruit.season}</Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button size="small" color="primary" onClick={() => dispatch(deleteFruit(fruit._id))}><DeleteIcon fontSize="small" /></Button>
      </CardActions>
    </Card>
  );
};

export default Fruit;
