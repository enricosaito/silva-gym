// app/components/ui/Header.tsx
import React from "react";
import { View, Text, Pressable } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useTheme } from "../../context/ThemeContext";
import { useRouter } from "expo-router";

interface HeaderProps {
  title?: string;
  logo?: React.ReactNode;
  showProfile?: boolean;
  showNotifications?: boolean;
}

export default function Header({
  title = "Silva Gym",
  logo,
  showProfile = true,
  showNotifications = true,
}: HeaderProps) {
  const { colors } = useTheme();
  const router = useRouter();

  return (
    <View className="flex-row items-center justify-between px-4 py-3 border-b border-border">
      {/* Profile Icon */}
      {showProfile ? (
        <Pressable onPress={() => router.push("/profile")} className="p-1">
          <View className="w-10 h-10 rounded-full bg-primary/20 items-center justify-center">
            <Feather name="user" size={20} color={colors.primary} />
          </View>
        </Pressable>
      ) : (
        <View className="w-10" />
      )}

      {/* Center Logo or Title */}
      <View className="flex-1 items-center">
        {logo ? (
          <View className="w-[120px] h-[40px]">{logo}</View>
        ) : (
          <Text className="text-lg font-semibold text-foreground">{title}</Text>
        )}
      </View>

      {/* Notifications Icon */}
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
