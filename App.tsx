import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts, Raleway_300Light, Raleway_400Regular, Raleway_700Bold } from '@expo-google-fonts/raleway'
import { Background } from './src/components/Background';

export default function App() {
  return (
    <Background>
      <StatusBar
        backgroundColor="transparent"
        translucent
      />
    </Background>
  );
}

