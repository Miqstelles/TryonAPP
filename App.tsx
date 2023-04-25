import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts, Raleway_300Light, Raleway_400Regular, Raleway_700Bold } from '@expo-google-fonts/raleway'
import { Knewave_400Regular } from '@expo-google-fonts/knewave'
import { Background } from './src/components/Background';
import { Loading } from './src/components/Loading';
import { Routes } from './src/routes';

export default function App() {
  const [fontsLoaded] = useFonts({
    Raleway_400Regular, Raleway_300Light, Raleway_700Bold, Knewave_400Regular
  });

  return (
    <Background>
      <StatusBar
        backgroundColor="transparent"
        translucent
      />
      {fontsLoaded ? <Routes /> : <Loading />}
    </Background>
  );
}

