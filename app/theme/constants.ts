// app/theme/constants.ts
export const MACRO_COLORS = {
  protein: {
    bg: "#ff500020", // Hot orange with opacity
    text: "#ff5000",
  },
  carbs: {
    bg: "#fbbf2420", // Amber yellow with opacity
    text: "#fbbf24",
  },
  fat: {
    bg: "#f4345420", // Red with opacity
    text: "#f43454",
  },
};

export const MEAL_TYPE_COLORS = {
  breakfast: "#ff5000", // Hot orange
  lunch: "#fbbf24", // Amber yellow
  dinner: "#ec4899", // Pink (more energetic, fits gym aesthetic)
  snack: "#f43f5e", // Bright red-pink
};

export const PROGRESS_COLORS = {
  under: "#ff5000", // Hot orange for under target
  target: "#22c55e", // Green for at target
  over: "#ef4444", // Red for over target
};

export default {
  MACRO_COLORS,
  MEAL_TYPE_COLORS,
  PROGRESS_COLORS,
};
