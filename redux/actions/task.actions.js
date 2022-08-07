import { TASKS_CONSTANTS } from "../constants/task.constants";

export const createTaskAction = (task) => ({
  type: TASKS_CONSTANTS.CREATE,
  payload: { task }
});

export const setTasksAction = (tasks) => ({
  type: TASKS_CONSTANTS.SET,
  payload: { tasks }
});

export const markTaskAsCompletedAction = (taskId) => ({
  type: TASKS_CONSTANTS.MARK_COMPLETE,
  payload: { id: taskId }
});