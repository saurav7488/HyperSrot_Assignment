import { createSlice } from "@reduxjs/toolkit";


const toggleSlice = createSlice({
     name:"toggle",
     initialState:{
        isEditOpen:false,
        updateDelete:null,
        DeleteData:false
     },
     reducers:{
        editOpen:(state)=>{
            state.isEditOpen=true
        },
        editClose:(state)=>{
            state.isEditOpen=false
        },
        setUpdateDelete:(state,action)=>{
             state.updateDelete = action.payload
        },
        deleteOpen:(state)=>{
             state.DeleteData= true
        },
        deleteClose:(state)=>{
              state.DeleteData = false
        }
     }
})

export const {editClose,editOpen,setUpdateDelete,deleteClose,deleteOpen} = toggleSlice.actions

export default toggleSlice.reducer