import { createSlice } from "@reduxjs/toolkit";
import { SnackbarProps } from "../../types/snackbar";

const initialState: SnackbarProps = {
    open: false,
    action: false,
    message: 'Note',
    anchorOrigin: {
        vertical: 'bottom',
        horizontal: 'center'
    },
    alert:{
        color: 'info',
        variant: 'filled',
        sx: {}
    },
    variant: 'default',
    transition: 'Fade',
    close: true,
    actionButton: false,
    maxStack: 3,
    dense: false,
    iconVariant: 'usedefault'
};

const snackbar = createSlice({
    name: 'snackbar',
    initialState,
    reducers:{
        openSnackbar(state, action) {
            const {open, close, variant, anchorOrigin, message, transition, actionButton, alert} = action.payload

            state.action = !state.action;
            state.open = open || initialState.open;
            state.close = close || initialState.close;
            state.variant = variant || initialState.variant;
            state.anchorOrigin = anchorOrigin || initialState.anchorOrigin;
            state.message = message || initialState.message;
            state.transition = transition || initialState.transition;
            state.actionButton = actionButton || initialState.actionButton;
            state.alert = {
                color: alert?.color || initialState.alert.color,
                variant: alert?.variant || initialState.alert.variant,
                sx: alert?.sx || initialState.alert.sx
            };
        },
        closeSnackbar(state){
            state.open = false;
        },

        handlerIncrease(state, action){
            const {maxStack} = action.payload
            state.maxStack = maxStack;
        },
        handlerDense(state, action){
            const {dense} = action.payload
            state.dense = dense;
        },
        handlerIconVariants(state,action){
            const {iconVariant} = action.payload
            state.iconVariant = iconVariant;
        }
    }
})

export const {openSnackbar, closeSnackbar, handlerDense, handlerIconVariants, handlerIncrease} = snackbar.actions
export default snackbar.reducer