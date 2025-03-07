import { configureStore } from "@reduxjs/toolkit";
import snackbar from './reducers/snackbar'
import { useDispatch as useAppDispatch, useSelector as useAppSelector, TypedUseSelectorHook} from "react-redux";
import reducers from "./reducers";

const store = configureStore({reducer: reducers})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
const { dispatch } = store;

const useDispatch = () => useAppDispatch<AppDispatch>();
const useSelector: TypedUseSelectorHook<RootState> = useAppSelector;

export {store, dispatch, useDispatch, useSelector}