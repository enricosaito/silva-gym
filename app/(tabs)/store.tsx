// app/(tabs)/store.tsx
import React from "react";
import { Text, View, SafeAreaView, ScrollView, Pressable, Image } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useTheme } from "../context/ThemeContext";
import Header from "../components/ui/Header";

export default function StoreScreen() {
  const { colors } = useTheme();

  return (
    <SafeAreaView className="flex-1 bg-background">
      <Header title="Loja" />

      <ScrollView className="flex-1 p-4">
        <Text className="text-2xl font-bold text-foreground mb-6">Produtos Premium</Text>

        {/* Categories */}
        <View className="flex-row justify-between mb-6">
          <Pressable className="items-center">
            <View className="h-16 w-16 rounded-full bg-primary/10 items-center justify-center mb-2">
              <Feather name="package" size={22} color={colors.primary} />
            </View>
            <Text className="text-foreground text-sm">Suplementos</Text>
          </Pressable>

          <Pressable className="items-center">
            <View className="h-16 w-16 rounded-full bg-primary/10 items-center justify-center mb-2">
              <Feather name="shopping-bag" size={22} color={colors.primary} />
            </View>
            <Text className="text-foreground text-sm">Vestuário</Text>
          </Pressable>

          <Pressable className="items-center">
            <View className="h-16 w-16 rounded-full bg-primary/10 items-center justify-center mb-2">
              <Feather name="target" size={22} color={colors.primary} />
            </View>
            <Text className="text-foreground text-sm">Equipamentos</Text>
          </Pressable>

          <Pressable className="items-center">
            <View className="h-16 w-16 rounded-full bg-primary/10 items-center justify-center mb-2">
              <Feather name="tag" size={22} color={colors.primary} />
            </View>
            <Text className="text-foreground text-sm">Ofertas</Text>
          </Pressable>
        </View>

        {/* Products */}
        <Text className="text-xl font-bold text-foreground mb-4">Mais Vendidos</Text>

        {/* Product 1 */}
        <Pressable className="bg-card rounded-xl border border-border mb-4 overflow-hidden">
          <View className="h-32 bg-primary/10 items-center justify-center">
            <Feather name="image" size={36} color={colors.mutedForeground} />
          </View>
          <View className="p-4">
            <Text className="text-lg font-medium text-foreground mb-1">Whey Protein 900g</Text>
            <Text className="text-muted-foreground mb-2">Proteína de alta qualidade para recuperação muscular</Text>
            <View className="flex-row justify-between items-center">
              <Text className="text-xl font-bold text-foreground">R$ 129,90</Text>
              <Pressable className="bg-primary py-2 px-4 rounded-lg">
                <Text className="text-white font-medium">Comprar</Text>
              </Pressable>
            </View>
          </View>
        </Pressable>

        {/* Product 2 */}
        <Pressable className="bg-card rounded-xl border border-border mb-4 overflow-hidden">
          <View className="h-32 bg-primary/10 items-center justify-center">
            <Feather name="image" size={36} color={colors.mutedForeground} />
          </View>
          <View className="p-4">
            <Text className="text-lg font-medium text-foreground mb-1">Camiseta Dry-Fit</Text>
            <Text className="text-muted-foreground mb-2">Camiseta performance com tecnologia de secagem rápida</Text>
            <View className="flex-row justify-between items-center">
              <Text className="text-xl font-bold text-foreground">R$ 79,90</Text>
              <Pressable className="bg-primary py-2 px-4 rounded-lg">
                <Text className="text-white font-medium">Comprar</Text>
              </Pressable>
            </View>
          </View>
        </Pressable>

        {/* Product 3 */}
        <Pressable className="bg-card rounded-xl border border-border mb-6 overflow-hidden">
          <View className="h-32 bg-primary/10 items-center justify-center">
            <Feather name="image" size={36} color={colors.mutedForeground} />
          </View>
          <View className="p-4">
            <Text className="text-lg font-medium text-foreground mb-1">Luvas de Treino</Text>
            <Text className="text-muted-foreground mb-2">Luvas anatômicas para proteção das mãos durante o treino</Text>
            <View className="flex-row justify-between items-center">
              <Text className="text-xl font-bold text-foreground">R$ 49,90</Text>
              <Pressable className="bg-primary py-2 px-4 rounded-lg">
                <Text className="text-white font-medium">Comprar</Text>
              </Pressable>
            </View>
          </View>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}
