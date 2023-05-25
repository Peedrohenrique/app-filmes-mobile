import 'react-native-gesture-handler'
import Routes from './src/routes';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
      <Routes />
      <StatusBar style="light" translucent />
    </NavigationContainer>
  );
}