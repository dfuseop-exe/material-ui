import "../Styles/App.css";
import React from "react";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

function App() {
  return (
    <Box display="flex">
      <Box width={400} boxShadow={6} p={3} m={3}>
        <Typography variant="h4" align="center">
          Blogging Site
        </Typography>
        <Typography variant="body1" align="center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam molestias
          commodi impedit ab? Quos modi aspernatur mollitia provident
          voluptatem! Illum deleniti suscipit architecto commodi voluptatibus
          temporibus aut eos nemo exercitationem. Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Odit dicta exercitationem ratione
          consequuntur dolores quo laudantium voluptate non debitis tenetur
          quisquam, soluta quia quaerat labore maxime ab at, culpa molestias.
        </Typography>
      </Box>

      <Box width={400} boxShadow={6} p={3} m={3}>
        <Typography variant="h4" align="center">
          Blogging Site
        </Typography>
        <Typography variant="body2" align="center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam molestias
          commodi impedit ab? Quos modi aspernatur mollitia provident
          voluptatem! Illum deleniti suscipit architecto commodi voluptatibus
          temporibus aut eos nemo exercitationem. Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Odit dicta exercitationem ratione
          consequuntur dolores quo laudantium voluptate non debitis tenetur
          quisquam, soluta quia quaerat labore maxime ab at, culpa molestias.
        </Typography>
      </Box>
    </Box>
  );
}

export default App;
