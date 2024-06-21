import React from "react";
import "./Login.scss";
import Box from "@mui/material/Box";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";
import { Avatar, Link, Paper, Typography, Grid } from "@mui/material";

function Login() {
  return (
    <div className="login-box">
      <Grid alignItems={"center"} justifyContent={"center"} display={"flex"}>
        <Paper elevation={20} className="paper">
          <Grid alignItems={"center"}>
            <Avatar
              alt="Logo"
              src="../src/assets/favicon.png"
              sx={{ width: 50, height: 50 }}
              variant="square"
            />

            <div className="title-box">
              <Typography variant="h3">Welcome back!</Typography>
              <span>
                <Typography variant="caption">
                  Don't have an account yet?
                </Typography>
                <Link underline="none">Register</Link>
              </span>
            </div>

            <form action="" className="form-container">
              <TextField id="outlined-basic" label="Email" variant="outlined" />
              <TextField
                id="outlined-basic"
                label="Password"
                variant="outlined"
              />

              <Button variant="contained">Login</Button>

              <Box className="social-buttons">
                <Button
                  startIcon={<FacebookIcon />}
                  variant="outlined"
                  className="social-button"
                />
                <Button
                  startIcon={<GoogleIcon />}
                  variant="outlined"
                  className="social-button"
                />
                <Button
                  startIcon={<AppleIcon />}
                  variant="outlined"
                  className="social-button"
                />
              </Box>
            </form>
          </Grid>
        </Paper>
      </Grid>
    </div>
  );
}

export default Login;
