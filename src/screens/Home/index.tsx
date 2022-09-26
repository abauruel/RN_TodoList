import React from "react";
import {
  TextInput,
  View,
  TouchableOpacity,
  Image,
  Text,
  FlatList,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { styles } from "./styles";

import logo from "../../assets/logo.png";
import Clipboard from "../../assets/Clipboard.png";

const tasks = [
  {
    id: 1,
    description: "testestet",
    finished: false,
  },
];

export function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.headerContent}>
        <View style={styles.containerImage}>
          <Image source={logo} style={styles.image} />
        </View>
        <View style={styles.containerInput}>
          <TextInput
            style={styles.input}
            placeholderTextColor="#808080"
            placeholder="Adicione uma nova tarefa"
          />
          <TouchableOpacity style={styles.addButton}>
            <Feather name="plus-circle" size={16} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.todoContent}>
        <View style={styles.headerTags}>
          <View style={styles.containerTag}>
            <Text style={styles.TagText}>Criadas</Text>
            <View style={styles.tag}>
              <Text style={styles.numberTag}>0</Text>
            </View>
          </View>
          <View style={styles.containerTag}>
            <Text style={styles.TagTextFinished}>Concluidas</Text>
            <View style={styles.tag}>
              <Text style={styles.numberTag}>0</Text>
            </View>
          </View>
        </View>
        <FlatList
          data={tasks}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => <Text>Item</Text>}
          ListEmptyComponent={() => (
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
          )}
        />
      </View>
    </View>
  );
}
