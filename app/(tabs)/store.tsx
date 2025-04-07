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
      <Header
        logo={
          <Image
            source={require("../../assets/images/LogoWhite.png")}
            style={{ width: 120, height: 40, resizeMode: "contain" }}
          />
        }
      />

      <ScrollView className="flex-1 p-4">
        <Text className="text-2xl font-bold text-foreground mb-6">Produtos Silva Nutrition</Text>

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
            <Text className="text-foreground text-sm">Roupas</Text>
          </Pressable>

          <Pressable className="items-center">
            <View className="h-16 w-16 rounded-full bg-primary/10 items-center justify-center mb-2">
              <Feather name="target" size={22} color={colors.primary} />
            </View>
            <Text className="text-foreground text-sm">Acessórios</Text>
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
            <Image
              source={require("../../assets/images/Whey100.webp")}
              style={{ width: "100%", height: "100%", resizeMode: "cover" }}
            />
          </View>
          <View className="p-4">
            <Text className="text-lg font-medium text-foreground mb-1">Whey Protein 900g</Text>
            <Text className="text-muted-foreground mb-2">Proteína de alta qualidade para recuperação muscular</Text>
            <View className="flex-row justify-between items-center">
              <Text className="text-xl font-bold text-foreground">R$ 269,00</Text>
              <Pressable className="bg-primary py-2 px-4 rounded-lg">
                <Text className="text-white font-medium">Comprar</Text>
              </Pressable>
            </View>
          </View>
        </Pressable>

        {/* Product 2 */}
        <Pressable className="bg-card rounded-xl border border-border mb-4 overflow-hidden">
          <View className="h-32 bg-primary/10 items-center justify-center">
            <Image
              source={require("../../assets/images/silvers.jpg")}
              style={{ width: "100%", height: "100%", resizeMode: "cover" }}
            />
          </View>
          <View className="p-4">
            <Text className="text-lg font-medium text-foreground mb-1">T-Shirt Silvers</Text>
            <Text className="text-muted-foreground mb-2">Camiseta estampada tamanhos P até GG</Text>
            <View className="flex-row justify-between items-center">
              <Text className="text-xl font-bold text-foreground">R$ 119,00</Text>
              <Pressable className="bg-primary py-2 px-4 rounded-lg">
                <Text className="text-white font-medium">Comprar</Text>
              </Pressable>
            </View>
          </View>
        </Pressable>

        {/* Product 3 */}
        <Pressable className="bg-card rounded-xl border border-border mb-6 overflow-hidden">
          <View className="h-32 bg-primary/10 items-center justify-center">
            <Image
              source={require("../../assets/images/ComboCreaPunch.jpg")}
              style={{ width: "100%", height: "100%", resizeMode: "cover" }}
            />
          </View>
          <View className="p-4">
            <Text className="text-lg font-medium text-foreground mb-1">Combo Creatina + Punch</Text>
            <Text className="text-muted-foreground mb-2">
              Sabores de Pré-Treino: Peach Mango, Red Fruit, Lemon Ice, Raspberry Candy
            </Text>
            <View className="flex-row justify-between items-center">
              <Text className="text-xl font-bold text-foreground">R$ 318,00</Text>
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
