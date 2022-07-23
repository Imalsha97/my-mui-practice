import './App.css';
import React from 'react';
import SideMenu from '../components/SideMenu';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  appMain : {
    paddingLeft:'320px',
    width:'100%'
  }
})

function App() {
  const classes = useStyles();
  return (
    <>
    <SideMenu/>
    <div className={classes.appMain}>hhhhhhhhhhhh</div>
    </>
  );
}

export default App;
