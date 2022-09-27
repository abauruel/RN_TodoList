import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./styles";

type ListItemsProps = {
  item: {
    id: number;
    finished: boolean;
    description: string;
  };
  onRemoveItem: (id: number) => void;
  onFinishTask: (id: number) => void;
};

export function ListItems({
  item,
  onRemoveItem,
  onFinishTask,
}: ListItemsProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => onFinishTask(item.id)}>
        {item.finished ? (
          <Ionicons
            style={{ paddingLeft: 20 }}
            name="ios-checkmark-circle-sharp"
            size={24}
            color="#5E60CE"
          />
        ) : (
          <Ionicons
            style={{ paddingLeft: 20 }}
            name="md-radio-button-off"
            size={24}
            color="#4EA8De"
          />
        )}
      </TouchableOpacity>
      <Text
        style={
          item.finished
            ? [styles.textItem, styles.textItemChecked]
            : styles.textItem
        }
      >
        {item.description}
      </Text>
      <TouchableOpacity
        style={{ marginHorizontal: 8 }}
        onPress={() => onRemoveItem(item.id)}
      >
        <Ionicons
          name="md-trash-outline"
          size={24}
          color="#808080"
          style={{ padding: 9 }}
        />
      </TouchableOpacity>
    </View>
  );
}
