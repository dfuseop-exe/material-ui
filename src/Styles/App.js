import "../Styles/App.css";
import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Container } from "@mui/material";

function App() {
  return (
    <Container maxWidth="md">
      <Box textAlign="center" pt={3}>
        <Typography variant="h3">About Us</Typography>

        <Typography variant="subtitle1">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias ut,
          quasi nemo quod atque incidunt dignissimos numquam quo accusantium
          perferendis? Dolorem, recusandae corrupti sunt cupiditate iusto aut
          sint eum quisquam eos repellat eaque, facilis illum, impedit ipsam
          sequi laboriosam. Voluptate? Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Necessitatibus maiores provident, illo nostrum
          cupiditate, hic beatae architecto aut sequi perferendis voluptatibus
          eos? Ab officiis est debitis repellendus ut porro neque!
        </Typography>
      </Box>
    </Container>
  );
}

export default App;
