import { createSlice } from "@reduxjs/toolkit";

const chartSlice = createSlice({
    name: "chart",
    initialState: {
        selectedChartType: null,
    },
    reducers: {
        setSelectedChartType: (state, action) => {
            state.selectedChartType = action.payload
        }
    }
})

export const { setSelectedChartType } = chartSlice.actions
export default chartSlice.reducer