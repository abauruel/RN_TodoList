import React from "react";
import { View, Image, Text } from "react-native";
import Clipboard from "../../assets/Clipboard.png";

import { styles } from "./styles";

export function EmptyList() {
  return (
    <View>
      <View style={styles.emptyContainer}>
        <Image source={Clipboard} style={styles.clipboard} />
        <Text style={styles.mainTextEmpty}>
          {" "}
          Você ainda não tem tarefas cadastradas
        </Text>
        <Text style={styles.subTextEmpty}>
          {" "}
          Crie tarefas e organize seus itens a fazer
        </Text>
      </View>
    </View>
  );
}
