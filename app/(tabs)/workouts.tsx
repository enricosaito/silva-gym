// app/(tabs)/workouts.tsx
import React from "react";
import { Text, View, Image, SafeAreaView, ScrollView, Pressable } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useTheme } from "../context/ThemeContext";
import Header from "../components/ui/Header";

export default function WorkoutsScreen() {
  const { colors } = useTheme();

  return (
    <SafeAreaView className="flex-1 bg-background">
      <Header
        logo={
          <Image
            source={require("../../assets/images/Logo-Laranja.webp")}
            style={{ width: 120, height: 40, resizeMode: "contain" }}
          />
        }
      />

      <ScrollView className="flex-1 p-4">
        <Text className="text-2xl font-bold text-foreground mb-6">Planos de Treino</Text>

        {/* Placeholder workout plan */}
        <View className="bg-card rounded-xl border border-border p-4 mb-4">
          <View className="flex-row items-center mb-3">
            <View className="w-12 h-12 rounded-full bg-primary items-center justify-center mr-3">
              <Feather name="target" size={24} color="white" />
            </View>
            <View className="flex-1">
              <Text className="text-foreground font-semibold text-lg">Treino A - Peito e Tríceps</Text>
              <Text className="text-muted-foreground">6 exercícios · 45 min</Text>
            </View>
            <Feather name="chevron-right" size={24} color={colors.primary} />
          </View>
        </View>

        {/* Add more placeholder workouts */}
        <View className="bg-card rounded-xl border border-border p-4 mb-4">
          <View className="flex-row items-center mb-3">
            <View className="w-12 h-12 rounded-full bg-primary items-center justify-center mr-3">
              <Feather name="target" size={24} color="white" />
            </View>
            <View className="flex-1">
              <Text className="text-foreground font-semibold text-lg">Treino B - Costas e Bíceps</Text>
              <Text className="text-muted-foreground">5 exercícios · 40 min</Text>
            </View>
            <Feather name="chevron-right" size={24} color={colors.primary} />
          </View>
        </View>

        <View className="bg-card rounded-xl border border-border p-4 mb-6">
          <View className="flex-row items-center mb-3">
            <View className="w-12 h-12 rounded-full bg-primary items-center justify-center mr-3">
              <Feather name="target" size={24} color="white" />
            </View>
            <View className="flex-1">
              <Text className="text-foreground font-semibold text-lg">Treino C - Pernas</Text>
              <Text className="text-muted-foreground">7 exercícios · 50 min</Text>
            </View>
            <Feather name="chevron-right" size={24} color={colors.primary} />
          </View>
        </View>

        <Text className="text-xl font-bold text-foreground mb-4">Histórico de Treinos</Text>

        {/* Placeholder history */}
        <View className="bg-card rounded-xl border border-border p-4 mb-4">
          <View className="flex-row justify-between items-center mb-2">
            <Text className="text-foreground font-medium">Treino A - Peito e Tríceps</Text>
            <Text className="text-muted-foreground text-sm">Ontem</Text>
          </View>
          <Text className="text-muted-foreground">Duração: 45 minutos · Completado</Text>
        </View>

        <View className="bg-card rounded-xl border border-border p-4 mb-4">
          <View className="flex-row justify-between items-center mb-2">
            <Text className="text-foreground font-medium">Treino B - Costas e Bíceps</Text>
            <Text className="text-muted-foreground text-sm">2 dias atrás</Text>
          </View>
          <Text className="text-muted-foreground">Duração: 50 minutos · Completado</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
