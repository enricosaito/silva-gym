// app/schedule-class.tsx
import React, { useState } from "react";
import { Text, View, SafeAreaView, ScrollView, Pressable, Alert } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useTheme } from "./context/ThemeContext";
import Header from "./components/ui/Header";
import Button from "./components/ui/Button";

// Define time slots available for classes
const WEEKDAY_TIME_SLOTS = [
  "06:00 - 07:30",
  "07:30 - 09:00",
  "09:00 - 10:30",
  "10:30 - 12:00",
  "12:00 - 13:30",
  "13:30 - 15:00",
  "15:00 - 16:30",
  "16:30 - 18:00",
  "18:00 - 19:30",
  "19:30 - 21:00",
  "21:00 - 22:30",
];

// Saturday has limited hours
const SATURDAY_TIME_SLOTS = [
  "08:00 - 09:30",
  "09:30 - 11:00",
  "11:00 - 12:30",
  "12:30 - 14:00",
  "14:00 - 15:30",
  "15:30 - 17:00",
];

type ClassType = "superiores" | "inferiores";

// Sample data for available capacity
const getInitialAvailability = () => {
  const availability: Record<string, Record<ClassType, { total: number; booked: number }>> = {};

  // Initialize for all weekday time slots
  WEEKDAY_TIME_SLOTS.forEach((slot) => {
    availability[slot] = {
      superiores: { total: 15, booked: Math.floor(Math.random() * 10) },
      inferiores: { total: 15, booked: Math.floor(Math.random() * 10) },
    };
  });

  // Initialize for Saturday time slots
  SATURDAY_TIME_SLOTS.forEach((slot) => {
    availability[slot] = {
      superiores: { total: 15, booked: Math.floor(Math.random() * 10) },
      inferiores: { total: 15, booked: Math.floor(Math.random() * 10) },
    };
  });

  return availability;
};

export default function ScheduleClassScreen() {
  const router = useRouter();
  const { colors } = useTheme();

  // State for selected day, class type and time slot
  const [selectedDay, setSelectedDay] = useState<number>(0); // 0 is today
  const [selectedType, setSelectedType] = useState<ClassType | null>(null);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string | null>(null);

  // State to track if selected day is Saturday
  const [isSaturdaySelected, setIsSaturdaySelected] = useState<boolean>(false);

  // Sample availability data
  const [availability] = useState(getInitialAvailability());

  // Get day names for the next 6 days (excluding Sunday)
  const getDayLabels = () => {
    const days = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];
    const today = new Date();
    const result = [];

    // Get days starting from today
    for (let i = 0; i < 14; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      const dayOfWeek = date.getDay();

      // Skip Sundays (0 is Sunday in JavaScript)
      if (dayOfWeek !== 0) {
        result.push({
          dayName: days[dayOfWeek],
          dayNumber: date.getDate(),
          isToday: i === 0,
          isSaturday: dayOfWeek === 6,
        });
      }

      // Stop once we have 6 days (or we've gone through 2 weeks worth of days)
      if (result.length >= 6) break;
    }

    return result;
  };

  const dayLabels = getDayLabels();

  // Get the appropriate time slots based on the selected day
  const getTimeSlots = () => {
    return isSaturdaySelected ? SATURDAY_TIME_SLOTS : WEEKDAY_TIME_SLOTS;
  };

  // Function to handle class booking
  const handleBookClass = () => {
    if (!selectedType || !selectedTimeSlot) {
      Alert.alert("Erro", "Por favor selecione o tipo de aula e horário.");
      return;
    }

    Alert.alert(
      "Confirmar Agendamento",
      `Deseja confirmar sua aula de ${
        selectedType === "superiores" ? "Superiores" : "Inferiores"
      } no horário ${selectedTimeSlot}?`,
      [
        {
          text: "Cancelar",
          style: "cancel",
        },
        {
          text: "Confirmar",
          onPress: () => {
            // Here you would make the API call to book the class
            Alert.alert("Reserva Confirmada", "Sua aula foi agendada com sucesso!", [
              {
                text: "OK",
                onPress: () => router.back(),
              },
            ]);
          },
        },
      ]
    );
  };

  // Calculate availability status for a slot
  const getAvailabilityStatus = (slot: string, type: ClassType) => {
    const slotData = availability[slot][type];
    const availableSpots = slotData.total - slotData.booked;

    if (availableSpots === 0) return "lotado";
    if (availableSpots <= 3) return "quase lotado";
    return "disponível";
  };

  // Get color for availability status
  const getAvailabilityColor = (status: string) => {
    switch (status) {
      case "lotado":
        return "text-red-500";
      case "quase lotado":
        return "text-yellow-500";
      case "disponível":
        return "text-green-500";
      default:
        return "text-muted-foreground";
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-background">
      <Header title="Agendar Aula" showNotifications={false} />

      <ScrollView className="flex-1 px-4">
        <View className="py-6">
          {/* Day selector */}
          <Text className="text-xl font-bold text-foreground mb-4">Selecione o Dia</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mb-6">
            {dayLabels.map((day, index) => (
              <Pressable
                key={index}
                className={`w-16 h-20 rounded-xl mr-2 items-center justify-center border ${
                  selectedDay === index ? "border-primary bg-primary/10" : "border-border bg-card"
                }`}
                onPress={() => {
                  setSelectedDay(index);
                  setIsSaturdaySelected(day.isSaturday);
                  setSelectedTimeSlot(null); // Reset time slot when changing day
                }}
              >
                <Text className={`text-sm ${selectedDay === index ? "text-primary" : "text-muted-foreground"}`}>
                  {day.dayName}
                </Text>
                <Text className={`text-xl font-bold ${selectedDay === index ? "text-primary" : "text-foreground"}`}>
                  {day.dayNumber}
                </Text>
                {day.isToday && (
                  <View
                    className={`px-2 py-0.5 rounded-full mt-1 ${selectedDay === index ? "bg-primary" : "bg-muted"}`}
                  >
                    <Text className={`text-xs ${selectedDay === index ? "text-white" : "text-muted-foreground"}`}>
                      Hoje
                    </Text>
                  </View>
                )}
              </Pressable>
            ))}
          </ScrollView>

          {/* Class type selector */}
          <Text className="text-xl font-bold text-foreground mb-4">Tipo de Aula</Text>
          <View className="flex-row mb-6">
            <Pressable
              className={`flex-1 h-24 rounded-xl border mr-2 items-center justify-center ${
                selectedType === "superiores" ? "border-primary bg-primary/10" : "border-border bg-card"
              }`}
              onPress={() => setSelectedType("superiores")}
            >
              <View
                className={`w-12 h-12 rounded-full items-center justify-center mb-2 ${
                  selectedType === "superiores" ? "bg-primary" : "bg-muted"
                }`}
              >
                <Feather
                  name="trending-up"
                  size={24}
                  color={selectedType === "superiores" ? "white" : colors.mutedForeground}
                />
              </View>
              <Text className={selectedType === "superiores" ? "text-primary font-medium" : "text-foreground"}>
                Superiores
              </Text>
            </Pressable>

            <Pressable
              className={`flex-1 h-24 rounded-xl border items-center justify-center ${
                selectedType === "inferiores" ? "border-primary bg-primary/10" : "border-border bg-card"
              }`}
              onPress={() => setSelectedType("inferiores")}
            >
              <View
                className={`w-12 h-12 rounded-full items-center justify-center mb-2 ${
                  selectedType === "inferiores" ? "bg-primary" : "bg-muted"
                }`}
              >
                <Feather
                  name="trending-down"
                  size={24}
                  color={selectedType === "inferiores" ? "white" : colors.mutedForeground}
                />
              </View>
              <Text className={selectedType === "inferiores" ? "text-primary font-medium" : "text-foreground"}>
                Inferiores
              </Text>
            </Pressable>
          </View>

          {/* Time slot selector */}
          <Text className="text-xl font-bold text-foreground mb-4">Horário</Text>
          <View className="mb-6">
            {getTimeSlots().map((slot, index) => {
              // Only show time slots if a class type is selected
              if (!selectedType) return null;

              const availabilityStatus = getAvailabilityStatus(slot, selectedType);
              const statusColor = getAvailabilityColor(availabilityStatus);
              const isDisabled = availabilityStatus === "lotado";

              return (
                <Pressable
                  key={index}
                  className={`flex-row items-center justify-between p-4 border rounded-xl mb-2 ${
                    selectedTimeSlot === slot
                      ? "border-primary bg-primary/10"
                      : isDisabled
                      ? "border-border bg-card/60 opacity-60"
                      : "border-border bg-card"
                  }`}
                  onPress={() => !isDisabled && setSelectedTimeSlot(slot)}
                  disabled={isDisabled}
                >
                  <View className="flex-row items-center">
                    <View
                      className={`w-10 h-10 rounded-full items-center justify-center mr-3 ${
                        selectedTimeSlot === slot ? "bg-primary" : "bg-muted"
                      }`}
                    >
                      <Feather
                        name="clock"
                        size={20}
                        color={selectedTimeSlot === slot ? "white" : colors.mutedForeground}
                      />
                    </View>
                    <Text
                      className={`text-lg ${
                        selectedTimeSlot === slot ? "text-primary font-medium" : "text-foreground"
                      }`}
                    >
                      {slot}
                    </Text>
                  </View>

                  <View className="flex-row items-center">
                    <Text className={`text-sm ${statusColor} mr-2`}>
                      {availabilityStatus.charAt(0).toUpperCase() + availabilityStatus.slice(1)}
                    </Text>
                    <Text className="text-muted-foreground text-sm">
                      {availability[slot][selectedType].booked}/{availability[slot][selectedType].total}
                    </Text>
                  </View>
                </Pressable>
              );
            })}
          </View>

          {/* Booking button */}
          <View className="flex-row justify-between mb-6">
            <Button variant="outline" className="flex-1 mr-2" onPress={() => router.push("/(tabs)")}>
              Voltar para Início
            </Button>
            <Button className="flex-1" onPress={handleBookClass} disabled={!selectedType || !selectedTimeSlot}>
              Confirmar Agendamento
            </Button>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
