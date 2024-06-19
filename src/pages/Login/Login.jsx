import React from "react";
import "./Login.scss";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

import Avatar from "@mui/material/Avatar";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";

function Login() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container className="login-box">
        <Box sx={{ bgcolor: "#fff" }}>
          <Avatar
            alt="Logo"
            src="../src/assets/favicon.png"
            sx={{ width: 50, height: 50 }}
            variant="square"
          />

          <h3 className="title">Welcome back!</h3>
          <span>
            <p>Don't have an account yet?</p>
            <a href="">Register</a>
          </span>

          <form action="">
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
        </Box>
      </Container>
    </React.Fragment>
  );
}

export default Login;
