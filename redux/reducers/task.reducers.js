import {TASKS_CONSTANTS} from '../constants/task.constants';

const initialState = {
  tasks: []
}

const taskReducer = (state = initialState,action) => {
  const { type, payload} = action;
  switch(type){
    case TASKS_CONSTANTS.CREATE:
      return { 
        tasks: [...state.tasks, payload.task]
      }
    case TASKS_CONSTANTS.SET:
      return { 
        tasks: [...payload.tasks]
      }
    case TASKS_CONSTANTS.MARK_COMPLETE: 
      const taskIndex = state.tasks.findIndex(task => task.id === payload.id);
      state.tasks[taskIndex].isCompleted = true;
      return {
        ...state
      }
    default: 
      return state;
  }
}
export default taskReducer;