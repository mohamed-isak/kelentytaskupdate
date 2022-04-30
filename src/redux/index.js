import dashboardReducer from "./reducer/reducer";
import { configureStore } from '@reduxjs/toolkit'


export const store = configureStore(
  { reducer: dashboardReducer }
  );
  
  