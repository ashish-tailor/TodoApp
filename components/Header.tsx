import { createHomeStyles } from "@/assets/styles/home.styles";
import { api } from "@/convex/_generated/api";
import useTheme from "@/hooks/useTheme";
import { Ionicons } from "@expo/vector-icons";
import { useQuery } from "convex/react";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Text, View } from "react-native";

const Header = () => {
  const { colors } = useTheme();

  const headerStyles = createHomeStyles(colors);

  const todos = useQuery(api.todos.getTodos);

  const completedCount = todos
    ? todos?.filter((todo) => todo.isCompleted).length
    : 0;
  const totalCount = todos ? todos.length : 0;
  const pregressPercentage =
    totalCount > 0 ? (completedCount / totalCount) * 100 : 0;

  return (
    <View style={headerStyles.header}>
      {/* Icon Container */}
      <View style={headerStyles.titleContainer}>
        <LinearGradient
          colors={colors.gradients.primary}
          style={headerStyles.iconContainer}
        >
          <Ionicons name="flash-outline" size={28} color={"#ffffff"} />
        </LinearGradient>

        {/* Title and Progress Container */}
        <View style={headerStyles.titleTextContainer}>
          <Text style={headerStyles.title}>Today&apos;s Tasks 👀</Text>
          <Text style={headerStyles.subtitle}>
            {completedCount} of {totalCount} completed
          </Text>
        </View>
      </View>

      {/* Progress Bar Container */}
      <View style={headerStyles.progressContainer}>
        <View style={headerStyles.progressBarContainer}>
          <View style={headerStyles.progressBar}>
            <LinearGradient
              colors={colors.gradients.success}
              style={[
                headerStyles.progressFill,
                { width: `${pregressPercentage}%` },
              ]}
            />
          </View>
          <Text style={headerStyles.progressText}>
            {Math.round(pregressPercentage)}%
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Header;
