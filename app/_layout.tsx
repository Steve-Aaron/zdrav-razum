import { Stack } from 'expo-router';
import { View, StyleSheet, ScrollView, Platform } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Colors } from '../src/constants/Colors';
import Navbar from '../src/components/Navbar';
import Footer from '../src/components/Footer';
import { useState, useEffect, createContext, useContext } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts as useOutfitFonts, Outfit_400Regular, Outfit_700Bold, Outfit_900Black } from '@expo-google-fonts/outfit';
import { useFonts as useInterFonts, Inter_400Regular, Inter_700Bold } from '@expo-google-fonts/inter';

// Prevent splash screen from auto-hiding
SplashScreen.preventAutoHideAsync();

interface ThemeContextType {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  toggleTheme: () => {},
});

export default function RootLayout() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const [outfitLoaded] = useOutfitFonts({
    Outfit_400Regular,
    Outfit_700Bold,
    Outfit_900Black,
  });

  const [interLoaded] = useInterFonts({
    Inter_400Regular,
    Inter_700Bold,
  });

  const fontsLoaded = outfitLoaded && interLoaded;

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  const currentColors = Colors[theme];

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <View style={[styles.container, { backgroundColor: currentColors.background }]}>
          {/* Notepad Dot Pattern Overlay for Web */}
          {Platform.OS === 'web' && (
            <View 
              style={[
                StyleSheet.absoluteFill, 
                { 
                  // backgroundImage: `radial-gradient(${currentColors.dots} 1px, transparent 1px)`,
                  // backgroundSize: '24px 24px',
                  pointerEvents: 'none',
                } as any
              ]} 
            />
          )}
          
          <Navbar theme={theme} toggleTheme={toggleTheme} />
          
          <ScrollView contentContainerStyle={styles.scrollContent}>
            <View style={styles.main}>
              <Stack screenOptions={{ headerShown: false, contentStyle: { backgroundColor: 'transparent' } }}>
                <Stack.Screen name="index" />
                <Stack.Screen name="about" />
                <Stack.Screen name="surveys" />
                <Stack.Screen name="results" />
                <Stack.Screen name="contact" />
              </Stack>
            </View>
            <Footer theme={theme} />
          </ScrollView>
          
          <StatusBar style={theme === 'light' ? 'dark' : 'light'} />
        </View>
      </GestureHandlerRootView>
    </ThemeContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  main: {
    flex: 1,
    minHeight: 800, // Ensure stack has enough room to render
  },
  scrollContent: {
    flexGrow: 1,
  },
});
