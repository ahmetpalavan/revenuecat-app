import { View, Text, SafeAreaView, Image, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import ActionRow from "../components/ActionRow";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";
import { useNavigation } from "@react-navigation/native";

export type Props = NativeStackNavigationProp<RootStackParamList, "Home">;

const HomeScreen = () => {
  const navigation = useNavigation<Props>();
  return (
    <SafeAreaView className="flex-1 bg-white relative">
      <ScrollView>
        <TouchableOpacity onPress={() => navigation.navigate("Paywall")} className="absolute z-50 top-5 right-10 items-center">
          <Ionicons name="person-circle" size={24} color="#E5962D" />
          <Text className="text-sm text-center font-bold text-[#E5962D]">Pro/Upgrade</Text>
        </TouchableOpacity>
        <Image
          source={{
            uri: "https://i.imgur.com/e14NE49.png",
          }}
          className="w-full h-64"
        />
        <View className="mx-5">
          <View className="flex-row justify-between space-x-2">
            <ActionRow title="Track Workout" vertical screen="Demo" color="#E5962D" icon="fitness" />
            <ActionRow title="Browse Workout" vertical screen="Demo" color="#1982C4" icon="library" />
          </View>
          <ActionRow title="Connect with Friends" vertical screen="Demo" color="#F472B6" icon="share-social" />
          <ActionRow title="Add an exercise" vertical screen="Demo" color="#8AC926" icon="add-circle" requiresPro />
          <ActionRow title="Create a routine" vertical screen="Demo" color="#C03221" icon="md-time" requiresPro />
          <ActionRow title="Join Challenges" vertical screen="Demo" color="#F9C74F" icon="trophy" requiresPro />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
