import React from 'react';
import { View } from 'react-native';
import { Divider, List, Text } from 'react-native-paper';
import TaskItem from '../components/TaskItem';

const TasksScreen = () => {
  return (
    <View>
      <List.AccordionGroup>
        <TaskItem />
      </List.AccordionGroup>
    </View>
  );
};

export default TasksScreen;