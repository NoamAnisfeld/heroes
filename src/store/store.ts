import type { TypedUseSelectorHook } from "react-redux";
import type { PayloadAction } from "@reduxjs/toolkit";
import { useStore, useDispatch, useSelector } from "react-redux";
import { configureStore, createSlice } from "@reduxjs/toolkit";

interface User {
    name: string,
}

const userSlice = createSlice({
  name: "loggedInUser",
  initialState: null as User | null,
  reducers: {
    login: (state, action: PayloadAction<string>): User => ({
        name: action.payload
    })
  },
});

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
});
export default store;

type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch

export const useAppStore: () => typeof store = useStore;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;