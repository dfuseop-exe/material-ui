import "../Styles/App.css";
import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Container } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  
  container : {
    maxWidth : '100vw',
    maxHeight : '100vh',
    display:"flex",
    justifyContent : "space-evenly" ,
  },
  mystyle: {
    backgroundColor: "red",
    borderRadius: 5,
    width : 300 ,
    color:"white",
    padding : 50 ,
    boxShadow : "0px 20px 30px rgba(0,0,0,0.1)"
  }
});


function App() {
  const classes = useStyles();
 

  return (
    <Box className={classes.container}>
      <Box className={classes.mystyle}>
        <Typography variant="h4">Heading</Typography>
        <Typography variant="subtitle1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, sunt.
        </Typography>
      </Box>

      <Box className={classes.mystyle}>
        <Typography variant="h4">Heading</Typography>
        <Typography variant="subtitle1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, sunt.
        </Typography>
      </Box>

      <Box className={classes.mystyle}>
        <Typography variant="h4">Heading</Typography>
        <Typography variant="subtitle1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, sunt.
        </Typography>
      </Box>
    </Box>
  );
}

export default App;
