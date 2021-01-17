import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    backgroundColor: 'green',
    color: props => props.color,
  },
});

function App(props) {
  const classes = useStyles(props);

  return (
    <div className="">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Button size="large" variant="contained" color="primary" startIcon={<DeleteIcon />} className={classes.root}>
          Hello World
       </Button>
      </header>
    </div>
  );
}

export default App;
