import { Grid, TextField, Button, Typography, Stack } from "@mui/material";
import Logo from "../components/logo";
import imgGoogle from '../assests/Images/google.svg';
import AuthDivider from "../components/AuthDivider";
import AuthWrapper from "../components/AuthWrapper";
import AuthLogin from "./AuthPage";
import AuthSocButton from "../components/AuthSocButton";

const Login = () => {
  return (
    <>
    <AuthWrapper>
      <Grid container spacing={3}>
        <Grid item xs={12} sx={{textAlign: 'center'}}>
          <Logo/>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <AuthSocButton>
                <img src={imgGoogle} alt="google" style={{margin: '0 auto'}}/>Sign In with Google
              </AuthSocButton>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
        <AuthDivider>
  <Typography 
    variant="body1" 
    sx={{ 
      margin: 0, 
      fontSize: '0.875rem', 
      lineHeight: 1.57, 
      fontFamily: 'Inter var', 
      fontWeight: 400 
    }}
  >
    OR
  </Typography>
</AuthDivider>

        </Grid>
        <Grid item xs={12}>
          <Stack direction='row' justifyContent='space-between' alignItems='baseline' sx={{mb:{xs: -0.5, sm: 0.5}}}>
            <Typography variant="h3" justifyContent='center' alignContent='center'>Login</Typography>
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <AuthLogin forget="/dashboard"/>
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color='primary' type="submit">
            Login
          </Button>
        </Grid>
      </Grid>
    </AuthWrapper>
    </>
  );
};

export default Login;
