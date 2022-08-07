import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';
import { Divider, List, Text } from 'react-native-paper';
import { useSelector } from 'react-redux';
import TaskItem from '../components/TaskItem';

const TasksScreen = () => {
  const navigation = useNavigation();
  const { tasks } = useSelector(state => state.tasks);
  const pendingTasks = tasks.filter(task => !task.isCompleted);

  return (
    <View>
      <List.AccordionGroup>
        {pendingTasks.length
        ?
        pendingTasks
          .map(task => <TaskItem 
            id={task.id} 
            name={task.name} 
            description={task.description}
            isImp={task.isImp}
            isUrgent={task.isUrgent}
          />)
        :
        <Text onPress={() => navigation.navigate('Create Task')}>Create Tasks</Text>}
      </List.AccordionGroup>
    </View>
  );
};

export default TasksScreen;