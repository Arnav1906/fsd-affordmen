import React from "react";
import ResponsiveAppBar from "../navbar/Navbar";
import Grid from "@mui/material/Grid";
import "./Home.css";

function Home() {
  return (
    <div className="container">
      <ResponsiveAppBar />
      <Grid container spacing={2} style={{ padding: "20px" }}>
        <Grid size={{ xs: 12, md: 6, lg: 6 }}>
          <h1>Welcome to Home Page.</h1>
          <p>This is a Simple Home page document.</p>
          <p>We can add more content here.</p>
          <img src="/task-list.svg" alt="alternate" />
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;
