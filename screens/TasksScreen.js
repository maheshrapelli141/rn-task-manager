import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { View } from 'react-native';
import { Button, Divider, List, Text } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import TaskItem from '../components/TaskItem';
import { retriveData } from '../helpers/AsyncStorageHandler';
import { setTasksAction } from '../redux/actions/task.actions';

const TasksScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const { tasks } = useSelector(state => state.tasks);
  const pendingTasks = tasks.filter(task => !task.isCompleted);


  useEffect(() => {
    retriveData('tasks')
      .then(data => {
        const parsedData = JSON.parse(data);
        dispatch(setTasksAction(parsedData && parsedData.tasks && parsedData.tasks.tasks || []))
      });
  },[]);


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