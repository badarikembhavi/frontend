import { useState } from "react";
import { Grid, Button, Typography, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { openSnackbar } from "../store/reducers/snackbar";
import Logo from "../components/logo";
import imgGoogle from '../assests/Images/google.svg'
import AuthDivider from "../components/AuthDivider";
import AuthWrapper from "../components/AuthWrapper";
import AuthLogin from "./AuthPage";
import AuthSocButton from "../components/AuthSocButton";
import { dispatch } from "../store";

const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    try {
      setLoading(true);
      
      // Simulating an API call delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      dispatch(
        openSnackbar({
          open: true,
          message: "Login successful!",
          variant: "alert",
          alert: { color: "success" },
          close: true,
        })
      );
      console.log("Snackbar Dispatched Successfully");

      navigate("/dashboard");
    } catch (error) {
      dispatch(
        openSnackbar({
          open: true,
          message: "An error occurred while logging in",
          variant: "alert",
          alert: { color: "error" },
          close: true,
        })
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthWrapper>
      <Grid container spacing={3}>
        <Grid item xs={12} sx={{ textAlign: "center" }}>
          <Logo />
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <AuthSocButton>
                <img src={imgGoogle} alt="google" style={{ marginRight: 8 }} />
                Sign In with Google
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
                fontSize: "0.875rem",
                lineHeight: 1.57,
                fontFamily: "Inter var",
                fontWeight: 400,
              }}
            >
              OR
            </Typography>
          </AuthDivider>
        </Grid>
        <Grid item xs={12}>
          <Stack direction="row" justifyContent="center" alignItems="center">
            <Typography variant="h3">Login</Typography>
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <AuthLogin forget="/dashboard" />
        </Grid>
        <Grid item xs={12}>
          <Button 
            fullWidth 
            variant="contained" 
            color="primary" 
            type="submit" 
            onClick={handleLogin}
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </Button>
        </Grid>
      </Grid>
    </AuthWrapper>
  );
};

export default Login;
