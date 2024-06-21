import React from "react";
import "./Login.scss";
import Box from "@mui/material/Box";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

import Avatar from "@mui/material/Avatar";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";

function Login() {
  return (
    <div className="login-box">
      <Box sx={{ bgcolor: "#fff" }}>
        <Avatar
          alt="Logo"
          src="../src/assets/favicon.png"
          sx={{ width: 50, height: 50 }}
          variant="square"
        />

        <div className="title-box">
          <h3 className="title">Welcome back!</h3>
          <span>
            <p>Don't have an account yet?</p>
            <a href="">Register</a>
          </span>
        </div>

        <form action="" className="form-container">
          <TextField id="outlined-basic" label="Email" variant="outlined" />
          <TextField id="outlined-basic" label="Password" variant="outlined" />

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
    </div>
  );
}

export default Login;
