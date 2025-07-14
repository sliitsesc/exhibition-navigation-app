import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { colors } from "@/constants/colors";
import React from "react";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const queryClient = new QueryClient();

function RootLayoutNav() {
  return (
    <Stack 
      screenOptions={{ 
        headerBackTitle: "Back",
        headerStyle: {
          backgroundColor: colors.background,
        },
        headerTintColor: colors.text,
        headerShadowVisible: false,
        contentStyle: {
          backgroundColor: colors.background,
        }
      }}
    >
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="event/[id]" options={{ headerShown: false }} />
      <Stack.Screen name="location/[id]" options={{ headerShown: false }} />
      <Stack.Screen name="game/[id]" options={{ headerShown: false }} />
      <Stack.Screen 
        name="events/live" 
        options={{ 
          title: "Live Events",
          presentation: "card"
        }} 
      />
      <Stack.Screen 
        name="events/all" 
        options={{ 
          title: "All Events",
          presentation: "card"
        }} 
      />
      <Stack.Screen 
        name="locations/all" 
        options={{ 
          title: "All Locations",
          presentation: "card"
        }} 
      />
      <Stack.Screen 
        name="games/all" 
        options={{ 
          title: "All Games",
          presentation: "card"
        }} 
      />
      <Stack.Screen 
        name="games/new" 
        options={{ 
          title: "New Games",
          presentation: "card"
        }} 
      />
      <Stack.Screen 
        name="games/popular" 
        options={{ 
          title: "Popular Games",
          presentation: "card"
        }} 
      />
    </Stack>
  );
}

export default function RootLayout() {
  useEffect(() => {
    SplashScreen.hideAsync();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <StatusBar style="light" />
        <RootLayoutNav />
      </GestureHandlerRootView>
    </QueryClientProvider>
  );
}