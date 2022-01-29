import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

export const getData = createAsyncThunk(
    "product",
    async () => {
        return await fetch("data.json").then(
            (res)=>res.json()
        )
    }
)

const dataSlice = createSlice({
    name: "data",
    initialState: {
        data: [],
        status:null
    },
    extraReducers: {
        [getData.pending]: (state, action) => {
            state.status = "loading";
        },
        [getData.fulfilled]: (state, action) => {
          state.status = "success";
          state.data = action.payload;
        },
        [getData.rejected]: (state, action) => {
          state.status = "failed";
        },
    }
})

export default dataSlice.reducer;