// app/(tabs)/index.tsx
import React from "react";
import { Text, View, SafeAreaView, ScrollView, Pressable, Image } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useTheme } from "../context/ThemeContext";
import { useAuth } from "../context/AuthContext";
import Header from "../components/ui/Header";

export default function HomeScreen() {
  const router = useRouter();
  const { colors } = useTheme();
  const { userProfile, user } = useAuth();

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

      <ScrollView className="flex-1">
        <View className="px-4 py-4">
          <Text className="text-2xl font-bold text-foreground mb-1">
            Olá, {userProfile?.full_name?.split(" ")[0] || user?.user_metadata?.name || "Atleta"}!
          </Text>
          <Text className="text-muted-foreground mb-6">Bem-vindo ao seu dashboard de treino</Text>

          {/* Next Scheduled Workout */}
          <View className="bg-primary/10 rounded-xl border border-primary/20 p-4 mb-6">
            <View className="flex-row justify-between items-center mb-3">
              <Text className="text-lg font-bold text-primary">Próximo Treino</Text>
              <Text className="text-primary font-medium">Hoje, 18:00</Text>
            </View>
            <View className="flex-row items-center">
              <View className="w-12 h-12 rounded-full bg-primary items-center justify-center mr-3">
                <Feather name="target" size={24} color="white" />
              </View>
              <View className="flex-1">
                <Text className="text-foreground font-semibold text-lg">Treino A - Peito e Tríceps</Text>
                <Text className="text-muted-foreground">6 exercícios · 45 min</Text>
              </View>
              <Pressable className="bg-primary py-2 px-4 rounded-lg" onPress={() => router.push("/workouts")}>
                <Text className="text-white font-medium">Iniciar</Text>
              </Pressable>
            </View>
          </View>

          {/* Weekly Progress */}
          <Text className="text-xl font-bold text-foreground mb-4">Progresso Semanal</Text>
          <View className="bg-card rounded-xl border border-border p-4 mb-6">
            <View className="flex-row justify-between items-center mb-4">
              <Text className="text-foreground font-medium">Treinos Realizados</Text>
              <Text className="text-primary font-bold">4/5</Text>
            </View>
            <View className="h-2 bg-muted rounded-full overflow-hidden mb-4">
              <View className="h-full bg-primary rounded-full" style={{ width: "80%" }} />
            </View>

            <View className="flex-row justify-between">
              <View className="items-center">
                <View className="h-8 w-8 rounded-full bg-primary/10 items-center justify-center mb-1">
                  <Feather name="check" size={16} color={colors.primary} />
                </View>
                <Text className="text-xs text-muted-foreground">Seg</Text>
              </View>
              <View className="items-center">
                <View className="h-8 w-8 rounded-full bg-primary/10 items-center justify-center mb-1">
                  <Feather name="check" size={16} color={colors.primary} />
                </View>
                <Text className="text-xs text-muted-foreground">Ter</Text>
              </View>
              <View className="items-center">
                <View className="h-8 w-8 rounded-full bg-primary/10 items-center justify-center mb-1">
                  <Feather name="x" size={16} color={colors.mutedForeground} />
                </View>
                <Text className="text-xs text-muted-foreground">Qua</Text>
              </View>
              <View className="items-center">
                <View className="h-8 w-8 rounded-full bg-primary/10 items-center justify-center mb-1">
                  <Feather name="check" size={16} color={colors.primary} />
                </View>
                <Text className="text-xs text-muted-foreground">Qui</Text>
              </View>
              <View className="items-center">
                <View className="h-8 w-8 rounded-full bg-primary/10 items-center justify-center mb-1">
                  <Feather name="check" size={16} color={colors.primary} />
                </View>
                <Text className="text-xs text-muted-foreground">Sex</Text>
              </View>
              <View className="items-center">
                <View className="h-8 w-8 rounded-full bg-muted items-center justify-center mb-1">
                  <Text className="text-xs text-muted-foreground">-</Text>
                </View>
                <Text className="text-xs text-muted-foreground">Sáb</Text>
              </View>
              <View className="items-center">
                <View className="h-8 w-8 rounded-full bg-muted items-center justify-center mb-1">
                  <Text className="text-xs text-muted-foreground">-</Text>
                </View>
                <Text className="text-xs text-muted-foreground">Dom</Text>
              </View>
            </View>
          </View>

          {/* Class Recommendations */}
          <Text className="text-xl font-bold text-foreground mb-4">Aulas Recomendadas</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mb-6">
            <Pressable className="mr-4 w-64 bg-card rounded-xl border border-border overflow-hidden">
              <View className="h-24 bg-primary/10 items-center justify-center">
                <Feather name="image" size={36} color={colors.mutedForeground} />
              </View>
              <View className="p-3">
                <Text className="text-lg font-medium text-foreground mb-1">Boxe Funcional</Text>
                <View className="flex-row justify-between">
                  <Text className="text-muted-foreground">Amanhã, 19:00</Text>
                  <Text className="text-primary">35 min</Text>
                </View>
              </View>
            </Pressable>

            <Pressable className="mr-4 w-64 bg-card rounded-xl border border-border overflow-hidden">
              <View className="h-24 bg-primary/10 items-center justify-center">
                <Feather name="image" size={36} color={colors.mutedForeground} />
              </View>
              <View className="p-3">
                <Text className="text-lg font-medium text-foreground mb-1">CrossTraining</Text>
                <View className="flex-row justify-between">
                  <Text className="text-muted-foreground">Quarta, 18:30</Text>
                  <Text className="text-primary">50 min</Text>
                </View>
              </View>
            </Pressable>

            <Pressable className="w-64 bg-card rounded-xl border border-border overflow-hidden">
              <View className="h-24 bg-primary/10 items-center justify-center">
                <Feather name="image" size={36} color={colors.mutedForeground} />
              </View>
              <View className="p-3">
                <Text className="text-lg font-medium text-foreground mb-1">Spinning</Text>
                <View className="flex-row justify-between">
                  <Text className="text-muted-foreground">Quinta, 20:00</Text>
                  <Text className="text-primary">45 min</Text>
                </View>
              </View>
            </Pressable>
          </ScrollView>

          {/* Gym Announcements */}
          <Text className="text-xl font-bold text-foreground mb-4">Avisos da Academia</Text>
          <View className="bg-accent rounded-xl p-6 mb-6">
            <Text className="text-lg font-semibold text-accent-foreground mb-2">Horário Especial</Text>
            <Text className="text-accent-foreground mb-4">
              No próximo feriado (12/06) estaremos abertos em horário especial: 8h às 14h.
            </Text>
            <Pressable className="bg-accent-foreground/20 py-2 rounded-lg">
              <Text className="text-center text-accent-foreground font-medium">Ver Mais</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
