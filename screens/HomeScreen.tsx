import { View, Text, SafeAreaView, Image, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import ActionRow from "../components/ActionRow";

const HomeScreen = () => {
  return (
    <SafeAreaView className="flex-1  bg-gray-100">
      <ScrollView>
        <TouchableOpacity className="absolute z-50 top-5 right-10 items-center">
          <Ionicons name="person-circle" size={24} color="#E5962D" />
          <Text className="text-sm text-center font-bold text-[#E5962D]">Pro/Upgrade</Text>
        </TouchableOpacity>
        <Image
          source={{
            uri: "https://i.imgur.com/e14NE49.png",
          }}
          className="w-full h-64"
        />
        <ActionRow title="Track Workout" vertical screen="Game" color="#E5962D" icon="library" />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
