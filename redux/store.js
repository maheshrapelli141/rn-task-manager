import {  createStore,combineReducers} from 'redux';
import { storeData } from '../helpers/AsyncStorageHandler';
import taskReducer from './reducers/task.reducers';
 
const rootReducer = combineReducers({
  tasks: taskReducer
});
 
export const store = createStore(rootReducer);

store.subscribe(() => {
  const currentState = store.getState();
  storeData('tasks',currentState);
});