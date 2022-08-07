import React from 'react';
import { View } from 'react-native';
import { List, Text } from 'react-native-paper';
import TaskItem from '../components/TaskItem';

const CompletedTasksScreen = () => {
  return (
    <View>
      <List.AccordionGroup>
        <TaskItem type='completed' />
      </List.AccordionGroup>
    </View>
  );
};

export default CompletedTasksScreen;