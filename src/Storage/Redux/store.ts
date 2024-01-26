import {configureStore} from "@reduxjs/toolkit" ;
import {menuProductReducer} from "./menuItemSlice";
import { menuProductApi } from "../../Apis";
import { curryGetDefaultMiddleware } from "@reduxjs/toolkit/dist/getDefaultMiddleware";

const store = configureStore({
    reducer:{
        menuProductStore: menuProductReducer,
        [menuProductApi.reducerPath]:menuProductApi.reducer
    },
    middleware:(curryGetDefaultMiddleware) => curryGetDefaultMiddleware().concat(menuProductApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export default store;