// app/add-workout.tsx
import React from "react";
import { Text, View, SafeAreaView, ScrollView, Pressable } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useTheme } from "./context/ThemeContext";
import Header from "./components/ui/Header";

export default function AddWorkoutScreen() {
  const router = useRouter();
  const { colors } = useTheme();

  return (
    <SafeAreaView className="flex-1 bg-background">
      <View className="flex-row items-center p-4 border-b border-border">
        <Pressable onPress={() => router.back()} className="p-2">
          <Feather name="arrow-left" size={24} color={colors.foreground} />
        </Pressable>
        <Text className="text-lg font-medium flex-1 text-center text-foreground mr-8">Adicionar</Text>
      </View>

      <ScrollView className="flex-1 p-4">
        <Text className="text-2xl font-bold text-foreground mb-6">O que deseja adicionar?</Text>

        {/* Add Workout Option */}
        <Pressable className="bg-card rounded-xl border border-border p-4 mb-4 flex-row items-center">
          <View className="w-12 h-12 rounded-full bg-primary items-center justify-center mr-3">
            <Feather name="activity" size={24} color="white" />
          </View>
          <View className="flex-1">
            <Text className="text-foreground font-semibold text-lg">Registrar Treino</Text>
            <Text className="text-muted-foreground">Adicione um treino realizado hoje</Text>
          </View>
          <Feather name="chevron-right" size={24} color={colors.mutedForeground} />
        </Pressable>

        {/* Add Measurement Option */}
        <Pressable className="bg-card rounded-xl border border-border p-4 mb-4 flex-row items-center">
          <View className="w-12 h-12 rounded-full bg-primary items-center justify-center mr-3">
            <Feather name="maximize-2" size={24} color="white" />
          </View>
          <View className="flex-1">
            <Text className="text-foreground font-semibold text-lg">Medidas Corporais</Text>
            <Text className="text-muted-foreground">Atualize suas medidas e fotos</Text>
          </View>
          <Feather name="chevron-right" size={24} color={colors.mutedForeground} />
        </Pressable>

        {/* Add Food Tracking Option */}
        <Pressable className="bg-card rounded-xl border border-border p-4 mb-4 flex-row items-center">
          <View className="w-12 h-12 rounded-full bg-primary items-center justify-center mr-3">
            <Feather name="coffee" size={24} color="white" />
          </View>
          <View className="flex-1">
            <Text className="text-foreground font-semibold text-lg">Registrar Refeição</Text>
            <Text className="text-muted-foreground">Acompanhe sua alimentação</Text>
          </View>
          <Feather name="chevron-right" size={24} color={colors.mutedForeground} />
        </Pressable>

        {/* Add Goal Option */}
        <Pressable className="bg-card rounded-xl border border-border p-4 mb-4 flex-row items-center">
          <View className="w-12 h-12 rounded-full bg-primary items-center justify-center mr-3">
            <Feather name="flag" size={24} color="white" />
          </View>
          <View className="flex-1">
            <Text className="text-foreground font-semibold text-lg">Nova Meta</Text>
            <Text className="text-muted-foreground">Defina objetivos para acompanhar</Text>
          </View>
          <Feather name="chevron-right" size={24} color={colors.mutedForeground} />
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}
