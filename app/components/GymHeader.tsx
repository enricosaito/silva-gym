// app/components/GymHeader.tsx
import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useTheme } from "../context/ThemeContext";
import { useRouter } from "expo-router";

interface GymHeaderProps {
  title?: string;
  showProfile?: boolean;
  showNotifications?: boolean;
}

export default function GymHeader({
  title = "Silva Gym",
  showProfile = true,
  showNotifications = true,
}: GymHeaderProps) {
  const { colors } = useTheme();
  const router = useRouter();

  return (
    <View className="flex-row items-center justify-between px-4 py-3 border-b border-border bg-card">
      {showProfile ? (
        <Pressable onPress={() => router.push("/profile")} className="p-1">
          <View className="w-10 h-10 rounded-full bg-primary/20 items-center justify-center">
            <Feather name="user" size={20} color={colors.primary} />
          </View>
        </Pressable>
      ) : (
        <View className="w-10" />
      )}

      <View className="flex-row items-center">
        <Text className="text-xl font-bold text-foreground">{title}</Text>
        <Text className="text-xl font-bold text-primary">Gym</Text>
      </View>

      {showNotifications ? (
        <Pressable onPress={() => router.push("/notifications")} className="p-2">
          <Feather name="bell" size={22} color={colors.primary} />
        </Pressable>
      ) : (
        <View className="w-10" />
      )}
    </View>
  );
}
