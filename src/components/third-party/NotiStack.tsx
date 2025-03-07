import { ReactNode } from "react";

import { styled } from "@mui/material/styles";
import { SnackbarProvider } from "notistack";
import { useSelector } from "../../store";
import { CloseCircle, TickCircle, InfoCircle, Warning2 } from "iconsax-react";

const StyledSnackbarProvider = styled(SnackbarProvider)(({theme}) => ({
    '&.notistack-MuiContent-default':{
        backgroundColor: theme.palette.primary.main
    },
    '&.notistack-MuiContent-error':{
        backgroundColor: theme.palette.error.main
    },
    '&.notistack-MuiContent-success':{
        backgroundColor: theme.palette.success.main
    },
    '&.notistack-MuiContent-info':{
        backgroundColor: theme.palette.info.main
    },
    '&.notistack-MuiContent-warning':{
        backgroundColor: theme.palette.warning.main
    }
}));

const Notistack = ({children}:{children:ReactNode}) => {
    const snackbar = useSelector((state)=> state.snackbar);
    const iconSX = {marginRight: 8, fontSize: '1.5rem'};

    return (
        <StyledSnackbarProvider
        maxSnack={snackbar.maxStack}
        dense = {snackbar.dense}
        iconVariant={
            snackbar.iconVariant === 'useemojis'
            ? {
                success: <TickCircle style={iconSX}/>,
                error: <CloseCircle style={iconSX}/>,
                warning: <Warning2 style={iconSX}/>,
                info: <InfoCircle style={iconSX}/>
            }
            : undefined
        }
        hideIconVariant = {snackbar.iconVariant === 'hide' ? true : false}
        >
            {children}
        </StyledSnackbarProvider>
    )
}
export default Notistack;