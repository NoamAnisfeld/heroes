import type { PayloadAction } from "@reduxjs/toolkit";
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