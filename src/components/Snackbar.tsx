import { SyntheticEvent } from "react";

import {Alert, Button, Fade, Grow, SlideProps, Slide, Stack, Snackbar as MuiSnackbar} from '@mui/material'

import { dispatch, useSelector } from "../store";
import { Add } from "iconsax-react";
import { KeyedObject } from "../types/root";
import { closeSnackbar } from "../store/reducers/snackbar";

function TransitionSlideLeft(props: SlideProps){
    return <Slide {...props} direction="left" />
}

function TransitionSlideRight(props: SlideProps){
    return <Slide {...props} direction="right" />
}

function TransitionSlideUp(props: SlideProps){
    return <Slide {...props} direction="up" />
}

function TransitionSlideDown(props: SlideProps){
    return <Slide {...props} direction="down" />
}

function GrowTransition(props: SlideProps){
    return <Grow {...props} />
}

const animation: KeyedObject = {
    SlideLeft: TransitionSlideLeft,
    SlideRight: TransitionSlideRight,
    SlideUp: TransitionSlideUp,
    SlideDown: TransitionSlideDown,
    Grow: GrowTransition,
    Fade
}

const Snackbar = () => {
    const {actionButton, anchorOrigin, alert, close, message, open, transition, variant} = useSelector((state)=> state.snackbar)
    const handleClose = (event: SyntheticEvent | Event, reason?: string) => {
        if(reason === 'clickaway'){
            return;
        }
        dispatch(closeSnackbar());
    }

    return (
        <>
        {variant === 'alert' && (
            <MuiSnackbar
            TransitionComponent={animation[transition]}
            autoHideDuration={6000}
            open = {open}
            anchorOrigin={anchorOrigin}
            onClose={handleClose}
            >
                <Alert
                onClose={handleClose}
                variant={alert.variant}
                color={alert.color}
                action = {
                    <Button color="inherit" size="small">
                        UNDO
                    </Button>
                }
                sx={{
                    ...alert.sx,
                    ...(alert.variant === 'outlined' && {
                        bgcolor: 'background.default'
                    }),
                    borderRadius: '12px'
                }}
                >
                    {message}
                </Alert>
            </MuiSnackbar>
        )}
        </>
    )
}
export default Snackbar;
