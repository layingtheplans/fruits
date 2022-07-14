import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 6px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0)'
  },
  heading: {
    color: 'rgba(255, 255, 255)',
    fontFamily: 'Georgia'
  },
  image: {
    marginLeft: '15px',
  },
}));
