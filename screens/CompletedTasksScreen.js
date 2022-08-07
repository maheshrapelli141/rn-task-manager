import React from 'react';
import { View } from 'react-native';
import { Button, List, Text } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import TaskItem from '../components/TaskItem';
import { deleteTaskAction } from '../redux/actions/task.actions';

const CompletedTasksScreen = () => {
  const dispatch = useDispatch();
  const { tasks } = useSelector(state => state.tasks);
  
  const completedTasks = tasks.filter(task => task.isCompleted);

  function clearTasks(){
    completedTasks.map(task => dispatch(deleteTaskAction(task.id)))
  }

  return (
    <View>
      <List.AccordionGroup>
        {completedTasks.length
        ?
        completedTasks
          .map(task => <TaskItem 
            id={task.id} 
            name={task.name} 
            description={task.description}
            isImp={task.isImp}
            isUrgent={task.isUrgent}
            type="completed"
          />)
        :
        <Text>Not Finished any tasks yet!</Text>}
      </List.AccordionGroup>
      {completedTasks.length
      ?
      <Button onPress={() => clearTasks()}>Clear All</Button>
    :
    null}
    </View>
  );
};

export default CompletedTasksScreen;