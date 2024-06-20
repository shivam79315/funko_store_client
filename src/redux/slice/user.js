import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { registerUserApi } from "../api/user"

// Define initial state for slice 
const initialState = {
    users:[],
    loading: false,
    error: null,
}

// createAsyncThunk
export const registerUserSlice = createAsyncThunk(
    'users/registerUserSlice', 
    async (values) => {
        console.log("values in slice page", values)
        const res = await registerUserApi(values);
        return res;
    }
)

// create slice 
const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        clearUser: (state) => {
            state.users = null
        }
    },
    extraReducers: (builder) => {
        builder
          .addCase(registerUserSlice.pending, (state) => {
            state.loading = true
          })
          .addCase(registerUserSlice.fulfilled, (state, action) => {
            state.loading = false,
            JSON.stringify(localStorage.setItem('user', action.payload.data))
            state.users = action.payload.data
          })
          .addCase(registerUserSlice.rejected, (state, action) => {
            state.error = action.error.message
          })
    }
})

export const { clearUser } = userSlice.actions;
export default userSlice.reducer;
