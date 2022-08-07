import React from 'react';
import { Alert, View } from 'react-native';
import { Button, List, Text } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import TaskItem from '../components/TaskItem';
import { deleteTaskAction } from '../redux/actions/task.actions';
import NoCompleteTasks from '../assets/no-completed-tasks.svg';
import { useNavigation } from '@react-navigation/native';
import MyText from '../components/MyText';

const CompletedTasksScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { tasks } = useSelector(state => state.tasks);
  
  const completedTasks = tasks.filter(task => task.isCompleted);

  function clearTasks(){
    completedTasks.map(task => dispatch(deleteTaskAction(task.id)))
  }

  function showClearAlert(){
    return Alert.alert(
      "Sure to remove all completed tasks",
      "Click yes to remove",
      [
        {
          text: "Cancel",
          onPress: () => console.log('canceld'),
          style: "cancel"
        },
        { text: "Yes", onPress: () =>clearTasks()}
      ]
    );
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
        <View style={{marginTop: 100,justifyContent: 'center',display: 'flex',alignItems:'center',paddingTop: 18}}>
          <MyText style={{width:250,fontSize: 20,textAlign: 'center'}}>Finished tasks appear here!</MyText>
          <NoCompleteTasks width={160} height={200} style={{margin:50}}/>
          <Button onPress={() => navigation.navigate('To Do - Tasks')}>Show Tasks</Button>
        </View>}
      </List.AccordionGroup>
      {completedTasks.length
      ?
      <Button onPress={() => showClearAlert()}>Clear All</Button>
    :
    null}
    </View>
  );
};

export default CompletedTasksScreen;