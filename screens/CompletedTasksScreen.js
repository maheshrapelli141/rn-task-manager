import React from 'react';
import { View } from 'react-native';
import { List, Text } from 'react-native-paper';
import { useSelector } from 'react-redux';
import TaskItem from '../components/TaskItem';

const CompletedTasksScreen = () => {
  const { tasks } = useSelector(state => state.tasks);
  console.log({tasks});
  const completedTasks = tasks.filter(task => task.isCompleted);
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
    </View>
  );
};

export default CompletedTasksScreen;