import "./Register.scss";
import Stack from "@mui/material/Stack";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";
import { Avatar, Link, Paper, Typography, Grid } from "@mui/material";

function Register() {
  return (
    <div className="login-box">
      <Grid
        alignItems={"center"}
        justifyContent={"center"}
        display={"flex"}
        height={"100%"}
      >
        <Paper elevation={20} className="paper">
          <Avatar
            alt="Logo"
            src="../src/assets/favicon.png"
            className="favicon"
            sx={{ width: 50, height: 50 }}
            variant="square"
          />

          <div className="title-box">
            <Typography variant="h4">Welcome back!</Typography>
            <span>
              <Typography variant="caption">
                Have already got an account?
              </Typography>
              <Link underline="none" href="/login">
                Login
              </Link>
            </span>
          </div>

          <form action="" className="form-container">
            <TextField
              className="input-box"
              label="Username"
              variant="outlined"
            />
            <TextField className="input-box" label="Email" variant="outlined" />
            <TextField
              className="input-box"
              label="Password"
              variant="outlined"
            />

            <Button variant="contained">Register</Button>
          </form>

          <div className="divider-container">
            <div className="divider"></div>
            OR
            <div className="divider"></div>
          </div>

          <Stack spacing={2} direction="row" className="social-buttons">
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
          </Stack>
        </Paper>
      </Grid>
    </div>
  );
}

export default Register;
