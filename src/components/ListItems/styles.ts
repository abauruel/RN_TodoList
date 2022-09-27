import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#262626",
    marginTop: 8,
    marginBottom: 8,
    flexDirection: "row",
    height: 64,
    borderRadius: 8,
    alignItems: "center",
  },
  textItem: {
    color: "#fff",
    fontSize: 16,
    flex: 1,
    marginHorizontal: 8,
  },
  textItemChecked: {
    color: "#808080",
    textDecorationLine: "line-through",
  },
});
