import 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { AppLoading } from 'expo';
import { useFonts, Poppins_400Regular, Anton_400Regular } from '@expo-google-fonts/poppins';

import Routes from './src/router';


export default function App() {
  
  let [fontLoaded] = useFonts({
    Poppins_400Regular,
    Anton_400Regular,
  });
  
  if (!fontLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      <StatusBar style="light" backgroundColor="#000" translucent={true}/>
      
      <Routes/>
    </>
  );
}
