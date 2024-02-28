import { combineReducers } from '@reduxjs/toolkit';
import  projectSlice  from './slices/saveProjects';

const rootReducer = combineReducers({
    project: projectSlice
});

export default rootReducer;
