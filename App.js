import { StatusBar } from 'expo-status-bar';
import { StyleSheet,  View } from 'react-native';
import { Button, Provider as PaperProvider, Text } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TasksScreen from './screens/TasksScreen';
import BottomNavigator from './components/BottomNavigator';
import { Provider } from 'react-redux';
import { store } from './redux/store';

// const Stack = createNativeStackNavigator();


export default function App() {
  
  return (
    <Provider store={store}>
      <PaperProvider>
        <NavigationContainer>
          {/* <Stack.Navigator initialRouteName="Tasks">
            <Stack.Screen name="Tasks" component={TasksScreen} />
          </Stack.Navigator> */}
          <BottomNavigator />
        </NavigationContainer>
      </PaperProvider>
    </Provider>
  );
}
