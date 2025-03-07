import { Grid, InputLabel, OutlinedInput, Stack } from "@mui/material";
import { SyntheticEvent, useState } from "react";


const AuthLogin = ({forget}: {forget?:string}) => {
    const [checked, setChecked] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => {
      setShowPassword(!showPassword);
    };
  
    const handleMouseDownPassword = (event: SyntheticEvent) => {
      event.preventDefault();
    };

    return (
        <>
        <Grid container spacing={3}>
        <Grid item xs={12}>
            <Stack spacing={1}>
                <InputLabel htmlFor="email-login">Email Address</InputLabel>
                <OutlinedInput
                    id="email-login"
                    type="email"
                    // value={email}
                    name="email"
                    // onBlur={handleBlur}
                    // onChange={handleChange}
                    placeholder="Enter email address"
                    fullWidth
                    // error={Boolean(touched.email && errors.email)}
                  />
            </Stack>
        </Grid>
        <Grid item xs={12}>
            <Stack spacing={1}>
                <InputLabel htmlFor="password-login">Password</InputLabel>
                <OutlinedInput
                    id="password-login"
                    type="password"
                    // value={email}
                    name="password"
                    // onBlur={handleBlur}
                    // onChange={handleChange}
                    placeholder="Enter password"
                    fullWidth
                    // error={Boolean(touched.email && errors.email)}
                  />
            </Stack>
        </Grid>
        </Grid>
        </>
    )

}
export default AuthLogin;