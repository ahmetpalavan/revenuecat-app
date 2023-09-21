import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Text, TouchableOpacity } from "react-native";

interface ActionRowProps {
  title: string;
  screen: any;
  color: string;
  requiresPro?: boolean;
  icon?: any;
  vertical?: boolean;
}

const ActionRow = (props: ActionRowProps) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: props.color,
      }}
    >
      <Ionicons name={props.icon} size={30} color={"white"} />
      <Text>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default ActionRow;
