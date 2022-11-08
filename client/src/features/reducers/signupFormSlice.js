import { createSlice } from "@reduxjs/toolkit";

const signupFormSlice = createSlice({
    name: "showSignUp",
    initialState: {
        set: false
    },
    reducers: {
        setShowSignUp(state, action) {
            state.set = action.payload;
        }
    }
})

export const { setShowSignUp } = signupFormSlice.actions;

export default signupFormSlice.reducer;