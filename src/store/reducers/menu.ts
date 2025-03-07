import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { MenuProps } from "../../types/menu";

const initialState: MenuProps = {
    openItem: ['dashboard'],
    openComponent: 'buttons',
    selectedID: null,
    drawerOpen: false,
    componentdrawerOpen: true,
    menu: {},
    error: null
}

export const fetchMenu = createAsyncThunk('', async () => {
    // const response = await axios.get('/api/menu/dashboard');
    // const response =
    // return response.data;
  });

const menu = createSlice({
    name: 'menu',
    initialState,
    reducers:{
        activeItem(state, action){
            state.openItem = action.payload.openItem;
        },
        activeID(state, action){
            state.selectedID = action.payload.selectedID;
        },
        activeDrawer(state, action){
            state.drawerOpen = action.payload;
        },
        activeComponentDrawerOpen(state, action){
            state.componentdrawerOpen = action.payload.componentdrawerOpen;
        },
        hasError(state, action){
            state.error = action.payload;
        },
        activeComponent(state, action) {
            state.openComponent = action.payload.openComponent;
        },
    },

    extraReducers(builder) {
        builder.addCase(fetchMenu.fulfilled, (state, action) => {

        });
    },
})

export default menu.reducer;
export const {activeItem, activeID, activeDrawer, activeComponentDrawerOpen, hasError } = menu.actions;