import React from "react";
import ResponsiveAppBar from "../navbar/Navbar";
import { Grid, TextField, Button, Typography, Box } from "@mui/material";

function Register() {
    return (
        <div>
            <ResponsiveAppBar />
            <Box sx={{ padding: 4 }}>
                <Typography variant="h4" align="center" gutterBottom>
                    Register for Managing ...
                </Typography>
                <form>
                    <Grid container spacing={2} maxWidth="sm" margin="auto">
                        <Grid item xs={12}>
                            <TextField
                                label="Username"
                                name="username"
                                fullWidth
                                required
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Full Name"
                                name="fullname"
                                fullWidth
                                required
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Email"
                                type="email"
                                name="email"
                                fullWidth
                                required
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Phone No"
                                type="tel"
                                name="phone"
                                fullWidth
                                required
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Password"
                                type="password"
                                name="password"
                                fullWidth
                                required
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Confirm Password"
                                type="password"
                                name="confirmPassword"
                                fullWidth
                                required
                            />
                        </Grid>
                        <Grid item xs={12} textAlign="center">
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                            >
                                Register
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Box>
        </div>
    );
}

export default Register;
