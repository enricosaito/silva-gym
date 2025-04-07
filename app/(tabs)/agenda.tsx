// app/(tabs)/agenda.tsx
import React from "react";
import { Text, View, Image, SafeAreaView, ScrollView } from "react-native";
import { useTheme } from "../context/ThemeContext";
import Header from "../components/ui/Header";

export default function AgendaScreen() {
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
        <Text className="text-2xl font-bold text-foreground mb-6">Aulas e Reservas</Text>

        {/* Placeholder content - we'll fill this in later */}
        <View className="bg-card rounded-xl border border-border p-6 items-center">
          <Text className="text-lg font-medium mb-2 text-center text-foreground">Agenda de aulas em breve</Text>
          <Text className="text-muted-foreground text-center">
            Reserve aulas e sessões de treino com nossos instrutores
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
