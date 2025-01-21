import { createSlice } from "@reduxjs/toolkit";
import { ExperienceFormType } from "../../types/types";

interface State {
    experienceInfo: ExperienceFormType
}

const initialState: State = {
    experienceInfo: {
        company_name: '',
        job_role: '',
        start_date: '',
        end_date: '',
        job_summary: '',
    }
}

export const experienceInfoSlice = createSlice({
    name: 'experienceInfo',
    initialState,
    reducers:{
        setExperienceInfo:(state,action)=>{
            state.experienceInfo=action.payload
        }
    }
})

export const {setExperienceInfo} = experienceInfoSlice.actions
export default experienceInfoSlice.reducer
