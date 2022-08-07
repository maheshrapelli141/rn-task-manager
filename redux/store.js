import {  createStore,combineReducers} from 'redux';
import taskReducer from './reducers/task.reducers';
 
const rootReducer = combineReducers({
  tasks: taskReducer
});
 
export const store = createStore(rootReducer);
