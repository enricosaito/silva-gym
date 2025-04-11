// app/trainer-feedback.tsx
import React, { useState, useEffect } from "react";
import { Text, View, SafeAreaView, ScrollView, TextInput, Pressable, Alert, Image } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useTheme } from "./context/ThemeContext";
import Header from "./components/ui/Header";
import Button from "./components/ui/Button";

// Sample trainer data
const TRAINERS = [
  {
    id: "1",
    name: "Felipe Brandão",
    specialization: "Professor",
    image: null,
  },
  {
    id: "2",
    name: "André Miranda",
    specialization: "Professor",
    image: null,
  },
  {
    id: "3",
    name: "Vitor Barbosa",
    specialization: "Sênior",
    image: null,
  },
  {
    id: "4",
    name: "José Vieira (Zé)",
    specialization: "Estagiário",
    image: null,
  },
  {
    id: "5",
    name: "Lavínia Viana",
    specialization: "Estagiário",
    image: null,
  },
];

// Feedback categories
const CATEGORIES = ["Atendimento, atenção com alunos", "Conhecimento técnico, qualidade do treino"];

export default function TrainerFeedbackScreen() {
  const router = useRouter();
  const { colors } = useTheme();

  // States for the feedback form
  const [selectedTrainer, setSelectedTrainer] = useState<string | null>(null);
  const [rating, setRating] = useState<number>(0);
  const [categoryRatings, setCategoryRatings] = useState<Record<string, number>>(
    CATEGORIES.reduce((acc, category) => ({ ...acc, [category]: 0 }), {})
  );
  const [comment, setComment] = useState<string>("");

  // Handle rating change for a specific category
  const handleCategoryRating = (category: string, value: number) => {
    setCategoryRatings((prev) => ({
      ...prev,
      [category]: value,
    }));

    // Calculate new overall rating
    updateAverageRating({ ...categoryRatings, [category]: value });
  };

  // Calculate and update the average rating
  const updateAverageRating = (ratings: Record<string, number>) => {
    const values = Object.values(ratings);
    const nonZeroValues = values.filter((value) => value > 0);

    if (nonZeroValues.length === 0) {
      setRating(0);
      return;
    }

    const sum = nonZeroValues.reduce((acc, val) => acc + val, 0);
    const avg = sum / nonZeroValues.length;
    // Round to nearest 0.5
    const roundedAvg = Math.round(avg * 2) / 2;
    setRating(roundedAvg);
  };

  // Handle form submission
  const handleSubmitFeedback = () => {
    if (!selectedTrainer) {
      Alert.alert("Erro", "Por favor selecione um treinador.");
      return;
    }

    if (rating === 0) {
      Alert.alert("Erro", "Por favor avalie pelo menos uma categoria.");
      return;
    }

    // In a real app, you would submit this data to your API
    const feedbackData = {
      trainerId: selectedTrainer,
      rating,
      categoryRatings,
      comment,
      timestamp: new Date().toISOString(),
    };

    console.log("Feedback data:", feedbackData);

    Alert.alert("Feedback Enviado", "Obrigado por compartilhar sua avaliação!", [
      {
        text: "OK",
        onPress: () => router.back(),
      },
    ]);
  };

  // Get trainer by ID
  const getTrainerById = (id: string) => {
    return TRAINERS.find((trainer) => trainer.id === id);
  };

  // Format rating to display with decimal if needed
  const formatRating = (value: number) => {
    return value % 1 === 0 ? value.toString() : value.toFixed(1);
  };

  // Render stars for the overall rating (supports half stars)
  const renderStars = (value: number) => {
    const stars = [];
    const fullStars = Math.floor(value);
    const hasHalfStar = value % 1 !== 0;

    // Add full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(<Feather key={`full-${i}`} name="star" size={28} color={colors.primary} />);
    }

    // Add half star if needed
    if (hasHalfStar) {
      stars.push(
        // Using star for now, but you could create a custom half-star icon
        <View key="half" style={{ position: "relative" }}>
          <Feather name="star" size={28} color={colors.border} />
          <View style={{ position: "absolute", width: "50%", height: "100%", overflow: "hidden" }}>
            <Feather name="star" size={28} color={colors.primary} />
          </View>
        </View>
      );
    }

    // Add empty stars
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Feather key={`empty-${i}`} name="star" size={28} color={colors.border} />);
    }

    return stars;
  };

  return (
    <SafeAreaView className="flex-1 bg-background">
      <Header title="Avaliar Treinador" showNotifications={false} />

      <ScrollView className="flex-1 px-4">
        <View className="py-6">
          {/* Trainer selector */}
          <Text className="text-xl font-bold text-foreground mb-4">Selecione o Treinador</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mb-6">
            {TRAINERS.map((trainer) => (
              <Pressable
                key={trainer.id}
                className={`w-24 rounded-xl mr-3 items-center px-2 py-4 border ${
                  selectedTrainer === trainer.id ? "border-primary bg-primary/10" : "border-border bg-card"
                }`}
                onPress={() => setSelectedTrainer(trainer.id)}
              >
                <View
                  className={`w-14 h-14 rounded-full mb-2 items-center justify-center ${
                    selectedTrainer === trainer.id ? "bg-primary" : "bg-muted"
                  }`}
                >
                  {trainer.image ? (
                    <Image source={trainer.image} className="w-14 h-14 rounded-full" />
                  ) : (
                    <Feather
                      name="user"
                      size={24}
                      color={selectedTrainer === trainer.id ? "white" : colors.mutedForeground}
                    />
                  )}
                </View>
                <Text
                  className={`text-center text-sm font-medium ${
                    selectedTrainer === trainer.id ? "text-primary" : "text-foreground"
                  }`}
                >
                  {trainer.name}
                </Text>
                <Text className="text-center text-xs text-muted-foreground mt-1">{trainer.specialization}</Text>
              </Pressable>
            ))}
          </ScrollView>

          {/* Display selected trainer */}
          {selectedTrainer && (
            <View className="bg-card rounded-xl border border-border p-4 mb-6">
              <View className="flex-row items-center">
                <View className="w-16 h-16 rounded-full bg-primary/20 items-center justify-center mr-4">
                  <Feather name="user" size={28} color={colors.primary} />
                </View>
                <View className="flex-1">
                  <Text className="text-lg font-bold text-foreground">{getTrainerById(selectedTrainer)?.name}</Text>
                  <Text className="text-muted-foreground">{getTrainerById(selectedTrainer)?.specialization}</Text>
                </View>
              </View>
            </View>
          )}

          {/* Rating categories */}
          <Text className="text-xl font-bold text-foreground mb-4">Avaliação</Text>
          <View className="mb-6">
            {CATEGORIES.map((category, index) => (
              <View key={index} className="mb-4">
                <View className="flex-row justify-between items-center mb-2">
                  <Text className="text-foreground font-medium">{category}</Text>
                  <Text className="text-muted-foreground">
                    {categoryRatings[category] > 0 ? `${categoryRatings[category]}/5` : ""}
                  </Text>
                </View>
                <View className="flex-row">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Pressable
                      key={star}
                      className="flex-1 items-center"
                      onPress={() => handleCategoryRating(category, star)}
                    >
                      <Feather
                        name={categoryRatings[category] >= star ? "star" : "star"}
                        size={24}
                        color={categoryRatings[category] >= star ? colors.primary : colors.border}
                      />
                    </Pressable>
                  ))}
                </View>
              </View>
            ))}
          </View>

          {/* Overall rating display */}
          <View className="flex-row items-center justify-center mb-6 pb-6 border-b border-border">
            <Text className="text-lg font-bold text-foreground mr-3">Avaliação Geral:</Text>
            <View className="flex-row">{renderStars(rating)}</View>
            <Text className="text-foreground font-bold text-lg ml-3">{rating > 0 ? formatRating(rating) : "-"}/5</Text>
          </View>

          {/* Comments */}
          <Text className="text-xl font-bold text-foreground mb-4">Comentários (opcional)</Text>
          <View className="mb-6">
            <TextInput
              className="border border-border rounded-xl p-4 min-h-32 text-foreground bg-card"
              multiline
              placeholder="Compartilhe sua experiência com este treinador..."
              placeholderTextColor={colors.mutedForeground}
              value={comment}
              onChangeText={setComment}
              textAlignVertical="top"
            />
          </View>

          {/* Button group */}
          <View className="flex-row justify-between mb-6">
            <Button variant="outline" className="flex-1 mr-2" onPress={() => router.push("/(tabs)")}>
              Voltar para Início
            </Button>
            <Button className="flex-1" onPress={handleSubmitFeedback} disabled={!selectedTrainer || rating === 0}>
              Enviar Avaliação
            </Button>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
