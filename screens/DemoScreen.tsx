import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import React from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

export type Prop = NativeStackNavigationProp<RootStackParamList, "Demo">;

const DemoScreen = () => {
  const navigation = useNavigation<Prop>();
  return (
    <SafeAreaView className="bg-[#E5962D] flex-1">
      <TouchableOpacity className="flex-row items-center p-5" onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={50} color="white" />
        <Text className="text-white  font-bold">Go Back</Text>
      </TouchableOpacity>
      <View
        className="flex-1
         justify-center items-center px-10
      "
      >
        <Text className="text-3xl font-extrabold">This is the demo screen</Text>
        <Text className="text-xl font-extrabold mb-20">You have access to this feature</Text>
        <Ionicons name="build-outline" size={200} color="white" />
        <View className="-mt-16 -ml-8">
          <Ionicons name="checkmark-circle" size={60} color="#96F550" />
        </View>
        <Text className="text-xl font-bold mt-10 flex-1 text-center">Because you are a Pro user</Text>
      </View>
    </SafeAreaView>
  );
};

export default DemoScreen;
