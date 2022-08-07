import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { Image, View } from 'react-native';
import { Button, Divider, List, Text } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import TaskItem from '../components/TaskItem';
import { retriveData } from '../helpers/AsyncStorageHandler';
import { setTasksAction } from '../redux/actions/task.actions';
import CreateTaskSvg from '../assets/create-project.svg';
import { SvgUri } from 'react-native-svg';

const TasksScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const { tasks } = useSelector(state => state.tasks);
  const pendingTasks = tasks
    .filter(task => !task.isCompleted)
    .map(task => {
      let quadrant = 1; //1,2,3
      if(task.isImp && task.isUrgent){
        quadrant = 1;
      } else if(task.isImp && !task.isUrgent){
        quadrant = 2;
      } else if(!task.isImp && task.isUrgent){
        quadrant = 3;
      } else {
        quadrant = 4;
      }
      return {
        ...task,
        quadrant
      }
    });

    pendingTasks.sort((taskA,taskB) => taskA.quadrant < taskB.quadrant ? -1 : 1);

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
        <View style={{marginTop: 100,justifyContent: 'center',display: 'flex',alignItems:'center',paddingTop: 18}}>
          <Text style={{width:250,fontSize: 20,textAlign: 'center'}}>Now Manage Tasks more efficients</Text>
          <CreateTaskSvg width={160} height={200} style={{margin:50}}/>
          <Button onPress={() => navigation.navigate('Create Task')}>Create Tasks</Button>
        </View>
        }
      </List.AccordionGroup>
    </View>
  );
};

export default TasksScreen;