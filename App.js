import { StatusBar } from 'expo-status-bar';
import { StyleSheet,  View } from 'react-native';
import { Button, Provider as PaperProvider, Text } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TasksScreen from './screens/TasksScreen';
import BottomNavigator from './components/BottomNavigator';

const Stack = createNativeStackNavigator();


export default function App() {
  
  return (
    <PaperProvider>
      <NavigationContainer>
        {/* <Stack.Navigator initialRouteName="Tasks">
          <Stack.Screen name="Tasks" component={TasksScreen} />
        </Stack.Navigator> */}
        <BottomNavigator />
      </NavigationContainer>
    </PaperProvider>
  );
}
