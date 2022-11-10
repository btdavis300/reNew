import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "currentUser",
    initialState: {
        set: {}
    },
    reducers: {
        setCurrentUser(state, action) {
            state.set = action.payload;
        }
    }
})

export const { setCurrentUser } = userSlice.actions;

export default userSlice.reducer;