import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import HomeScreens from "./screens/HomeScreens";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MapScreen from "./screens/MapScreen.js";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <Stack.Navigator>
            <Stack.Screen name="HomeScreen" component={HomeScreens}
            options={{
              headerShown: false,
            }} 
            />
            <Stack.Screen name="MapScreen" component={MapScreen}
            options={{
              headerShown: false,
            }} 
            />
          </Stack.Navigator>
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
}

