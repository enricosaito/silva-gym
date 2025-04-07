// app/examples/GymHomeExample.tsx
import React from "react";
import { View, Text, ScrollView, Pressable, Image } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useTheme } from "../context/ThemeContext";
import GymHeader from "../components/GymHeader";

const GymHomeExample = () => {
  const { colors } = useTheme();

  return (
    <View className="flex-1 bg-background">
      <GymHeader />

      <ScrollView className="flex-1 p-4">
        {/* Hero Section */}
        <View className="bg-secondary rounded-xl overflow-hidden mb-6">
          <View className="p-6">
            <Text className="text-2xl font-bold text-primary mb-2">Comece seu treino</Text>
            <Text className="text-secondary-foreground mb-4">Acompanhe seus treinos e nutrição em um só lugar.</Text>
            <Pressable className="bg-primary py-3 rounded-lg items-center">
              <Text className="text-white font-semibold">Iniciar Treino</Text>
            </Pressable>
          </View>
        </View>

        {/* Quick Stats */}
        <View className="flex-row justify-between mb-6">
          <View className="bg-card rounded-xl p-4 w-[48%] border border-border">
            <View className="w-10 h-10 rounded-full bg-primary/10 items-center justify-center mb-2">
              <Feather name="activity" size={20} color={colors.primary} />
            </View>
            <Text className="text-foreground font-bold text-xl">3,280</Text>
            <Text className="text-muted-foreground">Calorias Hoje</Text>
          </View>

          <View className="bg-card rounded-xl p-4 w-[48%] border border-border">
            <View className="w-10 h-10 rounded-full bg-primary/10 items-center justify-center mb-2">
              <Feather name="trending-up" size={20} color={colors.primary} />
            </View>
            <Text className="text-foreground font-bold text-xl">7</Text>
            <Text className="text-muted-foreground">Treinos Semana</Text>
          </View>
        </View>

        {/* Today's Workout */}
        <Text className="text-xl font-bold text-foreground mb-3">Treino de Hoje</Text>
        <View className="bg-card rounded-xl border border-border p-4 mb-6">
          <View className="flex-row items-center justify-between mb-4">
            <View className="flex-row items-center">
              <View className="w-12 h-12 rounded-full bg-primary items-center justify-center mr-3">
                <Feather name="target" size={24} color="white" />
              </View>
              <View>
                <Text className="text-foreground font-semibold text-lg">Treino A - Peito</Text>
                <Text className="text-muted-foreground">6 exercícios · 45 min</Text>
              </View>
            </View>
            <Feather name="chevron-right" size={24} color={colors.primary} />
          </View>

          <View className="pt-3 border-t border-border">
            <View className="flex-row items-center justify-between mb-3">
              <Text className="text-foreground font-medium">Supino Reto</Text>
              <Text className="text-muted-foreground">4 x 12</Text>
            </View>
            <View className="flex-row items-center justify-between mb-3">
              <Text className="text-foreground font-medium">Crucifixo</Text>
              <Text className="text-muted-foreground">3 x 15</Text>
            </View>
            <View className="flex-row items-center justify-between">
              <Text className="text-foreground font-medium">Supino Inclinado</Text>
              <Text className="text-muted-foreground">4 x 10</Text>
            </View>
          </View>
        </View>

        {/* Nutrition Summary */}
        <Text className="text-xl font-bold text-foreground mb-3">Nutrição</Text>
        <View className="bg-card rounded-xl border border-border p-4 mb-6">
          <View className="flex-row justify-between mb-4">
            <View>
              <Text className="text-foreground font-semibold">Hoje</Text>
              <Text className="text-primary font-bold text-2xl">2,180</Text>
              <Text className="text-muted-foreground">de 2,500 kcal</Text>
            </View>

            <View className="w-16 h-16 rounded-full border-4 border-primary items-center justify-center">
              <Text className="text-foreground font-bold">87%</Text>
            </View>
          </View>

          <View className="flex-row justify-between pt-3 border-t border-border">
            <View className="items-center">
              <Text className="text-muted-foreground mb-1">Proteínas</Text>
              <Text className="text-foreground font-semibold">145g</Text>
              <Text className="text-primary text-xs">32%</Text>
            </View>
            <View className="items-center">
              <Text className="text-muted-foreground mb-1">Carbos</Text>
              <Text className="text-foreground font-semibold">220g</Text>
              <Text className="text-amber-500 text-xs">48%</Text>
            </View>
            <View className="items-center">
              <Text className="text-muted-foreground mb-1">Gorduras</Text>
              <Text className="text-foreground font-semibold">72g</Text>
              <Text className="text-rose-500 text-xs">20%</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default GymHomeExample;
