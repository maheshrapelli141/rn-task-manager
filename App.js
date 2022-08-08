import { StatusBar } from 'expo-status-bar';
import { StyleSheet,  View } from 'react-native';
import { Button, configureFonts, DefaultTheme, Provider as PaperProvider, Text } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TasksScreen from './screens/TasksScreen';
import BottomNavigator from './components/BottomNavigator';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { useFonts } from 'expo-font';
import { useEffect } from 'react';
import { pushImmediateNotification } from './helpers/notifications';

// const Stack = createNativeStackNavigator();

const fontConfig = {
  default: {
      regular: {
          fontFamily: 'TiroGurmukhi_Regular',
          fontWeight: 'normal',
      },
      medium: {
          fontFamily: 'TiroGurmukhi_Regular',
          fontWeight: 'normal',
      },
      light: {
          fontFamily: 'TiroGurmukhi_Regular',
          fontWeight: 'normal',
      },
      thin: {
          fontFamily: 'TiroGurmukhi_Regular',
          fontWeight: 'normal',
      },
  },
};

const theme = {
  ...DefaultTheme,
  roundness: 25,
  fonts: configureFonts(fontConfig),
  colors: {
      ...DefaultTheme.colors,
      primary: '#0d80d6',
      accent: '#E68FAE',
      // background: '#C6E1F2',
  },
}

export default function App() {
  const [loaded] = useFonts({
    TiroGurmukhi_Regular: require('./assets/fonts/TiroGurmukhi-Regular.ttf'),
    TiroGurmukhi_Italic: require('./assets/fonts/TiroGurmukhi-Italic.ttf'),
  });

  useEffect(() => {
    setTimeout(() => {
      pushImmediateNotification();
    },3000);
  },[]);
  
  return (
    <Provider store={store}>
      <PaperProvider theme={theme}>
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
