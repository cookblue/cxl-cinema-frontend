import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
  avatar: {
    background: 'transparent',
    display: 'flex',
    margin: '5px'
  },
  card: {
    background: 'grey',
    display: 'flex',
    width: '20%'
  },
  messageContainer: {
    width: '100%',
    background: 'blue',
    display: 'flex'
  },
  message: {
    background: 'white',
    lineHeight: '1.225',
    display: 'flex',
    margin: '5px',
    width: '100%'
  }

});

export default useStyles