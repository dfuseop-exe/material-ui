import "../Styles/App.css";
import React from "react";
import Typography from "@mui/material/Typography";
import { makeStyles } from '@material-ui/core/styles'


const useStyles = makeStyles({
  pink : {
    color : "deeppink" ,
   fontSize : 150 ,
  },
});

function App() {

  const classes = useStyles();
  return (
    <>
      <Typography variant="h3" align="center" className={classes.pink} gutterBottom>Hello Material UI</Typography>
      {/* <Typography variant="h3" align="right">Hello Material UI</Typography> */}

      
    </>
  );
}

export default App;