import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { BasicFormTypes } from '../../types/types'

interface State{
    basicInfo:BasicFormTypes
}

const initialState: State = {
    basicInfo:{
        name: '',
        job: '',
        phone: 0,
        email: '',
        summary: ''
    }
}

export const basicInfoSlice = createSlice({
    name: 'basicInfo',
    initialState,
    reducers: {
        setBasicInfo: (state, action:PayloadAction<BasicFormTypes>) => {
            state.basicInfo = action.payload
        }
    },
})

// Action creators are generated for each case reducer function
export const { setBasicInfo } = basicInfoSlice.actions

export default basicInfoSlice.reducer