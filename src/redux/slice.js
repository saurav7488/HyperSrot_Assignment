import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    tasks: [],
    searchData:[]
  },
  reducers: {
    addTask: (state, action) => {
      // console.log(action.payload)
      state.tasks.push(action.payload);
    },
    updateUser: (state, action) => {
      const { id, assignee, description, priority, status, title } = action.payload;
      // console.log(title)
      const taskToUpdate = state.tasks.find(task => task.id === id);
      if (taskToUpdate) {
        taskToUpdate.assignee = assignee;
        taskToUpdate.description = description;
        taskToUpdate.priority = priority;
        taskToUpdate.status = status;
        taskToUpdate.title = title;
      }
    },
    deleteUser:(state,action)=>{
        //  const {ID} = action.payload 
        //  console.log(action.payload)
        //  const uu = state.tasks.find(user=>user.id === ID) 
        //  console.log(uu)
        //  if(uu) {
        //     return state.tasks.filter(f=>f.id !== ID)
        //  }

        const { ID } = action.payload;
        const index = state.tasks.findIndex(task => task.id === ID);
        if (index !== -1) {
          state.tasks.splice(index, 1);
        }

        
    },
    searchUser:(state,action)=>{
      state.searchData = action.payload
 }
  },
});

export const { addTask, updateUser , deleteUser ,searchUser} = userSlice.actions;

export default userSlice.reducer;
