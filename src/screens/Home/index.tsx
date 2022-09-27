import React, { useMemo, useState } from "react";
import {
  TextInput,
  View,
  TouchableOpacity,
  Image,
  Text,
  FlatList,
  Alert,
} from "react-native";
import { Feather, Ionicons } from "@expo/vector-icons";
import { styles } from "./styles";

import logo from "../../assets/logo.png";

import { ListItems } from "../../components/ListItems";
import { EmptyList } from "../../components/EmptyList";

type taskProps = {
  id: number;
  finished: boolean;
  description: string;
};

export function Home() {
  const [task, setTask] = useState<taskProps>({} as taskProps);
  const [taskList, setTaskList] = useState<taskProps[]>([]);

  function handleAddNameTask(text: string) {
    setTask({ id: taskList.length + 1, description: text, finished: false });
  }

  function handleAddTask() {
    if (!task.description.trim()) {
      return;
    }
    if (taskList.find((t) => t.description == task.description)) {
      Alert.alert("Tarefa já existente", "Deseja incluir mesmo assim?", [
        {
          text: "Sim",
          onPress: () => {
            setTaskList([...taskList, task]);
            setTask({} as taskProps);
          },
        },
        {
          text: "Não",
          style: "cancel",
        },
      ]);
    } else {
      setTaskList([...taskList, task]);
      setTask({} as taskProps);
    }
  }

  function handleRemoveTask(id: number) {
    setTaskList((presState) => presState.filter((item) => item.id != id));
  }

  function handleFinishedTask(id: number) {
    const taskupdated = taskList.map((task) => {
      if (task.id == id) {
        const taskUpdated = {
          ...task,
          finished: !task.finished,
        };
        return taskUpdated;
      }
      return task;
    });

    setTaskList(taskupdated);
  }

  const amountTaskFinished = useMemo(() => {
    return taskList.reduce((total = 0, curr) => {
      if (curr.finished) {
        return (total += 1);
      }
    }, 0);
  }, [taskList]);

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
            value={task.description}
            onChangeText={(text) => handleAddNameTask(text)}
          />
          <TouchableOpacity style={styles.addButton} onPress={handleAddTask}>
            <Feather name="plus-circle" size={16} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.todoContent}>
        <View style={styles.headerTags}>
          <View style={styles.containerTag}>
            <Text style={styles.TagText}>Criadas</Text>
            <View style={styles.tag}>
              <Text style={styles.numberTag}>{taskList.length}</Text>
            </View>
          </View>
          <View style={styles.containerTag}>
            <Text style={styles.TagTextFinished}>Concluidas</Text>
            <View style={styles.tag}>
              <Text style={styles.numberTag}>{amountTaskFinished ?? 0}</Text>
            </View>
          </View>
        </View>
        <FlatList
          data={taskList}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <ListItems
              item={item}
              onRemoveItem={handleRemoveTask}
              onFinishTask={handleFinishedTask}
            />
          )}
          ListEmptyComponent={() => <EmptyList />}
        />
      </View>
    </View>
  );
}
