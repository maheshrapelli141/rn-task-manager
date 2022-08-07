import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CompletedTasksScreen from '../screens/CompletedTasksScreen';
import CreateTaskScreen from '../screens/CreateTaskScreen';
import TasksScreen from '../screens/TasksScreen';
import Ionicons from 'react-native-vector-icons/Ionicons'

const BottomTab = createBottomTabNavigator();

const BottomNavigator = () => {
  return <BottomTab.Navigator>
    <BottomTab.Screen
      name="To Do - Tasks"
      component={TasksScreen}
      options={{
        tabBarLabel: "Tasks",
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="list-outline" color={color} size={size} />
        )
      }} />

    <BottomTab.Screen
      name="Create Task"
      component={CreateTaskScreen}
      options={{
        tabBarLabel: "Create",
        tabBarIcon: ({ color, size }) =>
          <Ionicons name="create-outline" color={color} size={size} />
      }} />
    <BottomTab.Screen
      name="Completed Tasks"
      component={CompletedTasksScreen}
      options={{
        tabBarLabel: "Completed",
        tabBarIcon: ({ color, size }) =>
          <Ionicons name="trophy-outline" color={color} size={size} />
      }} />
  </BottomTab.Navigator>
};

export default BottomNavigator;