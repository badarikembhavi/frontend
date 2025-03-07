import { Button, ButtonProps } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const AuthSocButton = ({ children, ...other }: ButtonProps) => {
  const theme = useTheme();
  return (
    <Button
      variant="outlined"
      fullWidth
      sx={{
        backgroundColor: theme.palette.secondary.light,  // FIXED
        borderColor: theme.palette.secondary.dark,       // FIXED
        color: theme.palette.secondary.main,
        '&:hover,&:focus': {
          backgroundColor: theme.palette.secondary.light,  // FIXED
          borderColor: theme.palette.primary.main
        }
      }}
      {...other}
    >
      {children}
    </Button>
  );
};

export default AuthSocButton;
