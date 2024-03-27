import { configureStore} from "@reduxjs/toolkit";

import userSlice from './slice'
import ToggleSLice from "./Toggle.SLice";


const storeReducer = configureStore({
     reducer:{
          users : userSlice,
          toggle:ToggleSLice
     }
})  


export default storeReducer

