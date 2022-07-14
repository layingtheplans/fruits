import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  media: {
    height: 0,
    paddingTop: '85.25%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  border: {
    border: 'solid',
  },
  fullHeightCard: {
    height: '100%',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '10px',
    height: '100%',
    margin: '20px',
    position: 'relative',
  },
  content: {
    color: 'rgba(255, 255, 255)',
  },
  grid: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '20px',
  },
  name: {
    color: 'rgba(0, 0, 0)',
  },
  cardActions: {
    padding: '0x 25px 8px 25px',
    display: 'flex',
    justifyContent: 'space-between',
  },
});
