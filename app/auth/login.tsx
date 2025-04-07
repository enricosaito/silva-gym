import React, { useState } from "react";
import {
  Text,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useRouter } from "expo-router";
import { useAuth } from "../context/AuthContext";
import { useTheme } from "../context/ThemeContext";
import Button from "../components/ui/Button";
import FormField from "../components/ui/FormField";

export default function Login() {
  const router = useRouter();
  const { colors } = useTheme();
  const { signIn, loading } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = async () => {
    if (!email || !password) {
      setErrorMessage("Por favor, preencha todos os campos.");
      return;
    }

    try {
      const { error } = await signIn(email, password);

      if (error) {
        setErrorMessage(error.message || "Erro ao fazer login. Tente novamente.");
      } else {
        router.replace("/(tabs)");
      }
    } catch (error: any) {
      setErrorMessage(error.message || "Ocorreu um erro inesperado. Tente novamente.");
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : undefined} style={{ flex: 1 }}>
        <ScrollView
          contentContainerStyle={{ paddingHorizontal: 24, paddingVertical: 32 }}
          keyboardShouldPersistTaps="handled"
        >
          {/* Logo */}
          <View className="items-center mb-10">
            <Image
              source={require("../../assets/images/Logo-Laranja.webp")}
              style={{ width: 200, height: 70, resizeMode: "contain" }}
            />
          </View>

          {/* Title */}
          <View className="mb-8">
            <Text className="text-3xl font-bold text-foreground mb-1">Login</Text>
            <Text className="text-muted-foreground">Entre com sua conta para continuar</Text>
          </View>

          {/* Error Message */}
          {errorMessage ? (
            <View className="mb-5 bg-red-500/10 p-3 rounded-lg border border-red-500/30">
              <Text className="text-red-500">{errorMessage}</Text>
            </View>
          ) : null}

          {/* Form Fields */}
          <View className="gap-4 mb-6">
            <FormField
              label="Email"
              value={email}
              onChangeText={setEmail}
              placeholder="seu@email.com"
              keyboardType="email-address"
              autoCapitalize="none"
            />
            <FormField
              label="Senha"
              value={password}
              onChangeText={setPassword}
              placeholder="Sua senha"
              secureTextEntry
            />
          </View>

          {/* Login Button */}
          <Button className="mb-4" onPress={handleLogin} disabled={loading}>
            {loading ? <ActivityIndicator size="small" color="white" /> : "Entrar"}
          </Button>

          {/* Forgot Password */}
          <TouchableOpacity className="mb-8" onPress={() => router.push("/auth/forgot-password")}>
            <Text className="text-primary text-center font-medium">Esqueci minha senha</Text>
          </TouchableOpacity>

          {/* Register Link */}
          <View className="flex-row justify-center items-center">
            <Text className="text-muted-foreground">Não tem uma conta? </Text>
            <TouchableOpacity onPress={() => router.push("/auth/register")}>
              <Text className="text-primary font-medium">Registre-se</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
