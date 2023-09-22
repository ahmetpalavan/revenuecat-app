import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export type Props = NativeStackNavigationProp<RootStackParamList, "Paywall">;

const PaywallScreen = () => {
  const navigation = useNavigation<Props>();
  return (
    <ScrollView className="flex-1 bg-[#1A2F44]">
      <View className="m-10 space-y-2">
        <Text className="text-white text-2xl font-bold text-center uppercase mt-10">Upgrade to Pro</Text>
        <Text className="text-white  font-semibold text-center">Unlock all features</Text>
      </View>
      <TouchableOpacity onPress={() => navigation.goBack()} className="absolute top-0 right-0 p-5 items-center">
        <Ionicons name="md-close-circle-sharp" size={32} color="#96F550" />
        <Text className="text-sm text-center font-bold text-[#96F550]">Close</Text>
      </TouchableOpacity>

      <View className="items-center">
        <MaterialCommunityIcons name="crown" size={150} color="#96F550" />
      </View>

      <View className="space-y-5 px-10 pt-5">
        <View className="flex-row space-x-10 items-center">
          <Ionicons name="md-key" size={24} color="#96F550" />
          <View className="flex-1">
            <Text className="text-white font-bold">Unlock all features</Text>
            <Text className="text-white text">Upgrade to Pro to unlock all features</Text>
          </View>
        </View>
        <View className="flex-row space-x-10 items-center">
          <Ionicons name="md-person-add-outline" size={24} color="#96F550" />
          <View className="flex-1">
            <Text className="text-white font-bold">Unlock all features</Text>
            <Text className="text-white text">Upgrade to Pro to unlock all features</Text>
          </View>
        </View>
        <View className="flex-row space-x-10 items-center">
          <Ionicons name="md-star" size={24} color="#96F550" />
          <View className="flex-1">
            <Text className="text-white font-bold">Unlock all features</Text>
            <Text className="text-white text">Upgrade to Pro to unlock all features</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default PaywallScreen;
