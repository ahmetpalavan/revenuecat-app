import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { RootStackParamList } from "../App";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type NavigationProp = NativeStackNavigationProp<RootStackParamList, "Home">;

interface ActionRowProps {
  title: string;
  screen: any;
  color: string;
  requiresPro?: boolean;
  icon?: any;
  vertical?: boolean;
}

const ActionRow = (props: ActionRowProps) => {
  const navigation = useNavigation<NavigationProp>();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate(props.screen);
      }}
      className={`flex m-2 flex-1 py-6 justify-center items-center rounded-lg shadow-lg space-x-2
        ${props.vertical ? "flex-col" : "flex-row"}
      `}
      style={{
        backgroundColor: props.color,
      }}
    >
      <Ionicons name={props.icon} size={30} color={"white"} />
      <Text className="text-white font-bold italic">{props.title}</Text>
    </TouchableOpacity>
  );
};

export default ActionRow;
