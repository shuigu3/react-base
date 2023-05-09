import React from "react";
import { MESSAGE } from "config";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

const Home = () => {
  return (
    <>
      <Container maxWidth="xs" sx={{ pt: 2 }}>
        <Typography variant="h5">{MESSAGE}</Typography>
      </Container>
    </>
  );
};

export default Home;
