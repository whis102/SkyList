import "./Login.scss";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

import Avatar from '@mui/material/Avatar';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import AppleIcon from '@mui/icons-material/Apple';

function Login() {
  return (
    <React.Fragment>
      <CssBaseline />
        <Container maxWidth="sm" className="bg">
          <div className="favicon">
            <img src="../src/assets/favicon.png" alt="" width={50} height={50}/>
          </div>
          <h3 className="title">Welcome back!</h3>
          <span>
            <p>Don't have an account ye?t</p>
            <a href="">Register</a>
          </span>

          <form action="">
          <TextField id="outlined-basic" label="Email" variant="outlined" />
          <TextField id="outlined-basic" label="Password" variant="outlined" />

          <Button variant="contained">Login</Button>
          </form>
        </Container>
    </React.Fragment>


  );
}

export default Login;
