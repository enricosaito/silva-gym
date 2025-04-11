// app/_layout.tsx (modified with new routes)
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "./context/ThemeContext";
import { AuthProvider } from "./context/AuthContext";
import AuthGuard from "./components/auth/AuthGuard";
import "../global.css";

export default function RootLayout() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <AuthGuard>
          <StatusBar style="light" />
          <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="(tabs)" />
            <Stack.Screen name="profile" />
            <Stack.Screen name="profile/edit" />
            <Stack.Screen name="profile/password" />
            <Stack.Screen name="notifications" />
            <Stack.Screen name="add-workout" options={{ presentation: "modal" }} />
            <Stack.Screen name="tracking" options={{ presentation: "modal" }} />
            <Stack.Screen name="schedule-class" options={{ presentation: "modal" }} />
            <Stack.Screen name="trainer-feedback" options={{ presentation: "modal" }} />
            <Stack.Screen name="more" />
            <Stack.Screen name="auth" />
          </Stack>
        </AuthGuard>
      </AuthProvider>
    </ThemeProvider>
  );
}
